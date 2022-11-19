import {Gender,Country,MedalType} from './Enums';

export interface Medalist
{
    medalistId: number;
    name: string;
    gender: Gender;
    country: Country;
    olympicGames: OlympicGames;
    medalType: MedalType;
}

export interface OlympicGames
{    
    name: string; 
    country: Country;
    yearHeld: string;
}
