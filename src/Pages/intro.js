import React, {useEffect, useState} from "react"
import Card from './view'
import Listado from "./ListItems"
//import axios from "axios"


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
    
        return(
            <div>
                
            {/*<div>
              <input id="inputSearch" placeholder="Buscar"/>
              <button><img id="imgSearch" src="search_icon.png"/></button>
        </div> */}    
            <div >
                 {
                    (typeof data.stores === 'undefined') ? (<p>Cargando...</p>)
                      : (data.stores.map((Item, i)=>{
                        return(
                            <div className="box-content" key={i}>
                                <Card name={Item.name}/>
                                <Listado item={Item.item}/>
                            </div>
                            )
                        }))
                }
            </div>                    
                
            </div>
        );
    }


export default ViewData;