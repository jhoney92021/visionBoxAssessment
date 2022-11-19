import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Medalist } from './Medalists/Types';
import { Gender,Country,MedalType } from './Medalists/Enums';

export default function Home() {

  const [maleMedalists, setMaleMedalists] = useState([]);
  const [maleMedalistsLoaded, setMaleMedalistsLoaded] = useState(false);
  const [femaleMedalists, setFemaleMedalists] = useState([]);
  const [femaleMedalistsLoaded, setFemaleMedalistsLoaded] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  const getMaleMedalists = async () => {
    console.log(`~~~ fetching males ~~~`)
    await fetch('https://localhost:44452/olympicgames/GetMaleHalfpipeMedalists')
      .then(async response => {
        const data = await response.json();
        if (data.length > 0) {
          console.log(`~~~ data ${data} ~~~`)
          setMaleMedalistsLoaded(true);
          setMaleMedalists(data);
        }
      });
  };

  const getFemaleMedalists = async () => {
    console.log(`~~~ fetching females ~~~`)
    await fetch('https://localhost:44452/olympicgames/GetFemaleHalfpipeMedalists')
      .then(async response => {
        const data = await response.json();
        if (data.length > 0) {
          console.log(`~~~ data ${data} ~~~`)
          setFemaleMedalistsLoaded(true);
          setFemaleMedalists(data);
        }
      });
  };


  useEffect(async () => {
    await getMaleMedalists();
    await getFemaleMedalists();
    setPageLoaded(maleMedalistsLoaded && femaleMedalistsLoaded);
  }, [pageLoaded]);

  return (
    <div>
      <h1>Halfpipe Medalists</h1>
      <table>
        <thead>
          <tr>
            <th>Medalist Name</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Game</th>
            <th>MedalType</th>
          </tr>
        </thead>
        <tbody>

          <>
            <h2>Male Medalists</h2>
            {maleMedalists.length < 1
              ?
              <>
                <h1>Loading Male Medalists ...</h1>
              </>
              :
              maleMedalists.map((medalist: Medalist) => {
                return (
                  <tr key={medalist.medalistId}>
                    <td>{medalist.name}</td>
                    <td>{medalist.gender}</td>
                    <td>{medalist.country}</td>
                    <td>{medalist.olympicGames.name}</td>
                    <td>{medalist.medalType}</td>
                  </tr>
                );
              })
            }
          </>
          <>
            <h2>Female Medalists</h2>
            {femaleMedalists.length < 1
              ?
              <>
                <h1>Loading Female Medalists ...</h1>
              </>
              :
              femaleMedalists.map((medalist: Medalist) => {
                return (
                  <tr key={medalist.medalistId}>
                    <td>{medalist.name}</td>
                    <td>{medalist.gender}</td>
                    <td>{medalist.country}</td>
                    <td>{medalist.olympicGames.name}</td>
                    <td>{medalist.medalType}</td>
                  </tr>
                );
              })
            }
          </>
        </tbody>
      </table>
    </div>
  );

}
