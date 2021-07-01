import { Component, h,Prop} from '@stencil/core';


@Component({
  tag: 'get-budget',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://www.powerbooks.in/powerapi/api/PBXMLBudget/GetAllPBXMLBudget?cccd='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=# >" +u.NAME+ "</a></td>";
           temp +="<td>"+u.PARENT+"</td>";
           temp +="<td>"+u.USEACTUALS+"</td>";
           temp +="<td>"+u.EXCLUDEFOREX+"</td>";
          //  temp +="<td>"+u.EXCLUDETRACKING+"</td>";
          //  temp +="<td>"+u.ISSCENARIO+"</td></tr>";        
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
    
    <center><p><h3><b> BUDGETS</b></h3></p></center>
    <div class="container" >
{/* <table class="table">

    <tr>
      <th>LIST OF BUDGETS</th>
      <th>UNDER</th>
      <th>USE ACTUAL</th>
      <th>EXCLUDE FOREX</th>
      <th>EXCLUDE TRACKING</th>
      <th>IS SCENARIO</th>
    </tr>
  <tbody id="data">
  </tbody> 
</table> */}
</div>
  </div>
</div>;
}
}