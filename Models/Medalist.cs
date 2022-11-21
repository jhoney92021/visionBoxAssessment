using VisionBox.Models.Enums;

namespace VisionBox.Models;

public class Medalist
{ // start again 2 hour 40 mins left
    public int MedalistId {get;set;}
    public string Name {get;set;}
    public Gender Gender {get;set;}
    public Country Country {get;set;}
    public OlympicGames OlympicGames {get;set;}
    public MedalType MedalType {get;set;}

}