using System.ComponentModel.DataAnnotations;

public class User
{
    public int Id { get; set; }

    [MaxLength(100)]
    public string Username { get; set; } = string.Empty;

    [MaxLength(100)]
    public string PasswordHash { get; set; } = string.Empty;

    public List<Character> Characters { get; set; } = new();
}
