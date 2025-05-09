using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models
{
    public class SurveyResponse
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(100)]
        public string Isim { get; set; }

        [MaxLength(50)]
        public string Memnuniyet { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
