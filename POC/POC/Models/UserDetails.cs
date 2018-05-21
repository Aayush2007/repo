using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace POC.Models
{
    public class UserDetails
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public string fName { get; set; }

        [Required]
        public string lName { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        public int countryId { get; set; }

        [Required]
        public int uId { get; set; }

    }
}