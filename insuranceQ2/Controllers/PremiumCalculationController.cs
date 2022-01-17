using insuranceQ2.Models;
using insuranceQ2.Services;
using Microsoft.AspNetCore.Mvc;

namespace insuranceQ2.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class PremiumCalculationController : Controller
    {

        [HttpGet]
        public float GetPremium(int Age, int OccupationId, float CoverAmount)
        {
            //TODO: make method async?
            //TODO: validate age is positive.
            //TODO: validate cover_amount is positive.
            //TODO: the return validation for invalid occupation id.
            Occupation Occ = OccupationService.GetOccupation(OccupationId);
            if (Occ == null) return 0f;

            return PremiumService.GetPremiumAmount(Age, CoverAmount, Occ);
        }
    }
}
