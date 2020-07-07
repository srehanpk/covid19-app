import React, {useState,useContext} from 'react';
import {Line} from 'react-chartjs-2';
import { GlobalContext } from "./Context";




const Charts = () =>{
    const {dailyData} = useContext(GlobalContext);
    
    const [chartData, setChartData] = useState([]);
    
    async function api (){
        
        const fetch  = await dailyData;
        
        //console.log(fetch);
        
        // let recovered = await fetch.recovered;
        // let deaths    = await fetch.deaths;
        
        
        
        setChartData(fetch);
        //  setRecovered(recovered);
        //  setDeaths(deaths);
        
    }
    api();
    
//console.log(chartData);

const lineChart = (
    
    chartData[0] ? (
        <Line 
        data={{
            labels: chartData.map((date)=>date.reportDate),
            datasets:[{
                data: chartData.map((confirmed)=>confirmed.confirmed.total),
                label: "confirmed",
                borderColor: "blue",
                fill: true,
            }
            ,{
                data: chartData.map((deaths)=>deaths.deaths.total),
                label: "deaths",
                borderColor: "red",
                fill: true,
            }],

        }}
        />) : null
    );


    return (

        <div className="chart">
        {lineChart}
        </div>
    )


    


}

export default Charts;