using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using SurveyAnketOrnek.Data;
using SurveyAnketOrnek.Models;
using SurveyAnketOrnek.Models.Enums;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Text.Json;

namespace SurveyAnketOrnek.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;

        public HomeController(AppDbContext context)
        {
            _context = context;
        }




        public IActionResult Index()
        {
            return View();
        }

        //["sads","sadsad"] veritabanýna kayýt ederken bu formatta soru cevabýnýn oluþturulmasýný saðlar.Checkbox ve raidobutonlarda geçerli
        //[HttpGet]
        //public IActionResult GetSurveyQuestions()
        //{
        //    var questions = _context.SurveyQuestions.ToList();

        //    var elements = questions.Select(q => new Dictionary<string, object>
        //    {
        //        { "type", q.Type },
        //        { "name", q.Name },
        //        { "title", q.Title },
        //        { "choices", (q.Type == "radiogroup" || q.Type == "checkbox")
        //            ? JsonConvert.DeserializeObject<List<string>>(q.ChoicesJson ?? "[]")
        //            : null }
        //    }).ToList();

        //        var surveyJson = new
        //        {
        //            title = "Geri Bildirim Anketi",
        //            pages = new[]
        //            {
        //        new { elements = elements }
        //        }
        //    };

        //    return Json(surveyJson);
        //}


        //cevaplarýn cevap1,cevap2 þeklinde girilerek veritabanýna aktarýr. Checkbox ve raidobutonlarda geçerli
        //[HttpGet]
        //public IActionResult GetSurveyQuestions()
        //{
        //    var questions = _context.SurveyQuestions.ToList();

        //    var elements = questions.Select(q =>
        //    {
        //        List<string>? choices = null;

        //        if ((q.Type == "radiogroup" || q.Type == "checkbox") && !string.IsNullOrEmpty(q.ChoicesJson))
        //        {
        //            try
        //            {
        //                // JSON deðilse, virgülle ayrýlmýþ düz metni parse et
        //                if (!q.ChoicesJson.TrimStart().StartsWith("["))
        //                {
        //                    choices = q.ChoicesJson
        //                        .Split(',', StringSplitOptions.RemoveEmptyEntries)
        //                        .Select(c => c.Trim())
        //                        .ToList();
        //                }
        //                else
        //                {
        //                    choices = JsonConvert.DeserializeObject<List<string>>(q.ChoicesJson);
        //                }
        //            }
        //            catch
        //            {
        //                choices = new List<string>(); // Hata durumunda boþ geç
        //            }
        //        }

        //        return new Dictionary<string, object>
        //{
        //    { "type", q.Type },
        //    { "name", q.Name },
        //    { "title", q.Title },
        //    { "choices", choices }
        //};
        //    }).ToList();

        //    var surveyJson = new
        //    {
        //        title = "Geri Bildirim Anketi",
        //        pages = new[]
        //        {
        //    new { elements = elements }
        //}
        //    };

        //    return Json(surveyJson);
        //}


        //Anket türü ile ilgili enum deðerini ekler ve anket baþlýðýný dinamik hale getirir
        [HttpGet]
        public IActionResult GetSurveyQuestions(SurveyType? type)
        {
            // Eðer type parametresi verilmediyse, tüm sorular alýnýr
            var questions = type.HasValue
                ? _context.SurveyQuestions.Where(q => q.SurveyType == type.Value).ToList()
                : _context.SurveyQuestions.ToList();

            var elements = questions.Select(q =>
            {
                List<string>? choices = null;

                if ((q.Type == "radiogroup" || q.Type == "checkbox") && !string.IsNullOrEmpty(q.ChoicesJson))
                {
                    try
                    {
                        if (!q.ChoicesJson.TrimStart().StartsWith("["))
                        {
                            choices = q.ChoicesJson
                                .Split(',', StringSplitOptions.RemoveEmptyEntries)
                                .Select(c => c.Trim())
                                .ToList();
                        }
                        else
                        {
                            choices = JsonConvert.DeserializeObject<List<string>>(q.ChoicesJson);
                        }
                    }
                    catch
                    {
                        choices = new List<string>();
                    }
                }

                return new Dictionary<string, object>
                    {
                        { "type", q.Type },
                        { "name", q.Name },
                        { "title", q.Title },
                        { "choices", choices }
                    };
                }).ToList();

            // Enum'un DisplayName'ini al
            string title = type.HasValue
                ? type.Value.GetType()
                    .GetMember(type.Value.ToString())[0]
                    .GetCustomAttributes(typeof(DisplayAttribute), false)
                    .Cast<DisplayAttribute>()
                    .FirstOrDefault()?.Name ?? type.Value.ToString()
                : "Genel Anket";

            var surveyJson = new
            {
                title = title,
                pages = new[]
                {
            new { elements = elements }
        }
            };

            return Json(surveyJson);
        }



        //statik surveyjs içerisindeki nesnesindeki verileri alýr ve veritabanýna kaydeder. 

        [HttpPost]
        public async Task<IActionResult> SubmitSurvey([FromBody] Dictionary<string, string> data)
        {
            var response = new SurveyResponse
            {
                Isim = data.ContainsKey("isim") ? data["isim"] : null,
                Memnuniyet = data.ContainsKey("memnuniyet") ? data["memnuniyet"] : null
            };

            _context.SurveyResponses.Add(response);
            await _context.SaveChangesAsync();

            return Ok(new { success = true });
        }


        public IActionResult Privacy()
        {
            return View();
        }


        #region tekil kod oluþturma ve ankete sadece 1 defalýk katýlabilme durumu içindir.Ýlerde tekrardan kullanýlmak üzere youm satýrýndan açýlabilir.
        

        //public IActionResult Start(string code)
        //{
        //    var access = _db.SurveyAccesses.FirstOrDefault(x => x.AccessCode == code);

        //    if (access == null)
        //        return NotFound("Geçersiz kod");

        //    if (access.HasParticipated)
        //        return View("AlreadySubmitted");

        //    return View("Survey", access);
        //}


        #endregion

    }
}
