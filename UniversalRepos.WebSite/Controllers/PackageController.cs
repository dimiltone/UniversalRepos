using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UniversalRepos.Datas.Entities;
using UniversalRepos.Datas.Managers;

namespace UniversalRepos.WebSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PackageController : ControllerBase
    {
        private readonly IPackageManager _packageManager;

        public PackageController(IPackageManager packageManager)
        {
            _packageManager = packageManager;
        }
        [HttpGet("{id}")]
        public async Task<PackageEntity> GetById([FromRoute]int id)
        {
            return await _packageManager.GetById(id);
        }
    }
}
