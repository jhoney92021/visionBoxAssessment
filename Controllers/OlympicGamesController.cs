using Microsoft.AspNetCore.Mvc;
using VisionBox.Models;
using VisionBox.Models.Enums;

namespace VisionBox.Controllers;

[ApiController]
[Route("[controller]")]
public class OlympicGamesController : ControllerBase
{
    private static readonly OlympicGames[] OlympicGames = new OlympicGames[]
    {
        new OlympicGames
        {
            Name = "Sochi",
            CountryHeld = Country.Russia,
            YearHeld = "2014"
        }
        , new OlympicGames
        {
            Name = "Pyeongchang",
            CountryHeld = Country.Korea,
            YearHeld = "2018"
        }
        , new OlympicGames
        {
            Name = "Beijing",
            CountryHeld = Country.China,
            YearHeld = "2022"
        }
    };

    private static List<Medalist> MaleMedalists = new List<Medalist>
    {
        /*Sochi*/
        new Medalist
        {
            MedalistId = 1,
            Name = "Iouri Podladtchikov",
            Gender = Gender.Male,
            Country = Country.Switzerland,
            OlympicGames = OlympicGames[0],
            MedalType = MedalType.Gold
        }
        , new Medalist
        {
            MedalistId = 2,
            Name = "Ayumu Hirano",
            Gender = Gender.Male,
            Country = Country.Japan,
            OlympicGames = OlympicGames[0],
            MedalType = MedalType.Silver
        }
        , new Medalist
        {
            MedalistId = 3,
            Name = "Taku Hiraoka",
            Gender = Gender.Male,
            Country = Country.Japan,
            OlympicGames = OlympicGames[0],
            MedalType = MedalType.Bronze
        }
        /*Pyeongchang*/
        , new Medalist
        {
            MedalistId = 4,
            Name = "Shaun White",
            Gender = Gender.Male,
            Country = Country.Switzerland,
            OlympicGames = OlympicGames[1],
            MedalType = MedalType.Gold
        }
        , new Medalist
        {
            MedalistId = 5,
            Name = "Ayumu Hirano",
            Gender = Gender.Male,
            Country = Country.Japan,
            OlympicGames = OlympicGames[1],
            MedalType = MedalType.Silver
        }
        , new Medalist
        {
            MedalistId = 6,
            Name = "Scotty James",
            Gender = Gender.Male,
            Country = Country.Australia,
            OlympicGames = OlympicGames[1],
            MedalType = MedalType.Bronze
        }
        /*Beijing*/
        , new Medalist
        {
            MedalistId = 7,
            Name = "Ayumu Hirano",
            Gender = Gender.Male,
            Country = Country.Japan,
            OlympicGames = OlympicGames[2],
            MedalType = MedalType.Gold
        }
        , new Medalist
        {
            MedalistId = 8,
            Name = "Scotty James",
            Gender = Gender.Male,
            Country = Country.Australia,
            OlympicGames = OlympicGames[2],
            MedalType = MedalType.Silver
        }
        , new Medalist
        {
            MedalistId = 9,
            Name = "Jan Scherrer",
            Gender = Gender.Male,
            Country = Country.Switzerland,
            OlympicGames = OlympicGames[2],
            MedalType = MedalType.Bronze
        }
    };
    private static List<Medalist> FemaleMedalists = new List<Medalist>
    {
        /*Sochi*/
        new Medalist
        {
            MedalistId = 101,
            Name = "Kaitlyn Farrington",
            Gender = Gender.Female,
            Country = Country.USA,
            OlympicGames = OlympicGames[0],
            MedalType = MedalType.Gold
        }
        , new Medalist
        {
            MedalistId = 102,
            Name = "Torah Bright",
            Gender = Gender.Female,
            Country = Country.Australia,
            OlympicGames = OlympicGames[0],
            MedalType = MedalType.Silver
        }
        , new Medalist
        {
            MedalistId = 103,
            Name = "Kelly Clark",
            Gender = Gender.Female,
            Country = Country.USA,
            OlympicGames = OlympicGames[0],
            MedalType = MedalType.Bronze
        }
        /*Pyeongchang*/
        , new Medalist
        {
            MedalistId = 104,
            Name = "Chloe Kim",
            Gender = Gender.Female,
            Country = Country.USA,
            OlympicGames = OlympicGames[1],
            MedalType = MedalType.Gold
        }
        , new Medalist
        {
            MedalistId = 105,
            Name = "Liu Jiayu",
            Gender = Gender.Female,
            Country = Country.China,
            OlympicGames = OlympicGames[1],
            MedalType = MedalType.Silver
        }
        , new Medalist
        {
            MedalistId = 106,
            Name = "Arielle Gold",
            Gender = Gender.Female,
            Country = Country.USA,
            OlympicGames = OlympicGames[1],
            MedalType = MedalType.Bronze
        }
        /*Beijing*/
        , new Medalist
        {
            MedalistId = 107,
            Name = "Chloe Kim",
            Gender = Gender.Female,
            Country = Country.USA,
            OlympicGames = OlympicGames[2],
            MedalType = MedalType.Gold
        }
        , new Medalist
        {
            MedalistId = 108,
            Name = "Queralt Castellet",
            Gender = Gender.Female,
            Country = Country.Spain,
            OlympicGames = OlympicGames[2],
            MedalType = MedalType.Silver
        }
        , new Medalist
        {
            MedalistId = 109,
            Name = "Sena Tomita",
            Gender = Gender.Female,
            Country = Country.Japan,
            OlympicGames = OlympicGames[2],
            MedalType = MedalType.Bronze
        }
    };
    private readonly ILogger<WeatherForecastController> _logger;

    public OlympicGamesController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet("GetGames")]
    public IEnumerable<OlympicGames> GetGames()
    {
        return OlympicGames;
    }
    

    [HttpGet("GetMaleHalfpipeMedalists")]
    public IEnumerable<Medalist> GetMaleHalfpipeMedalists()
    {
        Console.WriteLine("fetching males");
        return MaleMedalists;        
    }

    [HttpGet("GetFemaleHalfpipeMedalists")]
    public IEnumerable<Medalist> GetFemaleHalfpipeMedalists(Gender gender)
    {
        Console.WriteLine("fetching females");
        return FemaleMedalists;
    }

}
