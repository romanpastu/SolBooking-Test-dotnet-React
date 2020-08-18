using Microsoft.AspNetCore.Mvc;
using Hotels.Models;
using Hotels.Data;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

namespace Hotels.Controllers
{
    [Route("api/hotels")]
    [ApiController]
    public class HotelsController : ControllerBase
    {
        private readonly IHotelsRepo _repository;
        private readonly IMapper _mapper;
        public HotelsController(IHotelsRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        //GET api/hotels
        [HttpGet]
        public ActionResult<IEnumerable<Hotel>> GetAllHotels()
        {
            var commandItems = _repository.GetAllHotels();
            return Ok(_mapper.Map<IEnumerable<Hotel>>(commandItems));
        }

        //GET api/hotels/{id}
        [HttpGet("{id}",Name="GetHotelById")]
        public ActionResult<Hotel> GetHotelById(int id)
        {
            var hotelItem = _repository.GetHotelById(id);
            if(hotelItem != null)
            {
                return Ok(_mapper.Map<Hotel>(hotelItem));
            }
            return NotFound();
        }
    }
}