import React, { Component } from 'react'
import Student from './components/Student';
import axios from 'axios';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      studentsList:[],
      username:'',
      email:'',
      id:'',
      showUpdate:false
    }
  }
  componentDidMount=()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/students-list`)
    .then(res=>{
      this.setState({studentsList:res.data});    
    })
  }
  handleDelete=(id)=>{
    let config={
      method:"DELETE",
      baseURL:process.env.REACT_APP_BACKEND_URL,
      url:`/delete-student/${id}`
    }
    axios(config).then(res=>{
      console.log(res.data);
    })

  }
  handleUsername=(e)=>{
    this.setState({username:e.target.value});
  }
  handleEmail=(e)=>{
    this.setState({email:e.target.value});
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    let config={
      method:"POST",
      baseURL:process.env.REACT_APP_BACKEND_URL,
      url:`/create-student`,
      data:{
        username:this.state.username,
        email:this.state.email
      }
    }
    axios(config).then(res=>{
      console.log(res.data)
      this.setState({
        studentsList:res.data
      })
    })
  }
  handleUpdate=(id,username,email)=>{
    this.setState({
      username:username,
      email:email,
      id:id,
      showUpdate:true
    })
  }
  handleUpdateForm=()=>{
    let config={
      method:"PUT",
      baseURL:process.env.REACT_APP_BACKEND_URL,
      url:`/update-student/${this.state.id}`,
      data:{
        username:this.state.username,
        email:this.state.email
      }
    }
    axios(config).then(res=>{
      this.setState({
        studentsList:res.data
      })
    });
  }
  render() {
    return (
      <div>
        {
          !this.state.showUpdate?<>
                  <form onSubmit={this.handleSubmit}>
          <input type="texts" placeholder="username" onChange={this.handleUsername}/>
          <input type="texts" placeholder="email" onChange={this.handleEmail}/>
          <input type="submit" value="create"/>
        </form>
          </>:
          // Update form
        <form onSubmit={this.handleUpdateForm}>
        <input 
              type="texts" 
              onChange={this.handleUsername}
              value={this.state.username}
              />
        <input 
                type="texts" 
                value={this.state.email}
                onChange={this.handleEmail}/>
        <input type="submit" value="update"/>
      </form>   
        }
        {
          this.state.studentsList.map(student=>{
            return <Student 
                            username={student.username}
                            email={student.email}
                            id={student._id}
                            handleDelete={this.handleDelete}
                            handleUpdate={this.handleUpdate}
                            />
          })
        }
      </div>
    )
  }
}

export default App
