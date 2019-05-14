using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using UniversalRepos.Datas.Entities;
using UniversalRepos.Datas.Services;

namespace UniversalRepos.Datas.Managers {
    public class RepositoryTypeManager : IRepositoryTypeManager
    {
        private readonly IRepositoryTypeStorageEntityService _repositoryTypeStorageEntityService;
        private readonly IMapper _mapper;
        public RepositoryTypeManager(IRepositoryTypeStorageEntityService repositoryTypeStorageEntityService, 
            IMapper mapper)
        {
            _repositoryTypeStorageEntityService = repositoryTypeStorageEntityService;
            _mapper = mapper;
        }

        public async Task<IEnumerable<RepositoryTypeEntity>> GetAll()
        {
            return _mapper.Map<IEnumerable<RepositoryTypeEntity>>(await _repositoryTypeStorageEntityService.GetAll());
        }

        public Task<RepositoryTypeEntity> Create(RepositoryTypeEntity entity)
        {
            throw new System.NotImplementedException();
        }

        public Task<RepositoryTypeEntity> Update()
        {
            throw new System.NotImplementedException();
        }
    }
}