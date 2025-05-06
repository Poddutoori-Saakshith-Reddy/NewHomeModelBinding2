using Burbank.Infrastructure2.Entities;

namespace NewHomeModelBinding2.Models
{
    public class DataChangeDTO
    {
        public int? HouseSize { get; set; }
        public string? HouseName { get; set; }
        public int? BedRooms { get; set; }
        public int? BathRooms { get; set; }
        public int? Storey { get; set; }
        public int? MinLotWidth { get; set; }
        public int? CarSpace { get; set; }
    }
}
