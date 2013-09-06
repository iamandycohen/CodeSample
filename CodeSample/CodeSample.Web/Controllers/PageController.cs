using CodeSample.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CodeSample.Web.Controllers
{
    public class PageController : ApiController
    {

        private readonly IPageService _pageService;

        public PageController(IPageService pageService)
        {
            _pageService = pageService;
        }

        public HttpResponseMessage Get()
        {

            var pages = _pageService.GetPages();

            return Request.CreateResponse(HttpStatusCode.OK, pages);
        }
    }
}
