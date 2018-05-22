using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Country
    {
        [Key]
        [Required]
        public string CountryName { get; set; }
    }
}