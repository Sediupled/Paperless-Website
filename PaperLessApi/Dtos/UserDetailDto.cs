using System.ComponentModel.DataAnnotations;

public class UserDetailDto
{
    public int Id { get; set; }

    [MaxLength(100)]
    public string Username { get; set; } = string.Empty;

    public List<CharacterDetailDto>? Characters { get; set; }
}
