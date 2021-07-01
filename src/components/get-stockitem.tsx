import { Component, h ,Prop} from '@stencil/core';


@Component({
  tag: 'get-stockitem',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
     const url='http://www.powerbooks.in/powerapi/api/PBXMLStockItem/GetAllPBXMLStockItems?cccd='+this.cccd;
   console.log('Submitted Successfully!');
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=#>"+u.STOCKITEM+"</a></td>";
           temp +="<td>"+u.PARENT+"</td>";
           temp +="<td>"+u.OPENINGRATE+"</td>";
          // temp +="<td>"+u.OPENINGVALUE+"</td>";
          //  temp +="<td>"+u.BASEUNITS+"</td>";
               
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
    
    <center><p><h3><b> ITEM </b></h3></p>
   
   
    </center>
    <div class="container" >

</div>
  </div>
</div>;
}
}