using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hotels.Models
{
    public class Hotel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string name { get; set; }

        [Required]
        public string city { get; set; }

        [Required]
        public string image { get; set; }
        [Required]
        public string description { get; set; }
        [Required]
        public string features { get; set; }
        public bool featured {get; set; }
    }
}