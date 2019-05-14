using AutoMapper;
using UniversalRepos.Datas.Entities;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.EntityMappers
{
    public class RepositoryMapperProfile : Profile
    {
        public RepositoryMapperProfile()
        {
            CreateMap<RepositoryStorageEntity, RepositoryEntity>()
                .ForMember(dest => dest.RepositoryType, opts => opts.MapFrom(src => src.RepositoryType.Name))
                .ForMember(dest => dest.ImportedPackages, opts => opts.MapFrom(src => src.Packages != null ? src.Packages.Count : 0));
            CreateMap<RepositoryEntity, RepositoryStorageEntity>()
                .ForMember(dest => dest.RepositoryType, opts => opts.Ignore());
        }
    }
}
