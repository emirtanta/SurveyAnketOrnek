using Microsoft.EntityFrameworkCore;
using SurveyAnketOrnek.Models;

namespace SurveyAnketOrnek.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<SurveyResponse> SurveyResponses { get; set; }
        public DbSet<SurveyQuestion> SurveyQuestions { get; set; }
    }
}
