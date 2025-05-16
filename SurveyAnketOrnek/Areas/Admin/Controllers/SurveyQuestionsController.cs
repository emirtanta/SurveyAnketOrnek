using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SurveyAnketOrnek.Data;
using SurveyAnketOrnek.Helper;
using SurveyAnketOrnek.Models;
using SurveyAnketOrnek.Models.Enums;
using System.ComponentModel.DataAnnotations;

namespace SurveyAnketOrnek.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class SurveyQuestionsController : Controller
    {
        private readonly AppDbContext _context;

        public SurveyQuestionsController(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> QuestionList()
        {
            var result = await _context.SurveyQuestions.ToListAsync();

            return View(result);
        }

        [HttpGet]
        public IActionResult QuestionCreate()
        {


            ViewBag.SurveyTypeList = EnumHelper.GetSelectList<SurveyType>();

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> QuestionCreate(SurveyQuestion question)
        {
            if (ModelState.IsValid)
            {
                _context.SurveyQuestions.Add(question);

                await _context.SaveChangesAsync();

                return RedirectToAction(nameof(QuestionList));
            }


            ViewBag.SurveyTypeList = EnumHelper.GetSelectList<SurveyType>();

            return View(question);
        }

        [HttpGet]
        public async Task<IActionResult> QuestionEdit(int? id)
        {
            if (id == null)
            {
                return NotFound("Soru bulunamadı!");
            }

            var question = await _context.SurveyQuestions.FindAsync(id);

            if (question == null)
            {
                return NotFound("Soru bulunamadı!");
            }

            //ViewBag.PersonType = new SelectList(Enum.GetValues<SurveyType>());

            ViewBag.SurveyTypeList = EnumHelper.GetSelectList<SurveyType>();

            return View(question);
        }

        [HttpPost]
        public async Task<IActionResult> QuestionEdit(int id,SurveyQuestion question)
        {
            if(id !=question.Id)
            {
                return NotFound("Veri bulunamadı!");
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.SurveyQuestions.Update(question);

                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!SurveyQuestionExists(question.Id))
                    {
                        return NotFound();
                    }
                     
                    
                    else
                    {
                        throw;
                    }
                    
                }

                return RedirectToAction(nameof(QuestionList));
            }

            //ViewBag.PersonType = new SelectList(Enum.GetValues<SurveyType>());

            ViewBag.SurveyTypeList = EnumHelper.GetSelectList<SurveyType>();

            return View(question);
        }

        // GET: SurveyQuestions/Delete/5
        public async Task<IActionResult> QuestionDelete(int? id)
        {
            if (id == null) return NotFound();

            var question = await _context.SurveyQuestions
                .FirstOrDefaultAsync(m => m.Id == id);

            if (question == null)
            {
                return NotFound("Soru bulunamadı tekrar deneyiniz!");
            }
                

            return View(question);
        }

        // POST: SurveyQuestions/Delete/5
        [HttpPost, ActionName("QuestionDelete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var question = await _context.SurveyQuestions.FindAsync(id);
            _context.SurveyQuestions.Remove(question);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool SurveyQuestionExists(int id)
        {
            return _context.SurveyQuestions.Any(e => e.Id == id);
        }

        
    }
}
