using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.Configuration;
using UniversalRepos.Datas.StorageEntities;
using UniversalRepos.Datas.StorageMappers;

namespace UniversalRepos.Datas
{
    public class AllReposContext : DbContext
    {
        private readonly IConfiguration _configuration;

        protected AllReposContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DbSet<RepositoryTypeStorageEntity> RepositoryTypeStorageEntities { get; set; }
        public DbSet<RepositoryTypeStorageEntity> RepositoryStorageEntities { get; set; }
        public DbSet<PackageStorageEntity> PackageStorageEntities { get; set; }
        public DbSet<NugetPackageStorageEntity> PackagesNuget { get; set; }

        public AllReposContext(DbContextOptions<AllReposContext> options)
            : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var connectionString = _configuration.GetConnectionString("AllReposConnectionString");
                optionsBuilder
                    .UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Seeder(modelBuilder);
            modelBuilder.ApplyConfiguration(new RepositoryTypeStorageEntityMapper());
            modelBuilder.ApplyConfiguration(new RepositoryStorageEntityMapper());
            modelBuilder.ApplyConfiguration(new PackageStorageEntityMapper());
            modelBuilder.ApplyConfiguration(new NugetPackageStorageEntityMapper());
        }

        private void Seeder(ModelBuilder builder)
        {
            SeedRepositoryTypes(builder);
        }

        private void SeedRepositoryTypes(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RepositoryTypeStorageEntity>().HasData(new RepositoryTypeStorageEntity
            {
                Id = 1, Name = "Nuget", Description = "Repository des packages Nugets"
            });
            modelBuilder.Entity<RepositoryTypeStorageEntity>().HasData(new RepositoryTypeStorageEntity
            {
                Id = 2, Name = "Docker Registry", Description = "Repository de container Docker"
            });
        }
    }
}