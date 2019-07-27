import React from 'react';



class Employee extends React.Component{
  constructor(props){
  	super(props)
  	this.state={
  		emp:{
  			eName:'',
  			eDesignation:'',
  			eDepartment:'',
  			eRole:'',
  			eGender:'',
  		}
  	}
  }
  	handleChange=event=>{
  		let emp=this.state.emp
  		const{name,value}=event.target
  		emp[name]=value
  			this.setState({
  				emp
  			})
  	}

  		handleSubmit=event=>{
  			event.preventDefault();
  			localStorage.setItem("Emp",JSON.stringify(this.state.emp))
  			this.props.history.push('/aboutus')
  		}
  		

  render(){
  	
  		const{emp}=this.state
    return(
          <div>
              <div><h1>Please Enter Registration Details:</h1></div>
              <div>
              		{localStorage.getItem("Login")?

              	<form onSubmit={this.handleSubmit}>
              	
              		<div>
              			<label>Employee Name:</label>
              			<input name="eName"
              				   defaultValue={emp.eName}
              			       onChange={this.handleChange}/>
              		</div>
              			<div>
              			<label>Designation:</label>
              			<input name="eDesignation"
              				   defaultValue={emp.eDesignation}
              			       onChange={this.handleChange}/>
              		</div>
              			
              			<div>
              			<label>Department:</label>
              			<input name="eDepartment"
              				   defaultValue={emp.eDepartment}
              			       onChange={this.handleChange}/>
              		</div>
              			<div>
              			<label>Role:</label>
              			<input name="eRole"
              			       defaultValue={emp.eRole}
              			       onChange={this.handleChange}/>
              		</div>
              			<div>
              			<label>Gender:</label>
              			<input type="radio"
              			       name="eGender"
              			       value="male"
              			       checked={this.state.emp['eGender']==='male'?true:false}
              			       onChange={this.handleChange}/> <label>Male</label>
              			<input type="radio"
              			       name="eGender"
              			       value="female"
              			       checked={this.state.emp['eGender']==='female'?true:false}
              			       onChange={this.handleChange}/> <label>Female</label>
              		</div> 
              			<button>Register</button>
              	</form>
              		:<div>Please Login</div>
              	  }
              	  
              </div>
          </div>
      )
  }
}
export default Employee;
