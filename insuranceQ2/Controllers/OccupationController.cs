using insuranceQ2.Models;
using insuranceQ2.Services;
using Microsoft.AspNetCore.Mvc;


namespace insuranceQ2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OccupationController
    {
        [HttpGet]
        public ActionResult<List<Occupation>> GetAll() => OccupationService.GetAllOccupations();
    }
}
