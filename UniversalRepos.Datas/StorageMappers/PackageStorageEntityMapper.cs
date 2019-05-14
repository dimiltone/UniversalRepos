using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.StorageMappers
{
    public class PackageStorageEntityMapper : IEntityTypeConfiguration<PackageStorageEntity>
    {
        public void Configure(EntityTypeBuilder<PackageStorageEntity> builder)
        {
            builder.ToTable("TBL_PACKAGES");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("pac_id").ValueGeneratedOnAdd();
            builder.Property(x => x.RepositoryId).HasColumnName("pac_rep_id").IsRequired();
            builder.Property(x => x.Name).HasColumnName("pac_name").IsRequired().HasMaxLength(255);
            builder.Property(x => x.Description).HasColumnName("pac_description").IsRequired().HasMaxLength(512);
            builder.Property(x => x.Author).HasColumnName("pac_author").IsRequired().HasMaxLength(512);
            builder.Property(x => x.Version).HasColumnName("pac_version").IsRequired(false).HasMaxLength(50);
            builder.Property(x => x.License).HasColumnName("pac_license").IsRequired(false).HasMaxLength(1024);
            builder.Property(x => x.DownloadUrl).HasColumnName("pac_download_url").IsRequired(false);
            builder.Property(x => x.InfoUrl).HasColumnName("pac_infos_url").IsRequired(false);
            builder.Property(x => x.License).HasColumnName("pac_license").IsRequired(false).HasMaxLength(1024);
            builder.Property(x => x.PublicationDate).HasColumnName("pac_publication_date").IsRequired(false);

            builder.HasOne(x => x.Repository)
                .WithMany(x => x.Packages)
                .HasForeignKey(x => x.RepositoryId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
