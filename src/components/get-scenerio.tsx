import { Component, h,Prop } from '@stencil/core';


@Component({
  tag: 'get-scenario',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://www.powerbooks.in/powerapi/api/PBXMLBudget/GetAllPBXMLBudgetScenario?cccd='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=addscen.html>"+u.NAME+"</a></td>";
           temp +="<td>"+u.USEACTUALS+"</td>";
           temp +="<td>"+u.EXCLUDEFOREX+"</td>";
           temp +="<td>"+u.EXCLUDETRACKING+"</td>";
           temp +="<td>"+u.ISSCENARIO+"</td></tr>";        
         })
         document.getElementById("data").innerHTML=temp;
       }
  })
   .catch(err =>  {
     console.log(err);
  });
   }
  
  render() {
    return <div> <div>
     <div>{this.ComponentWillLoad()}</div> 
    
    <center><p><h3><b>SCENERIOS </b></h3></p>
   
   
    </center>
    <div class="container" >

</div>
  </div>
</div>;
}
}