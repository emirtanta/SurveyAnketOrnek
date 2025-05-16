using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models
{
    public class SurveyQuestion
    {
        public int Id { get; set; }

        [Display(Name ="Soru Konusu")]
        public string Name { get; set; }  // Örn: "isim"

        [Required(ErrorMessage ="Soru adı girilmesi zorunludur!")]
        [Display(Name ="Soru")]
        public string Title { get; set; } // Örn: "Adınız nedir?"

        [Required(ErrorMessage ="Soru tipi alanı seçimi zorunludur!")]
        [Display(Name = "Soru Tipi")]
        public string Type { get; set; }  // Örn: "text", "radiogroup"

        [Display(Name = "Seçenekler")]
        public string? ChoicesJson { get; set; } // JSON array: ["Evet", "Hayır"] (sadece radiogroup/checkbox için)

        public ICollection<SurveyAnswer> Answers { get; set; } = new List<SurveyAnswer>();
    }

}
