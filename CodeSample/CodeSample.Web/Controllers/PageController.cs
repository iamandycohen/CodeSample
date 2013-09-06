using CodeSample.Contracts;
using CodeSample.Contracts.Models;
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

        public HttpResponseMessage Post([FromBody]Page page)
        {
            if (ModelState.IsValid)
            {
                if (!_pageService.AddPage(page))
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest);
                }

                return Request.CreateResponse(HttpStatusCode.Created);
            }

            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }

        public HttpResponseMessage Post(Guid id, [FromBody]Page page) 
        {
            if (ModelState.IsValid)
            {
                if (!_pageService.UpdatePage(id, page))
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }

                return Request.CreateResponse(HttpStatusCode.OK);
            }

            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }

        public HttpResponseMessage Delete(Guid id)
        {
            if (!_pageService.DeletePage(id))
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            return Request.CreateResponse(HttpStatusCode.OK);
        }

    }
}
