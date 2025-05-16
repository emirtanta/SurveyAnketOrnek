using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Models.Enums
{
    public enum SurveyType
    {
        [Display(Name ="Müşteri Memnuniyet Anketi")]
        MusteriMemnuniyetAnketi,
        
        [Display(Name ="Çalışan Geri Bildirim Anketi")]
        CalisanGeriBildirimAnketi,
        
        [Display(Name ="Etkinlik Geri Bildirim Anketi")]
        EtkinlikGeriBildirimAnketi,

    }
}
