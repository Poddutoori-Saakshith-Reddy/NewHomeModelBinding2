using System.Diagnostics;
using Burbank.Repositories2.Abstract;
using Microsoft.AspNetCore.Mvc;
using NewHomeModelBinding2.Models;

namespace NewHomeModelBinding2.Controllers
{
    public class HomeController : Controller
    {
        private readonly INewHomeRepository _newhomerepositorydata;
        public HomeController(INewHomeRepository newhomerepositorydata)
        {
            _newhomerepositorydata = newhomerepositorydata;
        }

        public IActionResult Index()
        {
            var newHomesList = _newhomerepositorydata.GetAllNewHomesData();
            var groupedData = newHomesList.GroupBy(n => n.HouseName).Select(n => new NewHomesDTO
            {
                HouseName = n.Key,
                NewHomesList = n.ToList()
            }).ToList();
            return View(groupedData);
        }

        public IActionResult ChangeData(String HouseName, int HouseSize)
        {
            var newHomesList = _newhomerepositorydata.GetAllNewHomesData();
            var newhomedata = newHomesList.FirstOrDefault(n => n.HouseName == HouseName && n.HouseSize == HouseSize);
            var dataChangeDTO = new DataChangeDTO
            {
                HouseName = newhomedata.HouseName,
                HouseSize = newhomedata.HouseSize,
                BedRooms = newhomedata.BedRooms,
                BathRooms = newhomedata.BathRooms,
                Storey = newhomedata.Storey,
                MinLotWidth = (int?)newhomedata.MinLotWidth,
                CarSpace = newhomedata.CarSpace
            };
            return Ok(dataChangeDTO);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
