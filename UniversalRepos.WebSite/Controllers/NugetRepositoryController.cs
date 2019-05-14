using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UniversalRepos.Datas.Repositories.NugetRepo;
using UniversalRepos.Datas.Repositories.NugetRepo.Models;

namespace UniversalRepos.WebSite.Controllers
{
    [Route("api/nuget")]
    public class NugetRepositoryController : Controller
    {
        private readonly INugetRepository _nugetRepository;
        public NugetRepositoryController(INugetRepository nugetRepositoryManager)
        {
            _nugetRepository = nugetRepositoryManager;
        }

        [HttpGet("test")]
        public async Task<bool> Test([FromQuery]string url)
        {
            return await _nugetRepository.TestRepository(url);
        }

        [HttpGet("{id}/count")]
        public async Task<int> CountPackages([FromRoute] int id)
        {
            var packages = await _nugetRepository.GetAllPackages(id);
            return packages.Count();
        }
        [HttpGet("{id}/packages")]
        public async Task<IEnumerable<NugetPackageModel>> ListPackages([FromRoute] int id)
        {
            return await _nugetRepository.GetAllPackages(id);
        }
        [HttpPost("{id}/import")]
        public async Task<IEnumerable<int>> Import([FromRoute] int id)
        {
            return await _nugetRepository.Import(id);
        }
        [HttpPost("package/{id}/import-versions")]
        public async Task ImportVersions([FromRoute] int id)
        {
            IEnumerable<NugetPackageModel> allVersions = await _nugetRepository.GetAllPackageVersions(id);

            foreach (NugetPackageModel nugetPackageModel in allVersions)
            {
                await _nugetRepository.ImportPackageVersion(nugetPackageModel, id);
            }
        }
        [HttpGet("package/{id}")]
        public async Task<IEnumerable<NugetPackageModel>> GetPackageVersions([FromRoute] int id)
        {
            return await _nugetRepository.GetImportedVersions(id);
        }
    }
}
