import React, { useEffect, useState } from 'react';
import axios from 'axios';




function Axi() {


    const incData = "Loading.....";
    let [data, setData] = useState(incData);

    //console.log(data);
    let cases = data; 

    console.log(cases);

    
    useEffect( () => {
        
        async function covid ()  {
            
            const response = await axios.get(`https://api.covid19api.com/summary`);
            
            console.log(response);
            
            let value =await response.data;
            let newValue =await value.Countries[126];
            
            setData(newValue);
        }
        covid();
    }, [setData]);
    

 
    return (
        


        
        <div>
            <h5 >Status: {cases=== incData ?  incData : "Complete"}</h5>
        <h2>Country:  {cases.Country}  </h2>
        <h2>Total Cases: {cases.TotalConfirmed}</h2>
        <h2>Total Recovered: {cases.TotalRecovered} </h2>
        <h2>Total Deaths: {cases.TotalDeaths} </h2>
        
        </div>
    )}

export default Axi;