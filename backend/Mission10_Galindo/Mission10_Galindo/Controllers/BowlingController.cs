using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10_Galindo.Models;

namespace Mission10_Galindo.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BowlingController : ControllerBase
{
    private BowlingLeagueContext _context;

    public BowlingController(BowlingLeagueContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetBowlers()
    {
        // Creates data to be loaded into API, filters by team
        var bowlers = _context.Bowlers
            .Include(b => b.Team)
            .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")
            .Select(b => new
            {
                b.BowlerFirstName,
                b.BowlerMiddleInit,
                b.BowlerLastName,
                TeamName = b.Team.TeamName,
                b.BowlerAddress,
                b.BowlerCity,
                b.BowlerState,
                b.BowlerZip,
                b.BowlerPhoneNumber
            })
            .ToList();

        return Ok(bowlers);
    }
}