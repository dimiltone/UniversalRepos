using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UniversalRepos.Datas.Managers;
using UniversalRepos.Datas.Repositories.NugetRepo;
using UniversalRepos.Datas.Repositories.NugetRepo.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace UniversalRepos.WebSite.Controllers
{
    [Route("api/[controller]")]
    public class NugetProxyController : Controller
    {
        private readonly INugetApiProxyManager _nugetApiProxyManager;
        private readonly INugetRepository _nugetRepositoryManager;
        private readonly IRepositoryManager _repositoryManager;

        public NugetProxyController(INugetApiProxyManager nugetApiProxyManager, 
            INugetRepository nugetRepositoryManager, IRepositoryManager repositoryManager)
        {
            _nugetApiProxyManager = nugetApiProxyManager;
            _nugetRepositoryManager = nugetRepositoryManager;
            _repositoryManager = repositoryManager;
        }

        [Produces("application/xml")]
        [HttpGet("{id}/list")]
        public async Task<feed> ListProxy([FromRoute] int id)
        {
            var repository = await _repositoryManager.GetById(id);
            return await _nugetApiProxyManager.ListPackages($"{repository.Url}/{NugetRepositoryUrls.ListPackagesUrl}");
        }
    }
}
