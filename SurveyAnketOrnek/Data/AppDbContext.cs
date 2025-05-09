using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SurveyAnketOrnek.Models;

namespace SurveyAnketOrnek.Data
{
    public class AppDbContext : IdentityDbContext<AppUser, AppRole, int> //DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<SurveyResponse> SurveyResponses { get; set; }
        public DbSet<SurveyQuestion> SurveyQuestions { get; set; }
    }
}
