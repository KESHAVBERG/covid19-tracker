import React, { useEffect, useState } from 'react'
import {getDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2';
import styles from './chart.module.css'
// 
const Charts = ({data:{confirmed,recovered,deaths},country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {

        const fectchDailyData = async () => {
            setDailyData(await getDailyData());

        }

        fectchDailyData();
    },[]);
    const lineChart = (
        dailyData.length ?(<Line 
            data = {{
               labels:dailyData.map(({date})=>date),
               datasets:[
                   {
                   data:dailyData.map(({confirmed})=>confirmed),
                   label:"infected",
                   borderColor:"blue",
                   fill:true
               },{
                data:dailyData.map(({deaths})=>deaths),
                   label:"deaths",
                   borderColor:"red",
                   fill:true
               }]
            }}
        />):null
    );
    // console.log(data.confirmed.value,data.deaths.value,data.recovered.value)


    const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  backgroundColor: ['rgb(128,0,0)','rgb(0,255,0)','rgb(0,0,255)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
            
              legend:{display:false},
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );


    return (
       <div className={styles.container}>
      {country ? barChart : lineChart}

       </div>
    )
}

export default Charts;