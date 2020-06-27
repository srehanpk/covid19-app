import React, {useState, useEffect} from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';


const Chart = () => {
    

    let [data, setData] = useState();
    console.log(data);
    let cases = data;
    
    
    const chartData = () => {
        
        setData({

            labels: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
            
            datasets: [{
                labels:"Covid-19",
                data: [38, 58, 68, 78, 90, 95],
                backgroundColor: ['pink', 'pink', 'pink', 'pink', 'pink', 'pink',],
                borderWidth: 2
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
//   width={100}
//   height={100}
  options={{ 
      maintainAspectRatio: false, 
    responsive: true, 
    title: {text: "Global Situation", display: true}  }}
/>


</div>
</div>
    );}

export default Chart;