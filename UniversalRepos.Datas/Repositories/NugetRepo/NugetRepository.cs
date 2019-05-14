using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using UniversalRepos.Datas.Entities;
using UniversalRepos.Datas.Managers;
using UniversalRepos.Datas.Repositories.NugetRepo.Models;
using UniversalRepos.Datas.Services;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.Repositories.NugetRepo
{
    public class NugetRepository : INugetRepository
    {
        private readonly INugetApiProxyManager _nugetApiProxyManager;

        private readonly IRepositoryStorageService _repositoryStorageService;

        private readonly INugetPackageEntityService _nugetPackageEntityService;

        private readonly IPackageManager _packageManager;

        private readonly IMapper _mapper;
        public NugetRepository(INugetApiProxyManager nugetApiProxyManager, 
            IRepositoryStorageService repositoryStorageService, IMapper mapper,
            IPackageManager packageManager, INugetPackageEntityService nugetPackageEntityService)
        {
            _nugetApiProxyManager = nugetApiProxyManager;
            _repositoryStorageService = repositoryStorageService;
            _mapper = mapper;
            _packageManager = packageManager;
            _nugetPackageEntityService = nugetPackageEntityService;
        }

        public async Task<bool> TestRepository(string url)
        {
            try
            {
                if( await _nugetApiProxyManager.Test(url) != null )
                    return true;

                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<IEnumerable<int>> Import(int id)
        {
            var packages = await GetAllPackages(id);
            if (packages == null || !packages.Any())
                return null;

            List<int> ids = new List<int>();

            foreach (var entry in packages)
            {
                PackageEntity package = _mapper.Map<PackageEntity>(entry);
                package.RepositoryId = id;
                ids.Add(await _packageManager.Import(package));
            }

            return ids;
        }

        public async Task<IEnumerable<NugetPackageModel>> GetAllPackages(int id)
        {
            var repository = await _repositoryStorageService.GetById(id);
            var feed = await _nugetApiProxyManager.ListPackages($"{repository.Url}/{NugetRepositoryUrls.ListPackagesUrl}");

            return _mapper.Map<IEnumerable<NugetPackageModel>>(feed.entry);

        }

        public async Task<IEnumerable<NugetPackageModel>> GetAllPackageVersions(int id)
        {
            var package = await _packageManager.GetById(id);
            var repository = await _repositoryStorageService.GetById(package.RepositoryId);
            string url = NugetRepositoryUrls.BuildPackageVersionsUrl(package.Name);

            var feed = await _nugetApiProxyManager.ListPackages($"{repository.Url}/{url}");
            return _mapper.Map<IEnumerable<NugetPackageModel>>(feed.entry);
        }

        public async Task<IEnumerable<NugetPackageModel>> GetImportedVersions(int id)
        {
            return _mapper.Map<IEnumerable<NugetPackageModel>>(await _nugetPackageEntityService.GetByPackageId(id));
        }

        public async Task<int> ImportPackageVersion(NugetPackageModel packageModel, int packageId)
        {
            NugetPackageStorageEntity storageEntity = _mapper.Map<NugetPackageStorageEntity>(packageModel);
            storageEntity.PackageId = packageId;

            return await _nugetPackageEntityService.Import(storageEntity);
        }
    }
}