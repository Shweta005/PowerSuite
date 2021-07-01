import { Component,Prop, h } from '@stencil/core';


@Component({
  tag: 'supp-lier',
  styleUrl: 'add-form.css',
  shadow: true
 

})
export class MyComponent {
   @Prop() a4="get-account.html";

    render() {
    return [
    <div class="container"> 
    <div class="wrapper">
    <div class="title">ADD SUPPLIER</div>
    <div class="form">

    <div class="inputfield">
          <label>Supplier Type</label>
          <div class="custom_select">
            <select>
            {/* <option>--Select--</option> */}
          <option value="Cr-Sr-Creditors">Cr-Sr-Creditors</option>
          </select>
          </div>
       </div>

       <div class="inputfield">
          <label>Supplier Name</label>
          <input type="text" class="input" placeholder="Supplier Name"/>
       </div>

       <div class="inputfield">
          <label>Supplier Group</label>
          <input type="text" class="input" placeholder="Supplier Group"/>
       </div>

       <div class="inputfield">
          <label>Contact Person</label>
          <input type="text" class="input" placeholder="Contact Person"/>
       </div>

       <div class="inputfield">
          <label>	Area Name</label>
          <div class="custom_select">
            <select>
            <option>--Select--</option>          
          </select>
          </div>
       </div>

       <div class="inputfield">
          <label>	City</label>
          <input type="MUMBAI" class="input" placeholder="MUMBAI"/>
       </div>

       <div class="inputfield">
          <label>Address</label>
          <input type="text" class="input" placeholder="Address"/>
       </div>

       <div class="inputfield">
          <label>Pin Code</label>
          <input type="text" class="input" placeholder="Pin Code"/>
       </div>

       <div class="inputfield">
          <label>State</label>
          <input type="text" class="input" placeholder="State"/>
       </div>

       <div class="inputfield">
          <label>Telephone</label>
          <input type="text" class="input" placeholder="Telephone"/>
       </div>

       <div class="inputfield">
          <label>Email ID</label>
          <input type="text" class="input" placeholder="Email ID"/>
       </div>

       <div class="inputfield">
          <label>	Fax</label>
          <input type="text" class="input" placeholder="Fax"/>
       </div>

       <div class="inputfield">
          <label>	Fax</label>
          <input type="text" class="input" placeholder="Fax"/>
       </div>

       <div class="inputfield">
          <label>PAN NO</label>
          <input type="text" class="input" placeholder="PAN NO"/>
       </div>

       <div class="inputfield">
          <label>Section Code</label>
          <input type="text" class="input" placeholder="Section Code"/>
       </div>

       <div class="inputfield">
          <label>Deductee Code</label>
          <input type="text" class="input" placeholder="Deductee Code"/>
       </div>

       <div class="inputfield">
          <label>	Edu Cess @</label>
          <input type="text" class="input" placeholder="Edu Cess @"/>
       </div>

       <div class="inputfield">
          <label>TDS @</label>
          <input type="text" class="input" placeholder="TDS @"/>
       </div>

       <div class="inputfield">
          <label>TDS @</label>
          <input type="text" class="input" placeholder="TDS @"/>
       </div>

       <div class="inputfield">
          <label>Surcharge @</label>
          <input type="text" class="input" placeholder="Surcharge @"/>
       </div>

       <div class="inputfield">
          <label>VAT TIN</label>
          <input type="text" class="input" placeholder="VAT TIN"/>
       </div>

       <div class="inputfield">
          <label>	C.S.T TIN</label>
          <input type="text" class="input" placeholder="C.S.T TIN"/>
       </div>

       <div class="inputfield">
          <label>Tax Pattern</label>
          <input type="text" class="input" placeholder="Tax Pattern"/>
       </div>

       <div class="inputfield">
          <label>	Tax Rate</label>
          <input type="text" class="input" placeholder="Tax Rate"/>
       </div>

       <div class="inputfield">
          <label>Pymt.Nature</label>
          <input type="text" class="input" placeholder="Pymt.Nature"/>
       </div>

       <div class="inputfield">
          <label>Currency</label>
          <input type="text" class="input" placeholder="Currency"/>
       </div>

       <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
        </div>
        {/* <div><a href={getAssetPath(`./assets/${this.a4}`)}>back</a></div> */}



    </div>
    </div>
    </div>];
  }
}
