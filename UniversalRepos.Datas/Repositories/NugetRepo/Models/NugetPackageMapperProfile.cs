using AutoMapper;
using UniversalRepos.Datas.Entities;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.Repositories.NugetRepo.Models
{
    public class NugetPackageMapperProfile : Profile
    {
        public NugetPackageMapperProfile()
        {
            CreateMap<feedEntry, NugetPackageModel>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.id))
                .ForMember(dest => dest.Authors, opts => opts.MapFrom(src => src.author.name))
                .ForMember(dest => dest.Title, opts => opts.MapFrom(src => src.title.Value))
                .ForMember(dest => dest.Description, opts => opts.MapFrom(src => src.properties.Description))
                .ForMember(dest => dest.Version, opts => opts.MapFrom(src => src.properties.Version))
                .ForMember(dest => dest.Published, opts => opts.MapFrom(src => src.updated))
                .ForMember(dest => dest.NormalizedVersion, opts => opts.MapFrom(src => src.properties.NormalizedVersion))
                .ForMember(dest => dest.IsPrerelease, opts => opts.MapFrom(src => src.properties.IsPrerelease.Value))
                .ForMember(dest => dest.Owners, opts => opts.MapFrom(src => src.properties.Owners))
                .ForMember(dest => dest.IconUrl, opts => opts.MapFrom(src => src.properties.IconUrl.@null ? null : src.properties.IconUrl.Value))
                .ForMember(dest => dest.LicenseUrl, opts => opts.MapFrom(src => src.properties.LicenseUrl.@null ? null : src.properties.LicenseUrl.Value))
                .ForMember(dest => dest.VersionDownloadCount, opts => opts.MapFrom(src => src.properties.VersionDownloadCount.Value))
                .ForMember(dest => dest.ProjectUrl, opts => opts.MapFrom(src => src.properties.ProjectUrl.@null ? null : src.properties.ProjectUrl.Value))
                .ForMember(dest => dest.DownloadCount, opts => opts.MapFrom(src => src.properties.DownloadCount.Value))
                .ForMember(dest => dest.RequireLicenseAcceptance, opts => opts.MapFrom(src => src.properties.RequireLicenseAcceptance.Value))
                .ForMember(dest => dest.DevelopmentDependency, opts => opts.MapFrom(src => src.properties.DevelopmentDependency.Value))
                .ForMember(dest => dest.Summary, opts => opts.MapFrom(src => src.properties.Summary.@null ? null : src.properties.Summary.Value))
                .ForMember(dest => dest.ReleaseNotes, opts => opts.MapFrom(src => src.properties.ReleaseNotes.@null ? null : src.properties.ReleaseNotes.Value))
                .ForMember(dest => dest.LastUpdated, opts => opts.MapFrom(src => src.updated))
                .ForMember(dest => dest.Dependencies, opts => opts.MapFrom(src => src.properties.Dependencies))
                .ForMember(dest => dest.PackageHash, opts => opts.MapFrom(src => src.properties.PackageHash))
                .ForMember(dest => dest.PackageHashAlgorithm, opts => opts.MapFrom(src => src.properties.PackageHashAlgorithm))
                .ForMember(dest => dest.PackageSize, opts => opts.MapFrom(src => src.properties.PackageSize.Value))
                .ForMember(dest => dest.Copyright, opts => opts.MapFrom(src => src.properties.Copyright.Value))
                .ForMember(dest => dest.Tags, opts => opts.MapFrom(src => src.properties.Tags.@null ? null : src.properties.Tags.Value))
                .ForMember(dest => dest.IsAbsoluteLatestVersion, opts => opts.MapFrom(src => src.properties.IsAbsoluteLatestVersion.Value))
                .ForMember(dest => dest.IsLatestVersion, opts => opts.MapFrom(src => src.properties.IsLatestVersion.Value))
                .ForMember(dest => dest.Listed, opts => opts.MapFrom(src => src.properties.Listed.Value))
                .ForMember(dest => dest.MinClientVersion, opts => opts.MapFrom(src => src.properties.MinClientVersion.@null ? null : src.properties.MinClientVersion.Value))
                .ForMember(dest => dest.Language, opts => opts.MapFrom(src => src.properties.Language.@null ? null : src.properties.Language.Value))
                .ForMember(dest => dest.ContentUrl, opts => opts.MapFrom(src => src.content.src))
                .ForMember(dest => dest.ContentType, opts => opts.MapFrom(src => src.content.type))
                .ForAllOtherMembers(x => x.Ignore());


            CreateMap<NugetPackageModel, PackageEntity>()
                .ForMember(dest => dest.Id, opts => opts.Ignore())
                .ForMember(dest => dest.Version, opts => opts.MapFrom(src => src.Version))
                .ForMember(dest => dest.RepositoryId, opts => opts.Ignore())
                .ForMember(dest => dest.License, opts => opts.Ignore())
                .ForMember(dest => dest.InfoUrl, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.DownloadUrl, opts => opts.MapFrom(src => src.ContentUrl))
                .ForMember(dest => dest.Author, opts => opts.MapFrom(src => src.Authors))
                .ForMember(dest => dest.Description, opts => opts.MapFrom(src => src.Description))
                .ForMember(dest => dest.Name, opts => opts.MapFrom(src => src.Title))
                .ForMember(dest => dest.PublicationDate, opts => opts.MapFrom(src => src.Published))
                .ForAllOtherMembers(x => x.Ignore());

            CreateMap<NugetPackageModel, NugetPackageStorageEntity>()
                .ForMember(dest => dest.PackageId, opts => opts.Ignore());
        }
    }
}
