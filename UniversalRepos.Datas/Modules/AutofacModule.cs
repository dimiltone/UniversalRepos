using System.Reflection;
using Autofac;
using FluentValidation;
using RestEase;
using UniversalRepos.Datas.Managers;
using UniversalRepos.Datas.Repositories;
using UniversalRepos.Datas.Repositories.NugetRepo;
using UniversalRepos.Datas.Services;
using UniversalRepos.Datas.Validators;
using Module = Autofac.Module;

namespace UniversalRepos.Datas.Modules
{
    public class AutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.Register(context => 
                    new RestClient("http://localhost:5000")
                    {
                        ResponseDeserializer = new RepositoryResponseDeserializer()
                    }.For<INugetApiProxyManager>())
                .As<INugetApiProxyManager>();
            builder.RegisterAssemblyTypes(typeof(IManager).Assembly)
                .Where(t => typeof(IManager).IsAssignableFrom(t))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();

            builder.RegisterAssemblyTypes(typeof(IService).Assembly)
                .Where(t => typeof(IService).IsAssignableFrom(t))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();
            builder.RegisterAssemblyTypes(typeof(NugetRepository).Assembly)
                .Where(t => typeof(IRepository).IsAssignableFrom(t))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();
            builder.RegisterAssemblyTypes(typeof(RepositoryValidator).Assembly)
                .Where(x => x.GetTypeInfo()
                    .IsClosedTypeOf(typeof(IValidator<>)))
                .AsImplementedInterfaces();
        }
    }
}
