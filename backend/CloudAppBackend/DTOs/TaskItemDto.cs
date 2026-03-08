using System.ComponentModel.DataAnnotations;

namespace CloudAppBackend.DTOs
{
    public class TaskItemDto
    {
        [Required]
        [MinLength(3)]
        public string Title { get; set; } = string.Empty;

        public string? Description { get; set; }

        public bool IsDone { get; set; }
    }
}