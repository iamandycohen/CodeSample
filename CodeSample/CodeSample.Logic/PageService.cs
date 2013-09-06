using CodeSample.Contracts;
using CodeSample.Contracts.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeSample.Logic
{
    public class PageService : IPageService
    {

        private static IList<Page> _data = new List<Page>
        {
            new Page { 
                Id = Guid.NewGuid(), 
                Title = "Sample Page", 
                Content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            }
        };


        public IList<Page> GetPages()
        {
            return _data;
        }
    }
}
