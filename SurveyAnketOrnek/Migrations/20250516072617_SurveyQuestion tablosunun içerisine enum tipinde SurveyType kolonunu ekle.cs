using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SurveyAnketOrnek.Migrations
{
    /// <inheritdoc />
    public partial class SurveyQuestiontablosununiçerisineenumtipindeSurveyTypekolonunuekle : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SurveyType",
                table: "SurveyQuestions",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SurveyType",
                table: "SurveyQuestions");
        }
    }
}
