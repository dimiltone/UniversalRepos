using System.Collections.Generic;

namespace UniversalRepos.Datas.StorageEntities
{
    public class RepositoryTypeStorageEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public IEnumerable<RepositoryStorageEntity> Repositories { get; set; }
    }
}