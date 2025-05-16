using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models.Dtos.AccountDtos
{
    public class UserProfilEditDto
    {
        public int Id { get; set; }

        [Display(Name = "Ad")]
        public string Name { get; set; }

        [Display(Name = "Soyad")]
        public string Surname { get; set; }

        [Display(Name = "Kullanıcı Adı")]
        public string UserName { get; set; }

        [Display(Name = "E-Posta")]
        public string Email { get; set; }
    }
}
