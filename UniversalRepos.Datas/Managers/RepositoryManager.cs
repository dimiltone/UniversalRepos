using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using UniversalRepos.Datas.Entities;
using UniversalRepos.Datas.Services;
using UniversalRepos.Datas.StorageEntities;

namespace UniversalRepos.Datas.Managers
{
    public class RepositoryManager : IRepositoryManager
    {
        private readonly IRepositoryStorageService _service;

        private readonly IMapper _mapper;
        private readonly IValidator<RepositoryEntity> Validator;
        public RepositoryManager(IRepositoryStorageService service, IMapper mapper, IValidator<RepositoryEntity> validator)
        {
            _service = service;
            _mapper = mapper;
            Validator = validator;
        }

        public async Task<IEnumerable<RepositoryEntity>> GetAll()
        {
            return _mapper.Map<IEnumerable<RepositoryEntity>>(await _service.GetAll());
        }

        public async Task<RepositoryEntity> GetById(int id)
        {
            return _mapper.Map<RepositoryEntity>(await _service.GetById(id));
        }
        public async Task<RepositoryEntity> Create(RepositoryEntity entity)
        {
            var validationResult = await Validator.ValidateAsync(entity);

            if( !validationResult.IsValid )
                throw new ValidationException("Le repository n'est pas valide", validationResult.Errors);

            var storageEntity = _mapper.Map<RepositoryStorageEntity>(entity);

            await _service.Create(storageEntity);

            return _mapper.Map<RepositoryEntity>(storageEntity);
        }

        public async Task Delete(int id)
        {
            await _service.Delete(id);
        }
    }
}