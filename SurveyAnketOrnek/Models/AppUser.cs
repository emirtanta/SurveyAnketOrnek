using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models
{
    public class AppUser : IdentityUser<int>
    {
        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(50)]
        public string Surname { get; set; }
    }
}
