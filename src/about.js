import React from 'react';


class About extends React.Component{
constructor(props){
  	super(props)
  	this.state={
  			activeItem:'home',
  			Emp:localStorage.getItem("Emp")?
  			JSON.parse(localStorage.getItem("Emp")):{
  				eName:'',
	  			eDesignation:'',
	  			eDepartment:'',
	  			eRole:'',
	  			eGender:'',
  			}
  		  }
       }
  

  render(){
  		const{Emp}=this.state;
    return(
          <div>
          	    <div>
          	       {localStorage.getItem("Login")?
          	       	
	          	   <div>
	          	       <div>Employee Name={Emp.eName}</div>
	          	    
	               	   <div>Employee Designation={Emp.eDesignation}</div>
	                
		               <div>Employee Department={Emp.eDepartment}</div>
		            
		               <div>Employee Role={Emp.eRole}</div>
		            
		               <div>Employee Gender={Emp.eGender}</div>
		             </div>

          	   :
          	   <div>Please Login..</div>

          	  }
          	  </div>
              
          </div>
      )
  }
}
export default About;
