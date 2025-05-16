using Microsoft.AspNetCore.Identity;
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
        public DbSet<SurveyAnswer> SurveyAnswers { get; set; }

        //tekil kullanım için geçerlidir. Migration olmamıştır.
        //Olması için sonradan yorum satırından kaldırılmalıdır
        //public DbSet<SurveyAccessCode> SurveyAccessCodes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // SurveyAnswer ilişkileri
            modelBuilder.Entity<SurveyAnswer>()
                .HasOne(sa => sa.SurveyResponse)
                .WithMany(sr => sr.Answers)
                .HasForeignKey(sa => sa.SurveyResponseId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<SurveyAnswer>()
                .HasOne(sa => sa.SurveyQuestion)
                .WithMany(sq => sq.Answers)
                .HasForeignKey(sa => sa.SurveyQuestionId)
                .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(modelBuilder);
        }
    }
}
