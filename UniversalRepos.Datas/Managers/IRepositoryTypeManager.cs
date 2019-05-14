using System.Collections.Generic;
using System.Threading.Tasks;
using UniversalRepos.Datas.Entities;

namespace UniversalRepos.Datas.Managers
{
    public interface IRepositoryTypeManager : IManager
    {
        Task<IEnumerable<RepositoryTypeEntity>> GetAll();
        Task<RepositoryTypeEntity> Create(RepositoryTypeEntity entity);
        Task<RepositoryTypeEntity> Update();
    }
}
