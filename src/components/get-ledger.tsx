import {Component, h,Prop} from '@stencil/core';


@Component({
  tag: 'get-ledger',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
  ComponentWillLoad()
  {
    
  
  console.log('Submitted Successfully!');
  const url='http://www.powerbooks.in/powerapi/api/PBXMLLedger/GetAllPBXMLLedger?cccD='+this.cccd;
  fetch(url)
  .then(res => {
  
    return res.json();
  }).then(data=>{
   
      console.log(data);
      if(data.length > 0){
        var temp = "";
        data.forEach((u)=>{
          temp +="<tr>";
          temp +="<td><a href='index1.html'>"+u.LEDGERNAME+"</a></td>";
          temp +="<td>"+u.PARENT+"</td>";
          // temp +="<td>"+u.LEDGERNAME+"</td>";
          temp +="<td>"+u.ObjPBXStxTaxDetails+"</td></tr>";
         
        })
  
        document.getElementById("data").innerHTML=temp;
      }
  })
  
  .catch(err =>  {
    console.log(err);
  });
  
  }
    
  
  render()  {
    return [
      
      <div>
    
      <div>{this.ComponentWillLoad()}</div> 
      <center><p><h3><b>Ledger</b></h3></p></center>
      <div class="container">
     
     
      
  {/* <table class="table table-stripped">
    <thead>
      <tr>
        <th>GROUP</th>
        <th>CCCD</th>
        <th>Staus</th>
      </tr>
      </thead>
    <tbody id="data">
    </tbody>
  </table> */}
</div>
</div>,



      
     
    ];
  }
}