﻿using Microsoft.AspNetCore.Mvc;

namespace SurveyAnketOrnek.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class MainController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
