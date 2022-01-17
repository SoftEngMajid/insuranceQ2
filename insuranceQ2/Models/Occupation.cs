namespace insuranceQ2.Models
{   
    
    //store Occupation information 
    public class Occupation
    {
            public int Id { get; set; }
            public string Name { get; set; }
            public OccupationRating Rating { get; set; }
    }
}
