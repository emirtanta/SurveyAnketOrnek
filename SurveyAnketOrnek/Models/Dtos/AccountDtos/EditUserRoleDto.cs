using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models.Dtos.AccountDtos
{
    public class EditUserRoleDto
    {
        public int UserId { get; set; }

        [Display(Name = "Kullanıcı Adı")]
        public string UserName { get; set; }

        [Display(Name = "Önceki Rol")]
        public string CurrentRole { get; set; }

        [Display(Name = "Yeni Rol")]
        public string NewRole { get; set; }

        public List<string> Roles { get; set; }
    }
}
