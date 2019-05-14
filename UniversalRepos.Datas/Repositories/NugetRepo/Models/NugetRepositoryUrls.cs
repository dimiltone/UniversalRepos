using System;
using System.Collections.Generic;
using System.Text;

namespace UniversalRepos.Datas.Repositories.NugetRepo.Models
{
    public static class NugetRepositoryUrls
    {

        public const string ListPackagesUrl =
            "Search()?$filter=IsLatestVersion&searchTerm=%27%27&targetFramework=%27%27&includePrerelease=false&$skip=0&$top=26&semVerLevel=2.0.0%20HTTP/1.1";

        public static string BuildPackageVersionsUrl(string packageId)
        {
            return $"FindPackagesById()?id=%27{packageId}%27&semVerLevel=2.0.0%20HTTP/1.1";
        } 
    }
}
