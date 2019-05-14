using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.Services
{
    public class RepositoryTypeStorageEntityService : IRepositoryTypeStorageEntityService
    {
        private readonly AllReposContext _context;

        private readonly DbSet<RepositoryTypeStorageEntity> _dbSet;
        public RepositoryTypeStorageEntityService(AllReposContext context)
        {
            _context = context;
            _dbSet = context.Set<RepositoryTypeStorageEntity>();
        }

        public async Task<IEnumerable<RepositoryTypeStorageEntity>> GetAll()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<int> Create(RepositoryTypeStorageEntity entity)
        {
            await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();

            return entity.Id;
        }
        public async Task Update(RepositoryTypeStorageEntity entity)
        {
            _dbSet.Update(entity);
            await _context.SaveChangesAsync();
        }
    }
}