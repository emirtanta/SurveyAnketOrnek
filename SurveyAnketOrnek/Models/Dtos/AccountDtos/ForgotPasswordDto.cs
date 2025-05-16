using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models.Dtos.AccountDtos
{
    public class ForgotPasswordDto
    {
        [Required(ErrorMessage ="E-posta zorunludur!")]
        [Display(Name ="E-posta")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    }
}
