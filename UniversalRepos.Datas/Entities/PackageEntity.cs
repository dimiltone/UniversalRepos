using System;

namespace UniversalRepos.Datas.Entities
{
    public class PackageEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Author { get; set; }

        public string Version { get; set; }

        public string License { get; set; }

        public DateTime? PublicationDate { get; set; }

        public string DownloadUrl { get; set; }

        public string InfoUrl { get; set; }

        public int RepositoryId { get; set; }

        public string Repository { get; set; }

        public string RepositoryType { get; set; }

    }
}
