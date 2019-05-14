using System;

namespace UniversalRepos.Datas.StorageEntities
{
    public class BasePackageStorageEntity
    {
        public int PackageId { get; set; }

        public PackageStorageEntity Package { get; set; }
    }
}
