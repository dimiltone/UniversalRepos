using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace UniversalRepos.WebSite.Migrations
{
    public partial class packages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TBL_REPOSITORIES",
                columns: table => new
                {
                    rep_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    rep_name = table.Column<string>(maxLength: 255, nullable: false),
                    rep_description = table.Column<string>(maxLength: 512, nullable: false),
                    rep_rty_id = table.Column<int>(nullable: false),
                    rep_url = table.Column<string>(maxLength: 512, nullable: false),
                    rep_public = table.Column<bool>(nullable: false, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TBL_REPOSITORIES", x => x.rep_id);
                    table.ForeignKey(
                        name: "FK_TBL_REPOSITORIES_TBL_REPO_TYPE_rep_rty_id",
                        column: x => x.rep_rty_id,
                        principalTable: "TBL_REPO_TYPE",
                        principalColumn: "rty_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "TBL_PACKAGES",
                columns: table => new
                {
                    pac_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    pac_name = table.Column<string>(maxLength: 255, nullable: false),
                    pac_description = table.Column<string>(maxLength: 512, nullable: false),
                    pac_author = table.Column<string>(maxLength: 512, nullable: false),
                    pac_version = table.Column<string>(maxLength: 50, nullable: true),
                    pac_license = table.Column<string>(maxLength: 1024, nullable: true),
                    pac_publication_date = table.Column<DateTime>(nullable: true),
                    pac_rep_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TBL_PACKAGES", x => x.pac_id);
                    table.ForeignKey(
                        name: "FK_TBL_PACKAGES_TBL_REPOSITORIES_pac_rep_id",
                        column: x => x.pac_rep_id,
                        principalTable: "TBL_REPOSITORIES",
                        principalColumn: "rep_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "TBL_PACKAGES_URL",
                columns: table => new
                {
                    pur_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    pur_url = table.Column<string>(maxLength: 2147483647, nullable: false),
                    ppur_pac_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TBL_PACKAGES_URL", x => x.pur_id);
                    table.ForeignKey(
                        name: "FK_TBL_PACKAGES_URL_TBL_PACKAGES_ppur_pac_id",
                        column: x => x.ppur_pac_id,
                        principalTable: "TBL_PACKAGES",
                        principalColumn: "pac_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "TBL_REPO_TYPE",
                columns: new[] { "rty_id", "rty_description", "rty_name" },
                values: new object[] { 1, "Repository des packages Nugets", "Nuget" });

            migrationBuilder.InsertData(
                table: "TBL_REPO_TYPE",
                columns: new[] { "rty_id", "rty_description", "rty_name" },
                values: new object[] { 2, "Repository de container Docker", "Docker Registry" });

            migrationBuilder.CreateIndex(
                name: "IX_TBL_PACKAGES_pac_rep_id",
                table: "TBL_PACKAGES",
                column: "pac_rep_id");

            migrationBuilder.CreateIndex(
                name: "IX_TBL_PACKAGES_URL_ppur_pac_id",
                table: "TBL_PACKAGES_URL",
                column: "ppur_pac_id");

            migrationBuilder.CreateIndex(
                name: "IX_TBL_REPOSITORIES_rep_rty_id",
                table: "TBL_REPOSITORIES",
                column: "rep_rty_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TBL_PACKAGES_URL");

            migrationBuilder.DropTable(
                name: "TBL_PACKAGES");

            migrationBuilder.DropTable(
                name: "TBL_REPOSITORIES");

            migrationBuilder.DeleteData(
                table: "TBL_REPO_TYPE",
                keyColumn: "rty_id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "TBL_REPO_TYPE",
                keyColumn: "rty_id",
                keyValue: 2);
        }
    }
}
