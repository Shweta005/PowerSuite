import {Component, h,Prop} from '@stencil/core';


@Component({
  tag: 'get-voucher',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() cccd=sessionStorage.getItem('cccd');
  ComponentWillLoad()
  {
   
  
  console.log('Submitted Successfully!');
  const url='http://www.powerbooks.in/powerapi/api/PBXMLVoucherType/GetAllPBXMLVoucherType?cccD='+this.cccd;
  fetch(url)
  .then(res => {
  
    return res.json();
  }).then(data=>{
   
      console.log(data);
      if(data.length > 0){
        var temp = "";
        data.forEach((u)=>{
          temp +="<td><a href='index1.html'>"+u.PARENT+"</a></td>";
          temp +="<td>"+u.RESERVEDNAME+"</td>";
          temp +="<td>"+u.PREVENTDUPLICATES+"</td>";
          temp +="<td>"+u.ALLOWCONSUMPTION+"</td></tr>";
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
      
      <div class="container">
      <center><p><h3><b> VOUCHER TYPES </b></h3></p></center>
     
      
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