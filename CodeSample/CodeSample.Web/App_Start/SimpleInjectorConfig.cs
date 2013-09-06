using CodeSample.Contracts;
using CodeSample.Logic;
using SimpleInjector;
using SimpleInjector.Integration.Web;
using SimpleInjector.Integration.Web.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace CodeSample.Web
{

    public static class SimpleInjectorConfig
    {
        /// <summary>Initialize the container and register it as MVC3 Dependency Resolver.</summary>
        public static void Register()
        {
            // Did you know the container can diagnose your configuration? Go to: http://bit.ly/YE8OJj.
            var container = new Container();

            InitializeContainer(container);

            container.RegisterMvcControllers(Assembly.GetExecutingAssembly());

            container.RegisterMvcAttributeFilterProvider();

            var controllerTypes =
                 from type in Assembly.GetExecutingAssembly().GetExportedTypes()
                 where typeof(ApiController).IsAssignableFrom(type)
                 where !type.IsAbstract
                 where !type.IsGenericTypeDefinition
                 where type.Name.EndsWith("Controller", StringComparison.Ordinal)
                 select type;

            foreach (var controllerType in controllerTypes)
            {
                container.Register(controllerType);
            }

            container.Verify();

            DependencyResolver.SetResolver(new SimpleInjectorDependencyResolver(container));
            GlobalConfiguration.Configuration.DependencyResolver = new SimpleInjectorHttpDependencyResolver(container);
        }

        private static void InitializeContainer(Container container)
        {
            var webLifestyle = new WebRequestLifestyle();
            container.Register<IPageService, PageService>(webLifestyle);

        }
    }
}