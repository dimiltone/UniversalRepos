using System;
using System.Collections.Generic;
using System.Text;

namespace UniversalRepos.Datas.StorageEntities
{
    public class RepositoryStorageEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int RepositoryTypeId { get; set; }

        public string Url { get; set; }

        public bool? IsPublic { get; set; }

        public RepositoryTypeStorageEntity RepositoryType { get; set; }

        public ICollection<PackageStorageEntity> Packages { get; set; }
    }
}
