using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SurveyAnketOrnek.Migrations
{
    /// <inheritdoc />
    public partial class AddTablesToAnketDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SurveyAnswers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SurveyResponseId = table.Column<int>(type: "int", nullable: false),
                    SurveyQuestionId = table.Column<int>(type: "int", nullable: false),
                    Answer = table.Column<string>(type: "nvarchar(2000)", maxLength: 2000, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SurveyAnswers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SurveyAnswers_SurveyQuestions_SurveyQuestionId",
                        column: x => x.SurveyQuestionId,
                        principalTable: "SurveyQuestions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SurveyAnswers_SurveyResponses_SurveyResponseId",
                        column: x => x.SurveyResponseId,
                        principalTable: "SurveyResponses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SurveyAnswers_SurveyQuestionId",
                table: "SurveyAnswers",
                column: "SurveyQuestionId");

            migrationBuilder.CreateIndex(
                name: "IX_SurveyAnswers_SurveyResponseId",
                table: "SurveyAnswers",
                column: "SurveyResponseId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SurveyAnswers");
        }
    }
}
