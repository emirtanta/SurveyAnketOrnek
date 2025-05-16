using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models.Dtos.AccountDtos
{
    public class ResetPasswordDto
    {
        [Required(ErrorMessage ="E-posta adresi zorunludur!")]
        [Display(Name = "E-posta")]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Token")]
        public string Token { get; set; }

        [Required(ErrorMessage = "Yeni şifre zorunludur!")]
        [Display(Name = "Yeni Şifre")]
        public string NewPassword { get; set; }

        [Required(ErrorMessage = "Yeni şifre tekrar zorunludur!")]
        [Display(Name = "Yeni Şifre Tekrar")]
        [Compare("NewPassword", ErrorMessage = "Şifreler uyuşmuyor!")]
        public string ConfirmNewPassword { get; set; }
    }
}
