using System;
using System.Collections.Generic;
using System.Linq;
using Hotels.Models;


namespace Hotels.Data
{
    public class SqlHotelsRepo : IHotelsRepo
    {
        private readonly HotelsContext _context;

        public SqlHotelsRepo(HotelsContext context)
        {
            _context = context;
        }

        public IEnumerable<Hotel> GetAllHotels(){
            return _context.Hotels.ToList();
        }

        public Hotel GetHotelById(int id)
        {
            return _context.Hotels.FirstOrDefault(p => p.Id == id);
        }
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0 );
        }
        public void UpdateHotel(Hotel hotel)
        {
            //Nothing
        }
    }
}