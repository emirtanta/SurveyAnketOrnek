using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models
{
    public class AppUser : IdentityUser<int>
    {
        [Display(Name ="Ad")]
        [StringLength(50)]
        public string Name { get; set; }

        [Display(Name = "Soyad")]
        [StringLength(50)]
        public string Surname { get; set; }
    }
}
