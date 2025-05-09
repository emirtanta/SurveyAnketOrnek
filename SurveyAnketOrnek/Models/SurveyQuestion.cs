namespace SurveyAnketOrnek.Models
{
    public class SurveyQuestion
    {
        public int Id { get; set; }
        public string Name { get; set; }  // Örn: "isim"
        public string Title { get; set; } // Örn: "Adınız nedir?"
        public string Type { get; set; }  // Örn: "text", "radiogroup"
        public string? ChoicesJson { get; set; } // JSON array: ["Evet", "Hayır"] (sadece radiogroup/checkbox için)
    }

}
