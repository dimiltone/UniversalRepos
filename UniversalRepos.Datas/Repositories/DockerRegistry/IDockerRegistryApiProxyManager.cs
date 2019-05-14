using System.Collections.Generic;
using System.Threading.Tasks;
using RestEase;

namespace UniversalRepos.Datas.Repositories.DockerRegistry
{
    public interface IDockerRegistryApiProxyManager
    {
        [Get("{url}")]
        Task<IEnumerable<string>> Test([Path(UrlEncode = false)] string url);
        
        [Get("{url}")]
        Task<IEnumerable<string>> List([Path(UrlEncode = false)] string url);
    }
}