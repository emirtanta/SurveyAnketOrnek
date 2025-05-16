using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models.Dtos.AccountDtos
{
    public class ChangePasswordDto
    {

        [Required(ErrorMessage ="Yeni şifre zorunludur!")]
        [Display(Name ="Yeni Şifre")]
        public string NewPassword { get; set; }

        [Required(ErrorMessage ="Yeni şifre alanı zorunludur!")]
        [Display(Name = "Yeni Şifre Tekrar")]
        [Compare("NewPassword",ErrorMessage ="Yeni şifre değerleri uyuşmuyor!")]
        public string ConfirmNewPassword { get; set; }
    }
}
