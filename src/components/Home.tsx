import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import {Iprops} from '../Interfacses'



const Home:React.FC = () => {

    const [data, setData] = useState<Iprops[]>([]);
    console.log(data,"data")

    useEffect(() => {
      getData()
    },[]);
  
    // calling APi
    const getData=()=>{
        axios.get("https://reqres.in/api/users/"
      )
        .then(res => setData(res.data.data))
        .catch(e => console.log(e, "error"));
    };
    
   
  
    return (
      <div className="home">

        <div className="main">
          {data &&
            data.map((item : Iprops,index:number) => {
              return <Card key={index} item = {item} />;
            })}
        </div>
       
      </div>
    );
}

export default Home
