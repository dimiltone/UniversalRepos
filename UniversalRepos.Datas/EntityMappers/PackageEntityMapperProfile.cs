using AutoMapper;
using UniversalRepos.Datas.Entities;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.EntityMappers
{
    public class PackageEntityMapperProfile : Profile
    {
        public PackageEntityMapperProfile()
        {
            CreateMap<PackageStorageEntity, PackageEntity>()
                .ForMember(dest => dest.Repository, opts => opts.MapFrom(src => src.Repository != null ? src.Repository.Name : null))
                .ForMember(dest => dest.RepositoryType, opts => opts
                    .MapFrom(src => src.Repository != null && src.Repository.RepositoryType != null ? src.Repository.RepositoryType.Name : null));
            CreateMap<PackageEntity, PackageStorageEntity>()
                .ForMember(dest => dest.Repository, opts => opts.Ignore());
        }
    }
}
