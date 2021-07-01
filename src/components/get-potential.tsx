import { Component, h ,Prop} from '@stencil/core';


@Component({
  tag: 'get-potential',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://www.powerbooks.in/powerapi/api/PBXMLPotential/GetAllPBXMLPotential?cccD='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
            temp +="<tr>";
          temp +="<td><a href='index.html'>"+u.PotentialName+"</a></td>";
          temp +="<td>"+u.ClosingDate+"</td>";
          temp +="<td>"+u.AccountName+"</td>";
          // temp +="<td>"+u.Stage+"</td>";
          // temp +="<td>"+u.Type+"</td>";
          temp +="<td>"+u.ExpectedRevenue+"</td></tr> ";      
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
    
    <center><p><h3><b>POTENTIAL</b></h3></p></center>
    <div class="container" >
    {/* <table class="table">
    <thead> <tr>
    <th>Potential name</th>
            <th>Closing date</th>
            <th>Account name</th>
            <th>Stage</th>
            <th>Type</th>
            <th>Expected Revenue</th>
   </tr></thead>
   <tbody id="data">
  
   </tbody> 
 </table> */}
</div>
  </div>
</div>;
}
}