using FluentValidation;

namespace UniversalRepos.Datas.Exceptions
{
    public static class CustomValidators
    {
        public static IRuleBuilderOptions<T, TElement> Required<T, TElement>(this IRuleBuilder<T, TElement> ruleBuilder)
        {
            return ruleBuilder.NotNull().WithMessage("{PropertyName} must not be null")
                .NotEmpty().WithMessage("{PropertyName} must not be empty").WithErrorCode("Required");
        }
        public static IRuleBuilderOptions<T, TElement> MinLength<T, TElement>(this IRuleBuilder<T, TElement> ruleBuilder, int minLength)
        {
            return ruleBuilder.Must((rootObject, value, context) =>
            {
                context.MessageFormatter
                    .AppendArgument("minLength", minLength);

                return value.ToString().Length > minLength;
            }).WithMessage("{PropertyName} length must contains more than {minLength} caracters").WithErrorCode(("MinLength"));
        }
    }
}
