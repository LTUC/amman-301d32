import React, { Component } from 'react';
import Cat from './Cat';
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      catsList:[],
      owner:{
        ownerName:"yahia",
        email:"y@y.com"
      },
      catName:""

    }
  }
  componentDidMount=()=>{
    axios.get("http://localhost:8000/").then(res=>{
      this.setState({
        catsList:res.data
      })
    })
  }
  handleCatInput=e=>{
    
    this.setState({
      catName:e.target.value
    })
    console.log(this.state.catName)
  }
  handleSubmit=e=>{
    e.preventDefault();
    let config={
      method:"POST",
      baseURL:"http://localhost:8000",
      url:"/create-cat",
      data:{
        catName:this.state.catName,
        owner:this.state.owner
      }
      
    }
    axios(config).then(response=>{
      this.setState({
        catsList:response.data
      })
    })
  }
  handleDelete=(id)=>{
    let catId=id;
    let config={
        method:"DELETE",
        baseURL:"http://localhost:8000",
        url:`/delete-cat/${catId}`,

    }

    axios(config).then(response=>{
      this.setState({
        catsList:response.data
      })
    })
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="new cat name here" onChange={this.handleCatInput}/>
          <input type="submit" value="create cat"/>
        </form>
        {
          this.state.catsList.map(cat=>{
            return <Cat 
                      catName={cat.catName} 
                      owner={cat.owner} 
                      catId={cat._id}
                      handleDelete={this.handleDelete}
                      
                      />
          })
        }
      </div>
    )
  }
}

export default App
