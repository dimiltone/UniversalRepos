using Microsoft.EntityFrameworkCore.Migrations;

namespace UniversalRepos.WebSite.Migrations
{
    public partial class nugetContent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "pnu_content_type",
                table: "TBL_PACKAGE_NUGET",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "pnu_content_url",
                table: "TBL_PACKAGE_NUGET",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "pnu_content_type",
                table: "TBL_PACKAGE_NUGET");

            migrationBuilder.DropColumn(
                name: "pnu_content_url",
                table: "TBL_PACKAGE_NUGET");
        }
    }
}
