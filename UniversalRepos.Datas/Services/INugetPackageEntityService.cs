using System.Collections.Generic;
using System.Threading.Tasks;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.Services
{
    public interface INugetPackageEntityService : IService
    {
        Task<int> Import(NugetPackageStorageEntity nugetPackageStorageEntity);

        Task<IEnumerable<NugetPackageStorageEntity>> GetByPackageId(int packageId);
    }
}
