using System;

namespace UniversalRepos.Datas.StorageEntities
{
    public class PackageStorageEntity
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

        public RepositoryStorageEntity Repository { get; set; }

    }
}
