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
using POC.Models;

namespace POC.Controllers
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
        public IHttpActionResult GetCountry(int id)
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
        public IHttpActionResult PutCountry(int id, Country country)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != country.Id)
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

        //// POST: api/Countries
        //[ResponseType(typeof(Country))]
        //public IHttpActionResult PostCountry(Country country)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.countries.Add(country);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = country.Id }, country);
        //}

        //// DELETE: api/Countries/5
        //[ResponseType(typeof(Country))]
        //public IHttpActionResult DeleteCountry(int id)
        //{
        //    Country country = db.countries.Find(id);
        //    if (country == null)
        //    {
        //        return NotFound();
        //    }

        //    db.countries.Remove(country);
        //    db.SaveChanges();

        //    return Ok(country);
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CountryExists(int id)
        {
            return db.countries.Count(e => e.Id == id) > 0;
        }
    }
}