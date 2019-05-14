using System.Collections.Generic;
using System.Threading.Tasks;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.Services
{
    public interface IRepositoryTypeStorageEntityService : IService
    {
        Task<IEnumerable<RepositoryTypeStorageEntity>> GetAll();

        Task<int> Create(RepositoryTypeStorageEntity entity);
    }
}