using System.ComponentModel.DataAnnotations;

public class UserDto
{
    public int Id { get; set; }

    [MaxLength(100)]
    public string Username { get; set; } = string.Empty;

    public List<CharacterDto> Characters { get; set; } = new();
}
