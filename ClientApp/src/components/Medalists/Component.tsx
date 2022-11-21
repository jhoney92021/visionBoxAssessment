import React, { Component } from 'react';
import { Country, Gender, MedalType } from './Enums.ts';
import { Medalist } from './Types.ts';

export default function MedalistComponent(medalist: Medalist) {
    console.log(`fasfjaskfak;jadf;lkjasdflkjaf ${medalist.name}`)
    return (
        <tr key={medalist.medalistId}>
        <td>{medalist.name}</td>
        <td>{Gender[medalist.gender]}</td>
        <td>{Country[medalist.country]}</td>
        <td>{medalist.olympicGames.name}</td>
        <td>{MedalType[medalist.medalType]}</td>
      </tr>
    );
}
