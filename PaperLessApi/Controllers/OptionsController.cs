using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class OptionsController : ControllerBase
{
    [HttpGet("races")]
    public IActionResult GetRace()
    {
        var Races = new List<string> { "Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling" };
        return Ok(Races);

    }

    [HttpGet("{race}/subRaces")]
    public IActionResult GetSubRace(string race)
    {
        var subRaces = OptionsService.sendSubrace(race);
        return Ok(subRaces);

    }

    [HttpGet("{race}/{subRace}/raceDesc")]
    public IActionResult GetRaceDesc(string race, string subRace)
    {
        var RaceDesc = OptionsService.sendRaceDesc(race, subRace);
        return Ok(new { description = RaceDesc });

    }

    [HttpGet("classes")]
    public IActionResult GetClasses()
    {
        var Classes = new List<string> { "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer" };
        return Ok(Classes);

    }
}
