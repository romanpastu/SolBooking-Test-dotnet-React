
using Hotels.Models;
using Microsoft.EntityFrameworkCore;

namespace Hotels.Data
{
    public class HotelsContext : DbContext
    {
        public HotelsContext(DbContextOptions<HotelsContext> opt) : base(opt)
        {

        }

        public DbSet<Hotel> Hotels {get; set; }
    }
}