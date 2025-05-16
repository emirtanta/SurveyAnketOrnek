using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SurveyAnketOrnek.Data;
using SurveyAnketOrnek.Models;

namespace SurveyAnketOrnek.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class RolesController : Controller
    {
        private readonly RoleManager<AppRole> _roleManager;
        private readonly AppDbContext _context;

        public RolesController(RoleManager<AppRole> roleManager, AppDbContext context)
        {
            _roleManager = roleManager;
            _context = context;
        }

        public async Task<IActionResult> RoleList()
        {
            var result = await _roleManager.Roles.ToListAsync();
            
            return View(result);
        }

        public IActionResult RoleCreate()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> RoleCreate(AppRole appRole)
        {
            if (ModelState.IsValid)
            {
                var result = await _roleManager.CreateAsync(appRole);
                if (result.Succeeded)
                    return RedirectToAction(nameof(RoleList));

                foreach (var error in result.Errors)
                    ModelState.AddModelError("", error.Description);
            }
            return View(appRole);
        }

        [HttpGet]
        public async Task<IActionResult> RoleEdit(int id)
        {
            var role = await _roleManager.FindByIdAsync(id.ToString());
            
            if (role == null)
                return NotFound();

            return View(role);

        }

        [HttpPost]
        public async Task<IActionResult> RoleEdit(int id,AppRole appRole)
        {
            var role = await _roleManager.FindByIdAsync(appRole.Id.ToString());
            if (role == null)
                return NotFound();

            role.Name = appRole.Name;

            var result = await _roleManager.UpdateAsync(role);
            if (result.Succeeded)
                return RedirectToAction(nameof(RoleList));

            foreach (var error in result.Errors)
                ModelState.AddModelError("", error.Description);

            return View(appRole);
        }

        public async Task<IActionResult> RoleDelete(int id)
        {
            var role = await _roleManager.FindByIdAsync(id.ToString());
            if (role == null)
                return NotFound();

            var result = await _roleManager.DeleteAsync(role);
            return RedirectToAction(nameof(RoleList));
        }
    }
}
