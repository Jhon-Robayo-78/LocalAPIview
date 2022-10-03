import React from "react";

class Listado extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){

        return(
          <div className="ListadoContainer">
            {this.props.item.map((item, i)=>{
                return(
                    <div key={i}>
                        <li >{item.name}</li>
                        <li >{item.price}</li>
                    </div>
                )      
            })}
          </div> 
        )     
    }
} 



export default Listado;