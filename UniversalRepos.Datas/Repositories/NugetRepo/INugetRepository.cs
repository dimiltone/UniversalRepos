using System.Collections.Generic;
using System.Threading.Tasks;
using UniversalRepos.Datas.Repositories.NugetRepo.Models;

namespace UniversalRepos.Datas.Repositories.NugetRepo
{
    public interface INugetRepository : IRepository
    {
        Task<IEnumerable<NugetPackageModel>> GetAllPackages(int id);

        Task<IEnumerable<NugetPackageModel>> GetAllPackageVersions(int id);

        Task<int> ImportPackageVersion(NugetPackageModel packageModel, int packageId);

        Task<IEnumerable<NugetPackageModel>> GetImportedVersions(int id);
    }
}
