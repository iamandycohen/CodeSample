using CodeSample.Contracts.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeSample.Contracts
{
    public interface IPageService
    {
        IList<Page> GetPages();
    }
}
