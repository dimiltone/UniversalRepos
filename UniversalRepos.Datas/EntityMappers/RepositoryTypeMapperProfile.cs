using AutoMapper;
using UniversalRepos.Datas.Entities;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.EntityMappers
{
    public class RepositoryTypeMapperProfile : Profile
    {
        public RepositoryTypeMapperProfile()
        {
            CreateMap<RepositoryTypeStorageEntity, RepositoryTypeEntity>();
            CreateMap<RepositoryTypeEntity, RepositoryTypeStorageEntity>();
        }
    }
}
