using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.StorageMappers
{
    public class NugetPackageStorageEntityMapper : IEntityTypeConfiguration<NugetPackageStorageEntity>
    {
        public void Configure(EntityTypeBuilder<NugetPackageStorageEntity> builder)
        {
            builder.ToTable("TBL_PACKAGE_NUGET");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("pnu_id");
            builder.Property(x => x.PackageId).HasColumnName("pnu_id_pac_id").IsRequired();
            builder.Property(x => x.Version).HasColumnName("pnu_version").IsRequired();
            builder.Property(x => x.Authors).HasColumnName("pnu_authors").IsRequired();
            builder.Property(x => x.Description).HasColumnName("pnu_description").IsRequired();
            builder.Property(x => x.Title).HasColumnName("pnu_title").IsRequired();
            builder.Property(x => x.Copyright).HasColumnName("pnu_copyright").IsRequired(false);
            builder.Property(x => x.Dependencies).HasColumnName("pnu_depencies").IsRequired(false);
            builder.Property(x => x.DevelopmentDependency).HasColumnName("pnu_dev_depencies").IsRequired().HasDefaultValue(false);
            builder.Property(x => x.DownloadCount).HasColumnName("pnu_download_count").IsRequired().HasDefaultValue(0);
            builder.Property(x => x.IconUrl).HasColumnName("pnu_icon_url").IsRequired(false);
            builder.Property(x => x.IsAbsoluteLatestVersion).HasColumnName("pnu_absolute_latest").IsRequired().HasDefaultValue(false);
            builder.Property(x => x.IsLatestVersion).HasColumnName("pnu_latest").IsRequired().HasDefaultValue(false);
            builder.Property(x => x.IsPrerelease).HasColumnName("pnu_pre_release").IsRequired().HasDefaultValue(false);
            builder.Property(x => x.Language).HasColumnName("pnu_language").IsRequired(false);
            builder.Property(x => x.LastUpdated).HasColumnName("pnu_updated").IsRequired().HasDefaultValue(DateTime.MinValue);
            builder.Property(x => x.LicenseUrl).HasColumnName("pnu_license_url").IsRequired(false);
            builder.Property(x => x.Listed).HasColumnName("pnu_listed").IsRequired().HasDefaultValue(false);
            builder.Property(x => x.MinClientVersion).HasColumnName("pnu_min_client_version").IsRequired(false);
            builder.Property(x => x.NormalizedVersion).HasColumnName("pnu_normalized_version").IsRequired(false);
            builder.Property(x => x.Owners).HasColumnName("pnu_owners").IsRequired(false);
            builder.Property(x => x.PackageHash).HasColumnName("pnu_hash").IsRequired(false);
            builder.Property(x => x.PackageHashAlgorithm).HasColumnName("pnu_hash_alogorithm").IsRequired(false);
            builder.Property(x => x.PackageSize).HasColumnName("pnu_size").IsRequired().HasDefaultValue(0);
            builder.Property(x => x.ProjectUrl).HasColumnName("pnu_project_url").IsRequired(false);
            builder.Property(x => x.Published).HasColumnName("pnu_publication").IsRequired().HasDefaultValue(DateTime.MinValue);
            builder.Property(x => x.ReleaseNotes).HasColumnName("pnu_release_notes").IsRequired(false);
            builder.Property(x => x.RequireLicenseAcceptance).HasColumnName("pnu_require_licence_acceptance").IsRequired().HasDefaultValue(true);
            builder.Property(x => x.Summary).HasColumnName("pnu_summary").IsRequired(false);
            builder.Property(x => x.Tags).HasColumnName("pnu_tags").IsRequired(false);
            builder.Property(x => x.ContentUrl).HasColumnName("pnu_content_url").IsRequired(false);
            builder.Property(x => x.ContentType).HasColumnName("pnu_content_type").IsRequired(false);
            builder.Property(x => x.VersionDownloadCount).HasColumnName("pnu_downloaded_version").IsRequired().HasDefaultValue(0);

            builder.HasOne(x => x.Package)
                .WithMany()
                .HasForeignKey(x => x.PackageId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
