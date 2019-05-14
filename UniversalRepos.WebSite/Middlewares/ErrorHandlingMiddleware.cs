using System;
using System.Net;
using System.Security.Authentication;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using UniversalRepos.Datas.Exceptions;

namespace UniversalRepos.WebSite.Middlewares
{
    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate next;

        public ErrorHandlingMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task Invoke(HttpContext context /* other dependencies */)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }
        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            var code = HttpStatusCode.InternalServerError; // 500 if unexpected
            var type = exception.GetType();
            var exce = exception.GetBaseException();
            if (exception is NotFoundException)
                code = HttpStatusCode.NotFound;
            else if (exception is AuthenticationException)
                code = HttpStatusCode.Unauthorized;
            else if (exception is NoContentException)
                code = HttpStatusCode.NoContent;
            else if( exception is ValidationException ex )
            {
                code = HttpStatusCode.NotAcceptable;
                var errors = ex.Errors.ToValidationError();

                var validationError = JsonConvert.SerializeObject(new { errors });
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int)code;
                return context.Response.WriteAsync(validationError);
            }
            var result = JsonConvert.SerializeObject(new { error = exception.InnerException != null ? exception.InnerException.Message : exception.Message });
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;
            return context.Response.WriteAsync(result);
        }
    }
}