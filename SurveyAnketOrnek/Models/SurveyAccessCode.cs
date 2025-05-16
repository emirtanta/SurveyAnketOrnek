using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models
{
    /*
     * E-posta ya da tekil kod üreterek anketteki katılımı tekil hale getirmek için tanımlandı
     */
    public class SurveyAccessCode
    {
        [Key]
        public int Id { get; set; }

        public string Code { get; set; }  // Benzersiz tekil kod

        [StringLength(50)]
        public string? Email { get; set; }  // Eğer e-posta üzerinden gidilecekse

        public bool IsUsed { get; set; } = false;  // Anket doldurulmuş mu?
        public DateTime? UsedAt { get; set; }
    }
}
