using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.Services {
    public class NugetPackageEntityService : INugetPackageEntityService
    {
        private readonly AllReposContext _context;
        private readonly DbSet<NugetPackageStorageEntity> _dbSet;

        public NugetPackageEntityService(AllReposContext context)
        {
            _context = context;
            _dbSet = context.Set<NugetPackageStorageEntity>();
        }

        public async Task<NugetPackageStorageEntity> TryFindById(string id)
        {
            return await _dbSet.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<int> Import(NugetPackageStorageEntity nugetPackageStorageEntity)
        {
            var oldPackageStorageEntity = await TryFindById(nugetPackageStorageEntity.Id);
            if( oldPackageStorageEntity != null )
            {
                oldPackageStorageEntity = nugetPackageStorageEntity;
                _dbSet.Update(oldPackageStorageEntity);
            }
            else
            {
                await _dbSet.AddAsync(nugetPackageStorageEntity);
            }
            return await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<NugetPackageStorageEntity>> GetByPackageId(int packageId)
        {
            return await _dbSet.Where(x => x.PackageId == packageId).ToListAsync();
        }
    }
}