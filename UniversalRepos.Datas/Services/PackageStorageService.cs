using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.Services
{
    public class PackageStorageService : IPackageStorageService
    {
        private readonly AllReposContext _context;

        private readonly DbSet<PackageStorageEntity> _dbSet;

        public PackageStorageService(AllReposContext context)
        {
            _context = context;
            _dbSet = _context.Set<PackageStorageEntity>();
        }

        private async Task<PackageStorageEntity> TryFindPackage(string name, int repositoryId)
        {
            var result = await _dbSet.FirstOrDefaultAsync(x => x.Name == name && x.RepositoryId == repositoryId);

            if( result != null )
                return result;

            return null;
        }

        public async Task Update(PackageStorageEntity package)
        {
            _dbSet.Update(package);
            await _context.SaveChangesAsync();
        }

        private async Task Synchronise(PackageStorageEntity original, PackageStorageEntity updated)
        {
            original.Author = updated.Author;
            original.Description = updated.Description;
            original.DownloadUrl = updated.DownloadUrl;
            original.InfoUrl = updated.InfoUrl;
            original.License = updated.License;
            original.PublicationDate = updated.PublicationDate;
            original.Version = updated.Version;

            await Update(original);
        }

        public async Task<int> AddOrUpdate(PackageStorageEntity package)
        {
            PackageStorageEntity existingEntity = await TryFindPackage(package.Name, package.RepositoryId);

            if( existingEntity != null && existingEntity.Id > 0 )
            {
                await Synchronise(existingEntity, package);
                return existingEntity.Id;
            }

            await _dbSet.AddAsync(package);
            await _context.SaveChangesAsync();

            return package.Id;
        }

        public async Task<IEnumerable<PackageStorageEntity>> GetByRepositoryId(int repositoryId)
        {
            return await _dbSet.Include(x => x.Repository)
                .ThenInclude(x => x.RepositoryType)
                .Where(x => x.RepositoryId == repositoryId)
                .ToListAsync();
        }
        public async Task<PackageStorageEntity> FindById(int id)
        {
            return await _dbSet.Include(x => x.Repository)
                .ThenInclude(x => x.RepositoryType)
                .SingleAsync(x => x.Id == id);
        }
    }
}