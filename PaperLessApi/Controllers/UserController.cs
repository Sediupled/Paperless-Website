using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _db;

    public UserController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public IQueryable<UserDto> GetUsers()
    {
        var users =
            from u in _db.Users
            select new UserDto()
            {
                Id = u.Id,
                Username = u.Username,
                Characters = u
                    .Characters.Select(c => new CharacterDto
                    {
                        Id = c.Id,
                        username = c.username,
                        campaign = c.campaign,
                        name = c.name,
                        charClass = c.charClass,
                        healthBar = c.healthBar,
                        wealth = c.wealth,
                        level = c.level,
                        userId = c.userId,
                    })
                    .ToList(),
            };
        return users;
    }

    [HttpGet("{id}")]
    [ProducesResponseType(typeof(UserDetailDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<UserDetailDto>> GetUser(int id)
    {
        var user = await _db
            .Users.Select(u => new UserDetailDto
            {
                Username = u.Username,
                Characters = u
                    .Characters.Select(c => new CharacterDetailDto
                    {
                        Id = c.Id,
                        username = c.username,
                        campaign = c.campaign,
                        name = c.name,
                        race = c.race,
                        subRace = c.subRace,
                        raceDesc = c.raceDesc,
                        charClass = c.charClass,
                        healthBar = c.healthBar,
                        wealth = c.wealth,
                        level = c.level,
                        userId = c.userId,
                    })
                    .ToList(),
            })
            .SingleOrDefaultAsync(u => u.Id == id);

        if (user == null)
            return NotFound();

        return Ok(user);
    }

    // [HttpGet("raw/{id}")]
    // public ActionResult<User> GetRaw(int id)
    // {
    //     var user = UserService.Get(id);
    //     if (user == null)
    //         return NotFound();
    //
    //     return user;
    // }

    [HttpPost]
    public IActionResult Create(User user)
    {
        if (user == null)
            return BadRequest();

        try
        {
            _db.Users.Add(user);
            int changes = _db.SaveChanges();
            Console.WriteLine($"Changes made: {changes}");
            return Ok(user);
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error: " + ex.Message);
            Console.WriteLine(ex.InnerException?.Message ?? ex.Message);
            return StatusCode(500, ex.Message);
        }
    }
}
