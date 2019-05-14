using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UniversalRepos.Datas.Entities;
using UniversalRepos.Datas.Managers;

namespace UniversalRepos.WebSite.Controllers
{
    [Route("api/repository")]
    public class RepositoryController : Controller
    {
        private readonly IRepositoryManager _manager;
        private readonly IPackageManager _packageManager;

        public RepositoryController(IRepositoryManager manager, IPackageManager packageManager)
        {
            _manager = manager;
            _packageManager = packageManager;
        }

        [HttpGet]
        public async Task<IEnumerable<RepositoryEntity>> GetAll()
        {
            return await _manager.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<RepositoryEntity> GetById([FromRoute] int id)
        {
            return await _manager.GetById(id);
        }

        [HttpGet("{id}/packages")]
        public async Task<IEnumerable<PackageEntity>> GetPackagesByRepository([FromRoute] int id)
        {
            return await _packageManager.GetByRepository(id);
        }
        [HttpPost("create")]
        public async Task<RepositoryEntity> Create([FromBody] RepositoryEntity entity)
        {
            return await _manager.Create(entity);
        }

        [HttpDelete("{id}/Delete")]
        public async Task<ActionResult> Delete([FromRoute] int id)
        {
            await _manager.Delete(id);

            return Ok();
        }

    }
}