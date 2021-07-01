import { Component, h,Prop } from '@stencil/core';


@Component({
  tag: 'get-units',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://powerbooks.in/powerapi/api/PBXMLUnit/GetAllPBXMLUnit?cccd='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=addmunits.html>"+u.NAME+"</a></td>";
           temp +="<td>"+u.UNIT+"</td>";
        
           temp +="<td>"+u.ORIGINALNAME+"</td>";
          //  temp +="<td>"+u.DECIMALPLACES+"</td>";
           temp +="</tr>";      
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
    
    <center><p><h3><b> MEASURE OF UNITS </b></h3></p>
   
   
    </center>
    <div class="container" >

</div>
  </div>
</div>;
}
}