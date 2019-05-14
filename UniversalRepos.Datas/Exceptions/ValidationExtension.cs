using System.Collections.Generic;
using System.Linq;
using FluentValidation.Results;

namespace UniversalRepos.Datas.Exceptions
{
    public static class ValidationExtension
    {
        public static IEnumerable<ValidationError> ToValidationError(this IEnumerable<ValidationFailure> failures)
        {
            List<ValidationError> results = new List<ValidationError>();
            IEnumerable<string> properties = failures.Select(x => x.PropertyName).Distinct();
            foreach( string prop in properties )
            {
                var customErrors = failures.Where(x => x.PropertyName == prop).ToCustomError();
                var distinct = customErrors.Distinct().ToList();
                var error = new ValidationError {Property = prop, Errors = distinct};

                results.Add(error);
                
            }

            return results;
        }
            private static IEnumerable<CustomError> ToCustomError(this IEnumerable<ValidationFailure> failures)
            {
                foreach (var failure in failures)
                {
                    yield return failure.ToValidationError();
                }
            }

            private static CustomError ToValidationError(this ValidationFailure failure)
            {
                return new CustomError(failure.ErrorCode, failure.ErrorMessage);
            }
    }
}