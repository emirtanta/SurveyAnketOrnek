using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models
{
    public class SurveyResponse
    {
        [Key]
        public int Id { get; set; }

        [Display(Name = "İsim")]
        [MaxLength(100)]
        public string Isim { get; set; }

        [Display(Name = "Memnuniyet")]
        [MaxLength(50)]
        public string Memnuniyet { get; set; }

        [Display(Name ="Oluşturulma Tarihi")]
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        // Navigation
        public ICollection<SurveyAnswer> Answers { get; set; }
    }
}
