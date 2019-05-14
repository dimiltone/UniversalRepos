using System.Collections.Generic;
using System.Threading.Tasks;
using RestEase;
using UniversalRepos.Datas.Repositories.NugetRepo.Models;

namespace UniversalRepos.Datas.Repositories.NugetRepo
{
    public interface INugetApiProxyManager : IRepositoryApiManager
    {
        [Get("{url}")]
        Task<service> Test([Path(UrlEncode = false)] string url);

        [Get("{url}")]
        Task<feed> ListPackages([Path(UrlEncode = false)] string url);
    }
}
