import React, {useEffect, useState} from "react"
import Card from './view'
import Listado from "./ListItems"
import axios from "axios"


function ViewData(){
    
    const [data, setData] = useState([{}])

    useEffect(()=>{
        fetch('/store').then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    },[])

   /*async componentDidMount(){
        
        const res = await axios.get('http://127.0.0.1:5000/store')
        //const data = await res.json()
        //this.setState({done:true,store:res.stores})
        this.setState({done:true,store:e.stores})
    }*/
     

       
  
        
        
        return(
            <div>
                <form>
                  
                  <input placeholder="Buscar"/>
                 {
                    (typeof data.stores === 'undefined') ? (<p>Cargando...</p>)
                      : (data.stores.map((Item, i)=>{
                        return(
                            <div key={i}>
                                <Card name={Item.name}/>
                                <Listado item={Item.item}/>
                            </div>
                            )
                        }))
                }
                                
                </form>
            </div>
        );
    }


export default ViewData;