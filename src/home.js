import React from 'react';


class Home extends React.Component{
	constructor(props){
  	super(props)
  	this.state={
  			login:localStorage.getItem("Login")?true:false,
  			username:'',
  	}
  } 

  	LoginButton=()=>{
  		if(this.state.login){
  			return(
  				<button onClick={this.handleLogin}>LogOut</button>
  				)
  		}else{
  			return(
  			<div>
  				<div>
  					<label>Username</label>
  					<input name="username"
  					       onChange={this.handleChange}/>
  				</div>
  					<div>
  					<label>Password</label>
  					<input name="password"
  					       onChange={this.handleChange}/>
  				</div>
  				<button onClick={this.handleLogin}>LogIn</button>
  			</div>)
  			
  		}
  	}
  	  	handleChange=event=>{
  	  		const{name,value}=this.state
  	  		this.setState({
  	  			username:name==='username'?value:null
  	  		})
  	    }
  	

  	handleLogin=event=>{
  		let login=this.state.login
  		this.setState({
  			login:login?false:true},()=>this.ClearLocalStorage(this.state.login))

  	}
  	ClearLocalStorage=login=>{
  		localStorage.setItem("Login",login)
  		if(!login){
  			localStorage.clear()
  		}
  	}

  render(){
    return(
          <div>
              {this.LoginButton()}
              {this.state.login?
              	<div>greetings{this.state.username}</div>
              	:null
              }
          </div>
      )
  }
}
export default Home;
