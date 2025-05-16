using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol;
using SurveyAnketOrnek.Data;
using SurveyAnketOrnek.Models;
using SurveyAnketOrnek.Models.Dtos.AccountDtos;

namespace SurveyAnketOrnek.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class AccountController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly AppDbContext _context;
        
        //kullanıcıya şifresini sıfırlamak için sonradan ihtiyaç duyulursa kullanıma sunulacaktır.
        //private readonly SmtpSettings _smtpSettings;

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, AppDbContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _context = context;
        }

        public async Task<IActionResult> UserList()
        {
            //var result = await _context.Users
            //                          .Select(u => new UserListDto
            //                          {
            //                               Name = u.Name,
            //                               Surname = u.Surname,
            //                               UserName = u.UserName,
            //                               Email = u.Email
            //                          }).ToListAsync();

            //return View(result);

            var users = await _userManager.Users.ToListAsync();

            var userList = new List<UserListDto>();

            foreach (var user in users)
            {
                var roles = await _userManager.GetRolesAsync(user);

                userList.Add(new UserListDto
                {
                    Id = user.Id,
                    Name = user.Name,
                    Surname = user.Surname,
                    UserName = user.UserName,
                    Email = user.Email,
                    Roles = roles.ToList()
                });
            }

            return View(userList);
        }

        #region atananan rolü düzenleme işlemleri bölümü

        [HttpGet]
        public async Task<IActionResult> EditUserRole(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
                return NotFound();

            var userRoles = await _userManager.GetRolesAsync(user);
            var allRoles = await _context.Roles.Select(r => r.Name).ToListAsync();

            var model = new EditUserRoleDto
            {
                UserId = user.Id,
                UserName = user.UserName,
                CurrentRole = userRoles.FirstOrDefault(),
                Roles = allRoles
            };

            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> EditUserRole(EditUserRoleDto model)
        {
            var user = await _userManager.FindByIdAsync(model.UserId.ToString());
            if (user == null)
                return NotFound();

            var currentRoles = await _userManager.GetRolesAsync(user);

            // Önce mevcut rolleri kaldır
            var removeResult = await _userManager.RemoveFromRolesAsync(user, currentRoles);
            if (!removeResult.Succeeded)
            {
                ModelState.AddModelError("", "Mevcut roller silinemedi.");
                return View(model);
            }

            // Yeni rol ata
            var addResult = await _userManager.AddToRoleAsync(user, model.NewRole);
            if (!addResult.Succeeded)
            {
                ModelState.AddModelError("", "Yeni rol atanamadı.");
                return View(model);
            }

            return RedirectToAction("UserList");
        }



        #endregion

        public async Task<IActionResult> Register()
        {
            ViewBag.Roles = await _context.Roles.Select(r => r.Name).ToListAsync();

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterDto register)
        {
            if(!ModelState.IsValid)
            {
                ViewBag.Roles = await _context.Roles.Select(r => r.Name).ToListAsync();

                return View(register);
            }

            var user = new AppUser
            {
                Name = register.Name,
                Surname=register.Surname,
                UserName = register.UserName,
                Email = register.Email
            };

            var result=await _userManager.CreateAsync(user,register.Password);

            if (result.Succeeded)
            {

                #region Rol Atama Bölümü

                if (!string.IsNullOrEmpty(register.Role))
                {
                    var roleExists = await _context.Roles.AnyAsync(r => r.Name == register.Role);
                    if (roleExists)
                    {
                        await _userManager.AddToRoleAsync(user, register.Role);
                    }
                }

                #endregion

                await _signInManager.SignInAsync(user,isPersistent: false);

                return RedirectToAction("Index", "Main");
            }

            foreach (var error in result.Errors)
            {
                ModelState.AddModelError("", error.Description);
            }

            return View(register);
        }

        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginDto login)
        {
            if (!ModelState.IsValid)
            {
                return View(login);
            }

            var user = await _userManager.FindByEmailAsync(login.Email);

            if (user == null)
            {
                ModelState.AddModelError("", "Kullanıcı bulunamadı.");
                return View(login);
            }

            var result = await _signInManager.PasswordSignInAsync(user.UserName, login.Password, false, false);

            if (result.Succeeded)
            {
                return RedirectToAction("Index", "Main");
            }
            else if (result.IsLockedOut)
            {
                ModelState.AddModelError("", "Hesabınız geçici olarak kilitlenmiştir.");
            }
            else
            {
                ModelState.AddModelError("", "Giriş başarısız.");
            }

            return View(login);
        }



        
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();

            return RedirectToAction("Login", "Account");
        }

        public IActionResult ForgotPassword()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> ForgotPassword(ForgotPasswordDto forgotPassword)
        {
            if (!ModelState.IsValid)
            {
                return View(forgotPassword);
            }

            var user = await _userManager.FindByEmailAsync(forgotPassword.Email);

            if (user == null)
            {
                return RedirectToAction("ForgotPasswordConfirmation");
            }

            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var resetLink = Url.Action("ResetPassword", "Account", new { token, email = forgotPassword.Email }, Request.Scheme);

            var body = $"<p>Şifrenizi sıfırlamak için <a href='{resetLink}'>buraya tıklayın</a>.</p>";
            //await SendEmailAsync(forgotPassword.Email, "Şifre Sıfırlama", body);

            return View("ForgotPasswordConfirmation");
        }



        [HttpGet]
        public IActionResult ResetPassword(string token, string email)
        {
            if (token == null || email == null)
            {
                return RedirectToAction("Error", "Home"); // veya özel bir hata sayfası
            }

            var model = new ResetPasswordDto { Token = token, Email = email };
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> ResetPassword(ResetPasswordDto model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                // Kullanıcı yoksa bile başarılı gibi davran
                return RedirectToAction("ResetPasswordConfirmation");
            }

            var resetPassResult = await _userManager.ResetPasswordAsync(user, model.Token, model.NewPassword);

            if (resetPassResult.Succeeded)
            {
                return RedirectToAction("ResetPasswordConfirmation");
            }

            foreach (var error in resetPassResult.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }

            return View(model);
        }

        public IActionResult ResetPasswordConfirmation()
        {
            return View();
        }

        #region Profil sayfası bölümü


        // GET: Admin/AppUsers/Edit/5
        [HttpGet]
        public async Task<IActionResult> Profile()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound();
            }

            var model = new UserProfilDto
            {
                Id = user.Id,
                Name = user.Name,
                Surname = user.Surname,
                UserName = user.UserName,
                Email = user.Email
            };

            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Profile(UserProfilDto model)
        {

            return RedirectToAction("Index", "Home", new { area = "" });
        }



        #endregion

        #region Profil Düzenlemesi Sayfası Bölümü

        [HttpGet]
        public async Task<IActionResult> ProfileEdit()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound();
            }

            var model = new UserProfilEditDto
            {
                Id = user.Id,
                Name = user.Name,
                Surname = user.Surname,
                UserName = user.UserName,
                Email = user.Email
            };

            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ProfileEdit(UserProfilEditDto model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var user = await _userManager.FindByIdAsync(model.Id.ToString());
            if (user == null)
            {
                return NotFound();
            }

            // Güncellenebilir alanlar
            user.Name = model.Name;
            user.Surname = model.Surname;
            user.UserName = model.UserName;
            user.Email = model.Email;

            var result = await _userManager.UpdateAsync(user);

            if (result.Succeeded)
            {
                TempData["Success"] = "Profil bilgileriniz başarıyla güncellendi.";

                return RedirectToAction("Profile");
            }

            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }

            return View(model);
        }


        #endregion

        //[Authorize]
        public IActionResult ChangePassword()
        {
            return View();
        }

        //[Authorize]
        [HttpPost]
        public async Task<IActionResult> ChangePassword(ChangePasswordDto model)
        {
            if (!ModelState.IsValid)
                return View(model);

            var user = await _userManager.GetUserAsync(User);

            // Kullanıcının mevcut bir şifresi varsa, önce sil
            var removeResult = await _userManager.RemovePasswordAsync(user);

            if (!removeResult.Succeeded)
            {
                ModelState.AddModelError("", "Şifre kaldırılırken hata oluştu.");
                return View(model);
            }

            // Yeni şifreyi ekle
            var addResult = await _userManager.AddPasswordAsync(user, model.NewPassword);

            if (addResult.Succeeded)
            {
                TempData["Success"] = "Şifreniz başarıyla değiştirildi.";

                return RedirectToAction("Profile", "Account");
            }

            foreach (var error in addResult.Errors)
            {
                ModelState.AddModelError("", error.Description);
            }

            return View(model);
        }
    }
}
