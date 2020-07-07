import  { useEffect, useState } from 'react';
import axios from 'axios';




  export const Fetch = () =>{


    const [globalData, setGlobalData] = useState({});
    const [dailyData, setDailyData] =  useState({})
    
    useEffect(()=> {
      
      const url = `https://covid19.mathdro.id/api` ; 
      
      async function covid ()  {
    
        const {data: {confirmed, recovered, deaths}} = await axios.get(url);
        const data =  {confirmed:confirmed.value, recovered:recovered.value, deaths:deaths.value}
        //console.log(data);
        setGlobalData(data);


        const fetchApi = await axios.get(`${url}/daily`);
        const forCharts = await fetchApi.data;
        setDailyData(forCharts);
       
        //console.log(forCharts);
        
      }
           
      covid();
      
    },[setGlobalData]);


    return {globalData, dailyData};
        

  }