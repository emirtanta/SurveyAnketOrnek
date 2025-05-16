using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models
{
    public class SurveyAnswer
    {
        [Key]
        public int Id { get; set; }

        public int SurveyResponseId { get; set; }
        public SurveyResponse SurveyResponse { get; set; }

        public int SurveyQuestionId { get; set; }
        public SurveyQuestion SurveyQuestion { get; set; }

        [StringLength(2000)]
        public string Answer { get; set; }  // Kullanıcının bu soruya verdiği cevap

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
