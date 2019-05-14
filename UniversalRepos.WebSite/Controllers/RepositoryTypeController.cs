using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UniversalRepos.Datas.Entities;
using UniversalRepos.Datas.Managers;

namespace UniversalRepos.WebSite.Controllers
{

    [Route("api/[controller]")]

    public class RepositoryTypeController : Controller
    {
        private readonly IRepositoryTypeManager _manager;

        public RepositoryTypeController(IRepositoryTypeManager manager)
        {
            _manager = manager;
        }

        [HttpGet("")]
        public async Task<IEnumerable<RepositoryTypeEntity>> GetAll()
        {
            return await _manager.GetAll();
        }

        [HttpPost("create")]
        public async Task<ActionResult<RepositoryTypeEntity>> Create([FromBody] RepositoryTypeEntity entity)
        {
            if (ModelState.IsValid)
            {
                return await _manager.Create(entity);
            }

            return new BadRequestResult();
        }
    }
}