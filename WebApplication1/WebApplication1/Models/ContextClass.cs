﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class ContextClass:DbContext
    {
        public DbSet<Users> users { get; set; }
        public DbSet<Country> countries { get; set; }
    }
}