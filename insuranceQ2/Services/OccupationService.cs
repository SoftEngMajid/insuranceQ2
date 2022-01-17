using insuranceQ2.Models;
namespace insuranceQ2.Services
{
    public static class OccupationService
    {
        static List<OccupationRating> OccupationRatings { get; }
        static List<Occupation> Occupations { get; }

        static OccupationService()
        {
            OccupationRatings = new List<OccupationRating>
            {
                new OccupationRating { Id = 1 , Name = "Professional", RatingFactor = 1.0f },
                new OccupationRating { Id = 2 , Name = "White Collar", RatingFactor = 1.25f },
                new OccupationRating { Id = 3 , Name = "Light Manual", RatingFactor = 1.50f },
                new OccupationRating { Id = 4 , Name = "Heavy Manual", RatingFactor = 1.75f }
            };

            Occupations = new List<Occupation>
            {
                new Occupation { Id = 1 , Name = "Cleaner", Rating = GetOccupationRating(3)},
                new Occupation { Id = 2 , Name = "Doctor", Rating = GetOccupationRating(1)},
                new Occupation { Id = 3 , Name = "Author", Rating = GetOccupationRating(2)},
                new Occupation { Id = 4 , Name = "Farmer", Rating = GetOccupationRating(4)},
                new Occupation { Id = 5 , Name = "Mechanic", Rating = GetOccupationRating(4)},
                new Occupation { Id = 6 , Name = "Florist", Rating = GetOccupationRating(3)}
            };
        }

        public static OccupationRating? GetOccupationRating(int id) => OccupationRatings.FirstOrDefault(r => r.Id == id);
        public static Occupation? GetOccupation(int id) => Occupations.FirstOrDefault(o => o.Id == id);
        public static List<Occupation> GetAllOccupations() => Occupations;
    }
}
