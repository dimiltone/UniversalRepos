using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.Services
{
    public class RepositoryStorageService : IRepositoryStorageService
    {
        private readonly AllReposContext _context;

        private readonly DbSet<RepositoryStorageEntity> _dbSet;

        public RepositoryStorageService(AllReposContext context)
        {
            _context = context;
            _dbSet = _context.Set<RepositoryStorageEntity>();
        }

        public async Task<IEnumerable<RepositoryStorageEntity>> GetAll()
        {
            return await _dbSet.Include(x => x.RepositoryType).ToListAsync();
        }

        public bool HasUniqueUrl(string url)
        {
            return !_dbSet.Any(x => x.Url.ToLower() == url.ToLower());
        }
        public bool IsDoublon(string name)
        {
            return _dbSet.Any(x => x.Name.ToLower() == name.ToLower());
        }
        public async Task<int> Create(RepositoryStorageEntity entity)
        {
            await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();

            return entity.Id;
        }

        public async Task Delete(int id)
        {
            var repository = await GetById(id);

            _dbSet.Remove(repository);
            await _context.SaveChangesAsync();
        }
        public async Task<RepositoryStorageEntity> GetById(int id)
        {
            return await _dbSet
                .Include(x => x.RepositoryType)
                .Include(x => x.Packages)
                .SingleOrDefaultAsync(x => x.Id == id);
        }
    }
}