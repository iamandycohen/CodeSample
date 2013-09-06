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

        private readonly ITestService _testService;

        public PageController(ITestService testService)
        {
            _testService = testService;
        }

        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(HttpStatusCode.OK, new { hello = "world" });
        }
    }
}
