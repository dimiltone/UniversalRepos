using System.Collections.Generic;
using System.Threading.Tasks;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.Services
{
    public interface IPackageStorageService : IService
    {
        Task<int> AddOrUpdate(PackageStorageEntity package);

        Task<PackageStorageEntity> FindById(int id);

        Task<IEnumerable<PackageStorageEntity>> GetByRepositoryId(int repositoryId);

        Task Update(PackageStorageEntity package);
    }
}
