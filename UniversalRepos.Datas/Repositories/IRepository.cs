using System.Collections.Generic;
using System.Threading.Tasks;

namespace UniversalRepos.Datas.Repositories
{
    public interface IRepository
    {
        Task<bool> TestRepository(string url);

        Task<IEnumerable<int>> Import(int id);

    }
}
