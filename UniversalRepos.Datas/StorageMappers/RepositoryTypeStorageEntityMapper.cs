using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.StorageMappers
{
    public class RepositoryTypeStorageEntityMapper : IEntityTypeConfiguration<RepositoryTypeStorageEntity>
    {
        public void Configure(EntityTypeBuilder<RepositoryTypeStorageEntity> builder)
        {
            builder.ToTable("TBL_REPO_TYPE");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("rty_id").ValueGeneratedOnAdd();
            builder.Property(x => x.Name).HasColumnName("rty_name").IsRequired().HasMaxLength(255);
            builder.Property(x => x.Description).HasColumnName("rty_description").IsRequired().HasMaxLength(512);
        }
    }
}