import { Component,h } from '@stencil/core';


@Component({
  tag: 'add-tariff',
  styleUrl: 'add-form.css',
  // assetsDirs:['assets'],
  shadow: true
})
export class MyComponent {
  // @Prop() grp="groups.jpg";

  save(){
 alert("Data Saved");
}

  render() {
    return[
      <div class="container">
      <div class="wrapper">
       <div class="title">
       {/* <div id="main">
         <img src={getAssetPath(`./assets/${this.grp}`) } height="50" width="50"/> 
        </div> */}
     TARRIF/VAT COMMODITY CREATION
    </div>
    <div class="form">
       <div class="inputfield">
          <label>Name:</label>
          <input type="text" class="input" placeholder="Name"/>
       </div>  
        <div class="inputfield">
          <label>Used For:</label>
          <div class="custom_select">
            <select>
            <option value="primary">Both</option>
          <option value="Bank OS A/c">Excise</option>
          <option value="Branch/divisions">VAT</option>
          </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>HSN Code:</label>
          <input type="text" class="input" placeholder="HSN Code"/>
       </div>  
       <div class="title">VAT</div>
       <div class="inputfield">
          <label>Commodity Code:</label>
          <input type="text" class="input" placeholder="Commodity Code"/>
       </div>  
       <div class="inputfield">
          <label>Schedule Number:</label>
          <input type="text" class="input" placeholder="Schedule Number"/>
       </div>  
       <div class="inputfield">
          <label>Schedule Serial Number:</label>
          <input type="text" class="input" placeholder="Schedule Serial Number"/>
       </div>
       <div class="inputfield">
          <label>Note:</label>
          <input type="text" class="input" placeholder="Note"/>
       </div>
  <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
        <input type="submit" value="Delete" class="btn"/>
        <input type="submit" value="Configuration" class="btn"/>
      </div>
      </div>
</div>
</div>   
 ] ;
  }
}


 