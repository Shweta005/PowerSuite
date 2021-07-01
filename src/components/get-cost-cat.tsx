import { Component, h,Prop } from '@stencil/core';

@Component({
  tag: 'cost-cate',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://www.powerbooks.in/powerapi/api/PBXMLCostCategory/GetAllPBXMLCostCategories?cccd='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=addcostc.html>"+u.CostCatNm+"</a></td>";
           temp +="<td>"+u.AllocRevenue+"</td>";
           temp +="<td>"+u.AllocNonRevenue+"</td>";
               
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
    
    <center><p><h3><b>COST CATEGORY </b></h3></p>
   
   
    </center>
    <div class="container" >

</div>
  </div>
</div>;
}
}