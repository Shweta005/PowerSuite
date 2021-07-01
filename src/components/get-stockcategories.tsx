import { Component, h,Prop } from '@stencil/core';


@Component({
  tag: 'get-stockcate',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://www.powerbooks.in/powerapi/api/PBXMLStockCategory/GetAllPBXMLStockCategories?cccd='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=addstkcat.html>"+u.STOCKCATEGORY+"</td>";
           temp +="<td>"+u.PARENT+"</td>";
               
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
    
    <center><p><h3><b>STOCK CATEGORY </b></h3></p>
   
   
    </center>
    <div class="container" >

</div>
  </div>
</div>;
}
}