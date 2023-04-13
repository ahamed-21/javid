import React from "react";

export default class Marksheet extends React.Component
{
   constructor()
   {
    
    super();
    this.state = {m1:'',m2:'',m3:'',m4:'',m5:'',res:''}
    this.mark1 = this.mark1.bind(this); 
    this.mark2 = this.mark2.bind(this);   
    this.mark3 = this.mark3.bind(this);   
    this.mark4 = this.mark4.bind(this);   
    this.mark5 = this.mark5.bind(this);   
    this.calcmarks = this.calcmarks.bind(this);
   }
   mark1(event)
   {
       this.setState({m1:event.target.value});
   }
   mark2(event)
   {
       this.setState({m2:event.target.value});
   }
   mark3(event)
   {
       this.setState({m3:event.target.value});
   }
   mark4(event)
   {
       this.setState({m4:event.target.value});
   }
   mark5(event)
   {
       this.setState({m5:event.target.value});
   }
  calcmarks(event)
  {
    var { m1,m2,m3,m4,m5,res} = this.state;
    var c=0;
    var s="";
    var m1 = parseInt(m1);
    var m2 = parseInt(m2);
    var m3 = parseInt(m3);
    var m4 = parseInt(m4);
    var m5 = parseInt(m5);
    if((m1>=0 && m1<=100) && (m2>=0 && m2<=100) && (m3>=0 && m3<=100) && (m4>=0 && m4<=100) && (m5>=0 && m5<=100))
    {
          if(m1<33)
          c++;
          if(m2<33)
          c++;
          if(m3<33)
          c++;
          if(m4<33)
          c++;
          if(m5<33)
          c++;

          if(c===0)
          {
             var per = (m1+m2+m3+m4+m5)/5;
            s = 'Avg. is '+per+ " %";
          }
          else{
              s= "FAIL";
          }
      this.setState({res:" "+s})
    }
    else
    {
        this.setState({res:"Entered Marks is Invalid"})
    }
    event.preventDefault();
  }
   render()
   {
   
    return(
      
       <form onSubmit={this.calcmarks}>  
            <h1>Marksheet</h1>  
            <p>Mark1 :  
                <input type="text" onChange={this.mark1}  />  
            </p>  
            <p>Mark2 :  
                <input type="text" onChange={this.mark2}   />  
            </p>  
            <p>Mark3 :  
                <input type="text" onChange={this.mark3}   />  
            </p>
            <p>Mark4 :  
                <input type="text" onChange={this.mark4}   />  
            </p>
            <p>Mark5 :  
                <input type="text" onChange={this.mark5}   />  
            </p>
            <p>
            <input type="submit" value="Calculate Marks" /> 
            </p>
            <p> {this.state.res}</p>

        </form>
       )
   } 

}