namespace UniversalRepos.Datas.Entities
{
    public class RepositoryEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int RepositoryTypeId { get; set; }

        public string Url { get; set; }

        public bool? IsPublic { get; set; }

        public string RepositoryType { get; set; }

        public int ImportedPackages { get; set; }
    }
}
