import { Component, h ,Prop} from '@stencil/core';


@Component({
  tag: 'get-currencies',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://www.powerbooks.in/powerapi/api/PBXMLCurrency/GetAllPBXMLCurrency?cccd='+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
           temp +="<tr>";
           temp +="<td><a href=addcurr.html>"+u.NAME+"</a></td>";
           temp +="<td>"+u.ORIGINALNAME+"</td>";
           temp +="<td>"+u.EXPANDEDSYMBOL+"</td>";
           temp +="<td>"+u.ISSUFFIX+"</td>";
          //  temp +="<td>"+u.HASSPACE+"</td></tr>";        
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
    
    <center><p><h3><b>CURRENCIES </b></h3></p>
   
   
    </center>
    <div class="container" >

</div>
  </div>
</div>;
}
}