using System.Collections.Generic;
using System.Threading.Tasks;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.Services
{
    public interface IRepositoryStorageService : IService
    {
        Task<IEnumerable<RepositoryStorageEntity>> GetAll();

        Task<int> Create(RepositoryStorageEntity entity);

        bool IsDoublon(string name);

        bool HasUniqueUrl(string url);

        Task Delete(int id);

        Task<RepositoryStorageEntity> GetById(int id);
    }
}
