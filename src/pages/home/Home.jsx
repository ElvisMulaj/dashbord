import React from 'react'
import"./home.css";
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import Chart from '../../components/chart/Charts';


export default function Home() {
  return (
    <div className="home">
        <Featuredinfo/>
        <Chart/>
    </div>
  )
}
