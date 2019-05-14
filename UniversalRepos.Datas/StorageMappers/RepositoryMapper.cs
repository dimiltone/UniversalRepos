using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.StorageMappers
{
    public class RepositoryStorageEntityMapper : IEntityTypeConfiguration<RepositoryStorageEntity>
    {
        public void Configure(EntityTypeBuilder<RepositoryStorageEntity> builder)
        {
            builder.ToTable("TBL_REPOSITORIES");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("rep_id").ValueGeneratedOnAdd();
            builder.Property(x => x.RepositoryTypeId).HasColumnName("rep_rty_id").IsRequired();
            builder.Property(x => x.Name).HasColumnName("rep_name").IsRequired().HasMaxLength(255);
            builder.Property(x => x.Description).HasColumnName("rep_description").IsRequired().HasMaxLength(512);
            builder.Property(x => x.IsPublic).HasColumnName("rep_public").IsRequired().HasDefaultValue(true);
            builder.Property(x => x.Description).HasColumnName("rep_description").IsRequired().HasMaxLength(512);
            builder.Property(x => x.Url).HasColumnName("rep_url").IsRequired().HasMaxLength(512);

            builder.HasOne(x => x.RepositoryType)
                .WithMany(x => x.Repositories)
                .HasForeignKey(x => x.RepositoryTypeId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
