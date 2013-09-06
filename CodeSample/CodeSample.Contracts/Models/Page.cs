using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeSample.Contracts.Models
{
    public class Page
    {
        public Guid Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Content { get; set; }
    }
}
