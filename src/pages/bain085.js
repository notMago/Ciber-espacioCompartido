import React,{Fragment, useState, useEffect} from 'react';
import SideBar  from "../components/SideBar";


const bain085 =()=> {
    const [equipo, setEquipo] = useState([]);

    useEffect(()=>{
        obtenerDatos()
    }, [])

    const obtenerDatos = async () =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        setEquipo(users)
    }

    return(
        <Fragment>
        <SideBar/>
        <ul>
            {
                equipo.map(item => (
                    <li key={item.id}>{item.name} - {item.email}</li>
                )

                )
            }
        </ul>
        </Fragment>
    )
}
export default bain085;