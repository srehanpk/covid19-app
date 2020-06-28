import React, {useState, useEffect} from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';


const Chart = () => {
    

    let [data, setData] = useState();
    console.log(data);
    let cases = data;
    
    
    const chartData = () => {
        
        setData({

            labels: ["Total Cases",
                     "Total Recovered", 
                     "Total Deaths"],
            
            datasets: [{
                label:"Covid-19 ",
                data: [950, 360, 250],
                backgroundColor: ['rgba(169, 69, 182)', 'blue', 'yellow'],
                borderWidth: 0
                
            }]
        })
    }
    
    
    console.log(cases);
    
    
    useEffect( () => {
        
        
        
        chartData();

    }, [setData]);
    
    return(
        
        <div>

       

<div className="chart" >

<Bar
  data={cases}
  width={100}
  height={100}
  options={{ 
      maintainAspectRatio: false, 
    responsive: true, 
    title: {text: "Global Situation",
            display: true, 
            fontSize:20, 
            fontColor: "aliceblue"
            }  }}
/>
<br/>
<Doughnut data={cases}
width={100}
height={100}
options={{ 
    maintainAspectRatio: false, 
    responsive: true,
    title: {text: "Global Situation",
    display: true, 
    fontSize:20, 
    fontColor: "aliceblue"
}  }}/>






</div>
</div>
    );}

export default Chart;