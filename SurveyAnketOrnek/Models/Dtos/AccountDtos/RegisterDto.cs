using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models.Dtos.AccountDtos
{
    public class RegisterDto
    {

        [Required(ErrorMessage = "Ad zorunludur!")]
        [Display(Name = "Ad")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Soyad zorunludur!")]
        [Display(Name = "Soyad")]
        public string Surname { get; set; }

        [Required(ErrorMessage = "Kullanıcı adı zorunludur!")]
        [Display(Name = "Kullanıcı Adı")]
        public string UserName { get; set; }

        [Required(ErrorMessage ="E-posta zorunludur!")]
        [Display(Name ="Eposta")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required(ErrorMessage ="Şifre zorunludur!")]
        [Display(Name ="Şifre")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage ="Şifre tekrar alanı zorunludur")]
        [Display(Name ="Şifre Tekrar")]
        [DataType(DataType.Password)]
        [Compare("Password",ErrorMessage ="Şifreler uyuşmuyor")]
        public string ConfirmPassword { get; set; }

        [Display(Name ="Rolü")]
        public string Role { get; set; }
    }
}
