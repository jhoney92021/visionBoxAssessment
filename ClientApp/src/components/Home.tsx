import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { Medalist } from './Medalists/Types';
import { Gender, Country, MedalType } from './Medalists/Enums.ts';

export default function Home() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => 
  {
    console.log(data);
    addMedalist(data);
  }

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

  const addMedalist = async (newMedalist: Medalist) => {
    console.log(`~~~ adding react.ts ${newMedalist} ~~~`);
    await fetch(
      'https://localhost:44452/olympicgames/NewMedalist'
      , {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
        , body: JSON.stringify(newMedalist)
      }
    )
      .then(async response => {
        const data = await response.json();
        if (data.length > 0) {
          console.log(`~~~ data ${data} ~~~`)
          if (newMedalist.gender === Gender.Male) {
            setMaleMedalistsLoaded(true);
            setMaleMedalists(data);

          }
          else {
            setFemaleMedalistsLoaded(true);
            setFemaleMedalists(data);
          }
        }
      });

  };

  const editMedalistName = async (medalistId: number, gender: Gender, newName: string) => {
    console.log(`~~~ posting name change ~~~`)
    const postBody = { 'medalistId': medalistId, 'gender': gender, 'newName': newName };
    console.log(`~~~ posting ${medalistId} ${gender} ${newName} ~~~`)
    await fetch(
      'https://localhost:44452/olympicgames/ChangeMedalistName'
      , {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
        , body: JSON.stringify(postBody)
      }
    )
      .then(async response => {
        const data = await response.json();
        if (data.length > 0) {
          console.log(`~~~ data ${data} ~~~`)
          setMaleMedalistsLoaded(true);
          setMaleMedalists(data);
        }
      });
  };

  const mapMedalist = (medalist: Medalist) => {
    return (
      <tr key={medalist.medalistId}>
        <td><div contentEditable onInput={() => { console.log("gonna change the name"); editMedalistName(medalist.medalistId, medalist.gender, this.value); }}>{medalist.name}</div></td>
        <td><div contentEditable onInput={() => { console.log("gonna change the gender") }}>{Gender[medalist.gender]}</div></td>
        <td><div contentEditable onInput={() => { console.log("gonna change the country") }}>{Country[medalist.country]}</div></td>
        <td><div contentEditable onInput={() => { console.log("gonna change the olypmic game name") }}>{medalist.olympicGames.name}</div></td>
        <td><div contentEditable onInput={() => { console.log("gonna change the medal type") }}>{MedalType[medalist.medalType]}</div></td>
      </tr>
    );
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
            {maleMedalists.length < 1
              ?
              <>
                <h1>Loading Male Medalists ...</h1>
              </>
              :
              maleMedalists.map((medalist: Medalist) => {
                return (
                  mapMedalist(medalist)
                );
              })
            }
            <br />
            {femaleMedalists.length < 1
              ?
              <>
                <h1>Loading Female Medalists ...</h1>
              </>
              :
              femaleMedalists.map((medalist: Medalist) => {
                return (
                  mapMedalist(medalist)
                );
              })
            }
          </>
        </tbody>
      </table>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} placeholder="a new medalist name" />

        <select {...register("gender", { required: true })}>
          <option value="Female">Female</option>
          <option value="Male">Male</option>          
        </select>

        <input {...register("country", { required: true })} placeholder="country" />

        <select {...register("olympicGames", { required: true })}>
          <option value="Sochi">Sochi</option>
          <option value="Pyeongchang">Pyeongchang</option>
          <option value="Beijing">Beijing</option>
          <option value="Milan">Milan</option>
        </select>

        <select {...register("medalType", { required: true })}>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Bronze">Bronze</option>
        </select>        

        <input type="submit" value="Add new medalist" />
      </form>
    </div>
  );

}
