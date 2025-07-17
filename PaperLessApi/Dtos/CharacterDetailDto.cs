using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class CharacterDetailDto
{
    public int Id { get; set; }

    [MaxLength(100)]
    public string username { get; set; }

    [MaxLength(100)]
    public string? campaign { get; set; }

    [MaxLength(100)]
    public string? name { get; set; }

    [MaxLength(100)]
    public string? race { get; set; }

    [MaxLength(100)]
    public string? subRace { get; set; }

    [MaxLength(100)]
    public string? raceDesc { get; set; }

    [MaxLength(100)]
    public string? charClass { get; set; }

    public int healthBar { get; set; }

    public int wealth { get; set; }

    public int level { get; set; }

    [ForeignKey("User")]
    public int userId { get; set; }
}
