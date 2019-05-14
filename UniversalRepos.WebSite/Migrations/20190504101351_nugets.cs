using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace UniversalRepos.WebSite.Migrations
{
    public partial class nugets : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TBL_PACKAGES_URL");

            migrationBuilder.CreateTable(
                name: "TBL_PACKAGE_NUGET",
                columns: table => new
                {
                    pnu_id = table.Column<string>(nullable: false),
                    pnu_id_pac_id = table.Column<int>(nullable: false),
                    pnu_version = table.Column<string>(nullable: false),
                    pnu_normalized_version = table.Column<string>(nullable: true),
                    pnu_pre_release = table.Column<bool>(nullable: false, defaultValue: false),
                    pnu_title = table.Column<string>(nullable: false),
                    pnu_authors = table.Column<string>(nullable: false),
                    pnu_owners = table.Column<string>(nullable: true),
                    pnu_icon_url = table.Column<string>(nullable: true),
                    pnu_license_url = table.Column<string>(nullable: true),
                    pnu_project_url = table.Column<string>(nullable: true),
                    pnu_download_count = table.Column<int>(nullable: false, defaultValue: 0),
                    pnu_require_licence_acceptance = table.Column<bool>(nullable: false, defaultValue: true),
                    pnu_dev_depencies = table.Column<bool>(nullable: false, defaultValue: false),
                    pnu_description = table.Column<string>(nullable: false),
                    pnu_summary = table.Column<string>(nullable: true),
                    pnu_release_notes = table.Column<string>(nullable: true),
                    pnu_publication = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified)),
                    pnu_updated = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified)),
                    pnu_depencies = table.Column<string>(nullable: true),
                    pnu_hash = table.Column<string>(nullable: true),
                    pnu_hash_alogorithm = table.Column<string>(nullable: true),
                    pnu_size = table.Column<long>(nullable: false, defaultValue: 0L),
                    pnu_copyright = table.Column<string>(nullable: true),
                    pnu_tags = table.Column<string>(nullable: true),
                    pnu_absolute_latest = table.Column<bool>(nullable: false, defaultValue: false),
                    pnu_latest = table.Column<bool>(nullable: false, defaultValue: false),
                    pnu_listed = table.Column<bool>(nullable: false, defaultValue: false),
                    pnu_downloaded_version = table.Column<int>(nullable: false, defaultValue: 0),
                    pnu_min_client_version = table.Column<string>(nullable: true),
                    pnu_language = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TBL_PACKAGE_NUGET", x => x.pnu_id);
                    table.ForeignKey(
                        name: "FK_TBL_PACKAGE_NUGET_TBL_PACKAGES_pnu_id_pac_id",
                        column: x => x.pnu_id_pac_id,
                        principalTable: "TBL_PACKAGES",
                        principalColumn: "pac_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TBL_PACKAGE_NUGET_pnu_id_pac_id",
                table: "TBL_PACKAGE_NUGET",
                column: "pnu_id_pac_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TBL_PACKAGE_NUGET");

            migrationBuilder.CreateTable(
                name: "TBL_PACKAGES_URL",
                columns: table => new
                {
                    pur_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ppur_pac_id = table.Column<int>(nullable: false),
                    pur_url = table.Column<string>(maxLength: 2147483647, nullable: false)
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

            migrationBuilder.CreateIndex(
                name: "IX_TBL_PACKAGES_URL_ppur_pac_id",
                table: "TBL_PACKAGES_URL",
                column: "ppur_pac_id");
        }
    }
}
