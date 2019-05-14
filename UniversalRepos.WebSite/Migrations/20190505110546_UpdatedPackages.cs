using Microsoft.EntityFrameworkCore.Migrations;

namespace UniversalRepos.WebSite.Migrations
{
    public partial class UpdatedPackages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TBL_REPOSITORIES_TBL_REPO_TYPE_rep_rty_id",
                table: "TBL_REPOSITORIES");

            migrationBuilder.AddColumn<string>(
                name: "pac_download_url",
                table: "TBL_PACKAGES",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "pac_infos_url",
                table: "TBL_PACKAGES",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_TBL_REPOSITORIES_TBL_REPO_TYPE_rep_rty_id",
                table: "TBL_REPOSITORIES",
                column: "rep_rty_id",
                principalTable: "TBL_REPO_TYPE",
                principalColumn: "rty_id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TBL_REPOSITORIES_TBL_REPO_TYPE_rep_rty_id",
                table: "TBL_REPOSITORIES");

            migrationBuilder.DropColumn(
                name: "pac_download_url",
                table: "TBL_PACKAGES");

            migrationBuilder.DropColumn(
                name: "pac_infos_url",
                table: "TBL_PACKAGES");

            migrationBuilder.AddForeignKey(
                name: "FK_TBL_REPOSITORIES_TBL_REPO_TYPE_rep_rty_id",
                table: "TBL_REPOSITORIES",
                column: "rep_rty_id",
                principalTable: "TBL_REPO_TYPE",
                principalColumn: "rty_id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
