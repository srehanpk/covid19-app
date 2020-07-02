import React, { useEffect, useState } from 'react';
import axios from 'axios';




export default function Fetch() {


    const incData = "Loading.....";
    let [data, setData] = useState(incData);
    

      // console.log(data);
      // console.log(country);

    
    
        
         async function covid ()  {
            
            const response = await axios.get(`https://api.covid19api.com/summary`);
            console.log(response);
            
            const value =await response.data//[0].Country;
             //console.log(value);
            
             
             const countryName = await value.Countries.map(values => {
                 return values.Country; });
                
                  //console.log(countryName);
                setData(value);
                setCountry(countryName);
        }
        // covid();
  
    

 
    return (

    <div>
    <h1>hello </h1>     
    </div>
        


        
    )}
