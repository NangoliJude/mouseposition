import React, { Component } from 'react';


const styles={ height: "100vh", width: "100vw", padding: "30px"}
class Position extends Component{
    constructor(props){
        super(props)
        this.state = { 
            x: null,
             y:null
            }
            this.mouseMovement = this.mouseMovement.bind(this)
    }
    mouseMovement(event){
        this.setState({x:event.clientX, y:event.clientY})
    }
    render(){
        const {x,y} = this.state;
        return(
            <div styles={styles}onMouseMove={this.mouseMovement}>
                <p>Postion is x: {x} Position y is: {y} </p>
            </div>
        )
    }
}

export default Position;
