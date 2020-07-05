import  { useEffect, useState } from 'react';
import axios from 'axios';




  export const Fetch = () =>{


  const [globalData, setGlobalData] = useState({});
  //const [countries, setCountries] = useState();

  //console.log(global);

  useEffect(()=> {
    
      
      async function covid ()  {
    
        const {data: {confirmed, recovered, deaths}} = await axios.get(`https://covid19.mathdro.id/api`);
        const data =  {confirmed:confirmed.value, recovered:recovered.value, deaths:deaths.value}
        console.log(data);
        setGlobalData(data);
        
      }
           
      covid();
      
    },[setGlobalData]);

//console.log(globalData.confirmed);

    return {globalData};
        

  }