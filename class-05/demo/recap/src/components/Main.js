import { React, Component } from "react";
import data from "../data.json";
import Student from "./Student";
import Form from "./Form";

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            data:data
        }
    }
    handleChange=(e)=>{
        let selection=e.target.options[e.target.selectedIndex].text;

        let filteredData=[];

        if(e.target.value>0){
            filteredData=data.filter(student=>{

                return student.background.toLowerCase()===selection.toLowerCase()
            })
        }else{
            filteredData=data;
        }
        this.setState({
            data:filteredData
        })
    }

    render() {
        return (<>
            <Form handleChange={this.handleChange}/> 
            {this.state.data.map(student => {
                return <Student student_name={student.student_name} background={student.background} />
            })
            }
            
        </>)


    }
}

export default Main;