using System.Collections.Generic;
using System.Threading.Tasks;
using UniversalRepos.Datas.Entities;

namespace UniversalRepos.Datas.Managers
{
    public interface IRepositoryManager : IManager
    {
        Task<IEnumerable<RepositoryEntity>> GetAll();

        Task<RepositoryEntity> Create(RepositoryEntity entity);

        Task Delete(int id);

        Task<RepositoryEntity> GetById(int id);
    }
}
