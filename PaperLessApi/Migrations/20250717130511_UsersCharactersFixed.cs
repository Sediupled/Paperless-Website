using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PaperLessApi.Migrations
{
    /// <inheritdoc />
    public partial class UsersCharactersFixed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "playerName",
                table: "Characters",
                newName: "campaign");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "campaign",
                table: "Characters",
                newName: "playerName");
        }
    }
}
