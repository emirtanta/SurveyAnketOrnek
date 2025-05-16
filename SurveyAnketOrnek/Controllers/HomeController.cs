using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using SurveyAnketOrnek.Data;
using SurveyAnketOrnek.Models;
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


        [HttpGet]
        public IActionResult GetSurveyQuestions()
        {
            var questions = _context.SurveyQuestions.ToList();

            var elements = questions.Select(q => new Dictionary<string, object>
            {
                { "type", q.Type },
                { "name", q.Name },
                { "title", q.Title },
                { "choices", (q.Type == "radiogroup" || q.Type == "checkbox")
                    ? JsonConvert.DeserializeObject<List<string>>(q.ChoicesJson ?? "[]")
                    : null }
            }).ToList();

                var surveyJson = new
                {
                    title = "Geri Bildirim Anketi",
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
