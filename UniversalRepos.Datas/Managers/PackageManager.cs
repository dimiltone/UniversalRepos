using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using UniversalRepos.Datas.Entities;
using UniversalRepos.Datas.Services;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.Managers
{
    public class PackageManager : IPackageManager
    {
        private readonly IPackageStorageService _packageStorageService;
        private readonly IMapper _mapper;
        public PackageManager(IPackageStorageService packageStorageService, IMapper mapper)
        {
            _packageStorageService = packageStorageService;
            _mapper = mapper;
        }

        public async Task<int> Import(PackageEntity package)
        {
            var storage = _mapper.Map<PackageStorageEntity>(package);

            return await _packageStorageService.AddOrUpdate(storage);
        }
        public async Task<IEnumerable<PackageEntity>> GetByRepository(int repositoryId)
        {
            return _mapper.Map<IEnumerable<PackageEntity>>(await _packageStorageService.GetByRepositoryId(repositoryId));
        }
        public async Task<PackageEntity> GetById(int id)
        {
            return _mapper.Map<PackageEntity>(await _packageStorageService.FindById(id));
        }
    }
}