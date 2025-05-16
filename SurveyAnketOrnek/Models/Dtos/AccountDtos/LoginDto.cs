using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models.Dtos.AccountDtos
{
    public class LoginDto
    {
        [Required(ErrorMessage ="E-posta adresi zorunludur!")]
        [Display(Name ="E-posta")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required(ErrorMessage ="Şifre alanı zorunludur!")]
        [Display(Name ="Şifre")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
