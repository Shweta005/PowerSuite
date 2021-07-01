import { Component, h,Prop } from '@stencil/core';


@Component({
  tag: 'get-product',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://www.powerbooks.in/PowerAPI/api/PBItems/GetAllItems?cccD='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
            temp +="<tr>"
        
            temp +="<td><a href=#>"+u.cccd+"</a></td>";
            temp +="<td>"+u.ItGr+"</td>";
            temp +="<td>"+u.Parent+"</td></tr>";      
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
    
    <center><p><h3><b>PRODUCT</b></h3></p></center>
    <div class="container" >
    {/* <table class="table">
    <thead> <tr>
            <th>Status</th>
            <th>Itemgroup</th>
            <th>under</th>

   </tr></thead>
   <tbody id="data">
  
   </tbody> 
 </table> */}
</div>
  </div>
</div>;
}
}