using Microsoft.EntityFrameworkCore.Migrations;

namespace UniversalRepos.WebSite.Migrations
{
    public partial class CascadeDeletePackages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TBL_PACKAGES_TBL_REPOSITORIES_pac_rep_id",
                table: "TBL_PACKAGES");

            migrationBuilder.AddForeignKey(
                name: "FK_TBL_PACKAGES_TBL_REPOSITORIES_pac_rep_id",
                table: "TBL_PACKAGES",
                column: "pac_rep_id",
                principalTable: "TBL_REPOSITORIES",
                principalColumn: "rep_id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TBL_PACKAGES_TBL_REPOSITORIES_pac_rep_id",
                table: "TBL_PACKAGES");

            migrationBuilder.AddForeignKey(
                name: "FK_TBL_PACKAGES_TBL_REPOSITORIES_pac_rep_id",
                table: "TBL_PACKAGES",
                column: "pac_rep_id",
                principalTable: "TBL_REPOSITORIES",
                principalColumn: "rep_id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
