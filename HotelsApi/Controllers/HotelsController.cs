using Microsoft.AspNetCore.Mvc;
using Hotels.Models;
using Hotels.Data;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Hotels.Dtos;

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
        public ActionResult<IEnumerable<HotelsReadDto>> GetAllHotels()
        {
            var hotelItems = _repository.GetAllHotels();
            return Ok(_mapper.Map<IEnumerable<HotelsReadDto>>(hotelItems));
        }

        //GET api/hotels/{id}
        [HttpGet("{name}",Name="GetHotelById")]
        public ActionResult<HotelReadDto> GetHotelById(string name)
        {
            var hotelItem = _repository.GetHotelById(name);
            if(hotelItem != null)
            {
                return Ok(_mapper.Map<HotelReadDto>(hotelItem));
            }
            return NotFound();
        }

        //PATCH api/hotels/{id}
        [HttpPatch("{name}")]
        public ActionResult PartialCommandUpdate(string name, JsonPatchDocument<HotelUpdateDto> patchDoc)
        {
            var hotelModelFromRepo = _repository.GetHotelById(name);
            if(hotelModelFromRepo == null){
                return NotFound();
            }

            var hotelToPatch = _mapper.Map<HotelUpdateDto>(hotelModelFromRepo);

            patchDoc.ApplyTo(hotelToPatch, ModelState);
            if(!TryValidateModel(hotelToPatch))
            {
                return ValidationProblem(ModelState);
            }

            _mapper.Map(hotelToPatch, hotelModelFromRepo);
            _repository.UpdateHotel(hotelModelFromRepo);
            _repository.SaveChanges();

            return NoContent();
        }
    }
}