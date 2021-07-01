import { Component, h ,Prop} from '@stencil/core';

@Component({
  tag: 'get-ccentre',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://powerbooks.in/PowerAPI/api/PBXMLCostCenter/GetAllPBXMLCostCenter?cccd='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=addcostc.html>"+u.COSTCENTRE+"</a></td>";
          //  temp +="<td>"+u.CATEGORY+"</td>";
           temp +="<td>"+u.PARENT+"</td>";
           temp +="<td>"+u.REVENUELEDFOROPBAL+"</td>";
          //  temp +="<td>"+u.FORJOBCOSTING+"</td>";
          //  temp +="<td>"+u.ISEMPLOYEEGROUP+"</td>";
           
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
    
    <center><p><h3><b>COST CENTRE </b></h3></p>
   
   
    </center>
    <div class="container" >

</div>
  </div>
</div>;
}
}