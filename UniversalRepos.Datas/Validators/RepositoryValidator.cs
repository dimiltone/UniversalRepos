using System.Security.Cryptography.X509Certificates;
using FluentValidation;
using UniversalRepos.Datas.Entities;
using UniversalRepos.Datas.Exceptions;
using UniversalRepos.Datas.Services;

namespace UniversalRepos.Datas.Validators
{
    public class RepositoryValidator : AbstractValidator<RepositoryEntity>
    {
        private readonly IRepositoryStorageService _repositoryStorageService;

        public RepositoryValidator(IRepositoryStorageService repositoryStorageService)
        {
            _repositoryStorageService = repositoryStorageService;
            RuleFor(x => x.Name).Required();
            RuleFor(x => x.Description).Required();
            RuleFor(x => x.Url).Required();
            RuleFor(x => x.Name).Custom((name, context) =>
            {
                if( _repositoryStorageService.IsDoublon(name) )
                {
                    context.AddFailure("The name must be unique");
                }
            });

            RuleFor(x => x.Url).Custom((url, context) =>
            {
                if (!_repositoryStorageService.HasUniqueUrl(url))
                {
                    context.AddFailure("The url must be unique");
                }
            });
        }
    }
}
