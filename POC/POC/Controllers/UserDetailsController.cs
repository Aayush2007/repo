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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserDetailsController : ApiController
    {
        private ContextClass db = new ContextClass();

        // GET: api/UserDetails
        public IQueryable<UserDetails> Getdetails()
        {
            return db.details;
        }

        // GET: api/UserDetails/5
        [ResponseType(typeof(UserDetails))]
        public IHttpActionResult GetUserDetails(int id)
        {
            UserDetails userDetails = db.details.Find(id);
            if (userDetails == null)
            {
                return NotFound();
            }

            return Ok(userDetails);
        }

        // PUT: api/UserDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserDetails(int id, UserDetails userDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userDetails.Id)
            {
                return BadRequest();
            }

            db.Entry(userDetails).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserDetailsExists(id))
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

        // POST: api/UserDetails
        [ResponseType(typeof(UserDetails))]
        public IHttpActionResult PostUserDetails(UserDetails userDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.details.Add(userDetails);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = userDetails.Id }, userDetails);
        }

        // DELETE: api/UserDetails/5
        [ResponseType(typeof(UserDetails))]
        [Route("api/deleteuser")]
        public IHttpActionResult DeleteUserDetails(string userName)
        {
            UserDetails userDetails = db.details.Find(userName);
            if (userDetails == null)
            {
                return NotFound();
            }

            db.details.Remove(userDetails);
            db.SaveChanges();

            return Ok(userDetails);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserDetailsExists(int id)
        {
            return db.details.Count(e => e.Id == id) > 0;
        }
    }
}