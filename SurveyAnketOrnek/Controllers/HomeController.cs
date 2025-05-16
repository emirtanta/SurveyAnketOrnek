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

        //["sads","sadsad"] veritaban�na kay�t ederken bu formatta soru cevab�n�n olu�turulmas�n� sa�lar.Checkbox ve raidobutonlarda ge�erli
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


        //cevaplar�n cevap1,cevap2 �eklinde girilerek veritaban�na aktar�r. Checkbox ve raidobutonlarda ge�erli
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
        //                // JSON de�ilse, virg�lle ayr�lm�� d�z metni parse et
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
        //                choices = new List<string>(); // Hata durumunda bo� ge�
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


        //Anket t�r� ile ilgili enum de�erini ekler ve anket ba�l���n� dinamik hale getirir
        [HttpGet]
        public IActionResult GetSurveyQuestions(SurveyType? type)
        {
            // E�er type parametresi verilmediyse, t�m sorular al�n�r
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



        //statik surveyjs i�erisindeki nesnesindeki verileri al�r ve veritaban�na kaydeder. 

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


        #region tekil kod olu�turma ve ankete sadece 1 defal�k kat�labilme durumu i�indir.�lerde tekrardan kullan�lmak �zere youm sat�r�ndan a��labilir.
        

        //public IActionResult Start(string code)
        //{
        //    var access = _db.SurveyAccesses.FirstOrDefault(x => x.AccessCode == code);

        //    if (access == null)
        //        return NotFound("Ge�ersiz kod");

        //    if (access.HasParticipated)
        //        return View("AlreadySubmitted");

        //    return View("Survey", access);
        //}


        #endregion

    }
}
