import React from 'react'

class Cart extends React.Component{
    constructor(props){
        super(props)
    
        
    }
    
    
    render(){
        //const {name,item} = this.props;
        const {name} = this.props
        return(<p>-{name} </p>)
    }
}
export default Cart