using AutoMapper;
using Hotels.Dtos;
using Hotels.Models;

namespace Hotels.Profiles
{
    public class HotelsProfile : Profile
    {
        public HotelsProfile()
        //Source --> Target
        {   
            CreateMap<Hotel, HotelReadDto>();
            CreateMap<Hotel, HotelsReadDto>();
        }
    }
}