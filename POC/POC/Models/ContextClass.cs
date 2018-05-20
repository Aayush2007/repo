using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace POC.Models
{
    public class ContextClass :DbContext
    {
        public DbSet<User> users { get; set; }
        public DbSet<UserDetails> details { get; set; }
        public DbSet<Country> countries { get; set; }
    }
}