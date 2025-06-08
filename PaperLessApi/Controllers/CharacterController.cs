using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class CharacterController : ControllerBase
{
    public CharacterController()
    {
    }

    [HttpGet]
    public ActionResult<List<Character>> GetAll() =>
         CharacterService.GetAll();

    [HttpGet("{Id}")]
    public ActionResult<Character> Get(int Id)
    {
        var character = CharacterService.Get(Id);

        if (character == null)
            return NotFound();

        return character;
    }

    [HttpPost]
    public IActionResult Create(Character character)
    {
        if (character == null)
            return BadRequest();

        CharacterService.Add(character);
        return Ok(character);

    }
}
