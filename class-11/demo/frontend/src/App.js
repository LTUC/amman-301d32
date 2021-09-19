import React, { Component } from 'react';
import Post from './components/Post';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  componentDidMount=()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(response=>{
      this.setState({
        data:response.data
      })
    })
  }
  render() {
    return (
      <>
      <h1>Data</h1>
        {
          this.state.data.map(post=>{
            return <Post title={post.title} body={post.body}/>
          })
        }
      </>
    )
  }
}

export default App
