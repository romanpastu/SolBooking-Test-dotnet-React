using System.Collections.Generic;
using Hotels.Models;

namespace Hotels.Data
{
    public interface IHotelsRepo
    {
        bool SaveChanges();
        IEnumerable<Hotel> GetAllHotels();
        Hotel GetHotelById(string name);
        void UpdateHotel(Hotel cmd);
    }
}