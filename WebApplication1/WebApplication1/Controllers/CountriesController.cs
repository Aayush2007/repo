using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class CountriesController : ApiController
    {
        private ContextClass db = new ContextClass();

        // GET: api/Countries
        public IQueryable<Country> Getcountries()
        {
            return db.countries;
        }

        // GET: api/Countries/5
        [ResponseType(typeof(Country))]
        public IHttpActionResult GetCountry(string id)
        {
            Country country = db.countries.Find(id);
            if (country == null)
            {
                return NotFound();
            }

            return Ok(country);
        }

        // PUT: api/Countries/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCountry(string id, Country country)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != country.CountryName)
            {
                return BadRequest();
            }

            db.Entry(country).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CountryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Countries
        [ResponseType(typeof(Country))]
        public IHttpActionResult PostCountry(Country country)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.countries.Add(country);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CountryExists(country.CountryName))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = country.CountryName }, country);
        }

        // DELETE: api/Countries/5
        [ResponseType(typeof(Country))]
        public IHttpActionResult DeleteCountry(string id)
        {
            Country country = db.countries.Find(id);
            if (country == null)
            {
                return NotFound();
            }

            db.countries.Remove(country);
            db.SaveChanges();

            return Ok(country);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CountryExists(string id)
        {
            return db.countries.Count(e => e.CountryName == id) > 0;
        }
    }
}