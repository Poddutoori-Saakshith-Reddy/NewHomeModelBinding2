using Burbank.Infrastructure2.Entities;

namespace NewHomeModelBinding2.Models
{
    public class NewHomesDTO
    {
        public string HouseName { get; set; }
        public List<BurbankNewHome> NewHomesList { get; set; }
    }
}
