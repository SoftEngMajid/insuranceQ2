using insuranceQ2.Models;

namespace insuranceQ2.Services
{
    public static class PremiumService
    {
        // Returns premium amount calculated as per formulat
        // premium_amount = (cover_amount * occupation_rating_factor * age) / 1000 * 12
        public static float GetPremiumAmount(int Age, float CoverAmount, Occupation Occ)
        {
            return (CoverAmount * Occ.Rating.RatingFactor * Age) / 1000f * 12f;
        }
    }
}
