using System.Collections.Generic;
using System.Threading.Tasks;
using UniversalRepos.Datas.Entities;

namespace UniversalRepos.Datas.Managers
{
    public interface IPackageManager : IManager
    {
        Task<int> Import(PackageEntity package);

        Task<PackageEntity> GetById(int id);

        Task<IEnumerable<PackageEntity>> GetByRepository(int repositoryId);
    }
}
