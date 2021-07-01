import { Component, h ,Prop} from '@stencil/core';


@Component({
  tag: 'get-account',
  styleUrl: 'my-component.css',
  
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
   ComponentWillLoad()
   {
   console.log('Submitted Successfully!');
   const url='http://www.powerbooks.in/PowerAPI/api/PBXMLLedger/GetNamePBXMLLedgers?cccD=HBANSODE'+this.cccd;
  fetch(url)
   .then(res => {
     return res.json();
   }).then(data=>{
       console.log(data);
      if(data.length > 0){
      var temp = "";
         data.forEach((u)=>{
            temp +="<tr>"
        
            temp +="<td><a href='index.html'>"+u.LEDGERNAME+"</a></td>";
             temp +="<td>"+u.cccd+"</td>";
             temp +="<td>"+u.OPENINGBALANCE+"</td>";
            //  temp +="<td>"+u.INTERSTATESTNUMBER+"</td></tr>";        
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
    
    <center><p><h3><b>ACCOUNTS</b></h3></p></center>
    <div class="container" >
    {/* <table class="table">
    <thead> <tr>
     <th>CLIENT-NAME</th>
     <th>CLIENT-GROUP</th>
     <th>OPENING-BALANCE</th> 
     <th>INTEREST</th>
    
   </tr></thead>
   <tbody id="data">
  
   </tbody> 
 </table> */}
</div>
  </div>
</div>;
}
}