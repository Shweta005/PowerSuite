import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'create-cust',
  styleUrl: 'add-form.css',
  shadow: true
})
export class MyComponent {
   @Prop() a4="get-account.html";
  render() {
    return [
    <div class="container">
      <div class="wrapper">
      <div class="title">ADD CUSTOMER</div>
      <div class="form">
      

      <div class="inputfield">
          <label>Customer Type</label>
          <div class="custom_select">
            <select>
            {/* <option>--Select--</option> */}
          <option value="Dr-Cr-Debtors">Dr-Cr-Debtors</option>
          </select>
          </div>
       </div>

       <div class="inputfield">
          <label>Customer Name</label>
          <input type="text" class="input" placeholder="Case owner"/>
       </div>

       <div class="inputfield">
          <label>Customer Group</label>
          <input type="text" class="input" placeholder="Case owner"/>
       </div>

       <div class="inputfield">
          <label>Contact Person</label>
          <input type="text" class="input" placeholder="Case owner"/>
       </div>

       <div class="inputfield">
          <label>Area Name</label>
          <div class="custom_select">
            <select>
            <option>--Select--</option>         
          </select>
          </div>
       </div>

       <div class="inputfield">
          <label>Sales man</label>
          <input type="text" class="input" placeholder="Sales man"/>
       </div>


       <div class="inputfield">
          <label>City</label>
          <input type="text" class="input" placeholder="City"/>
       </div>

       <div class="inputfield">
          <label>Address</label>
          <input type="text" class="input" placeholder="Address"/>
       </div>

       <div class="inputfield">
          <label>Pincode</label>
          <input type="text" class="input" placeholder="Pincode"/>
       </div>

       <div class="inputfield">
          <label>State</label>
          <div class="custom_select">
            <select>
            <option>--Select--</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Goa">Goa</option>
          <option value="Gujrat">Gujrat</option>
          <option value="Punjab">Punjab</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>

          </select>
          </div>
       </div> 

       <div class="inputfield">
          <label>Telephone</label>
          <input type="text" class="input" placeholder="Telephone"/>
       </div>

       <div class="inputfield">
          <label>Email Id</label>
          <input type="text" class="input" placeholder="Email Id"/>
       </div>

       <div class="inputfield">
          <label>	Fax</label>
          <input type="text" class="input" placeholder="Fax"/>
       </div>

       <div class="inputfield">
          <label>VAT TIN</label>
          <input type="text" class="input" placeholder="VAT TIN"/>
       </div>

       <div class="inputfield">
          <label>C.S.T TIN</label>
          <input type="text" class="input" placeholder="C.S.T TIN"/>
       </div>

       <div class="inputfield">
          <label>Tax Pattern</label>
          <div class="custom_select">
            <select>
             <option></option>
          
          </select>
          </div>
       </div>

       <div class="inputfield">
          <label>Tax Rate</label>
          <input type="text" class="input" placeholder="Tax Rate"/>
       </div>

       <div class="inputfield">
          <label>Credit Allot</label>
          <input type="text" class="input" placeholder="Credit Allot"/>
       </div>

       <div class="inputfield">
          <label>Target</label>
          <input type="text" class="input" placeholder="Target"/>
       </div>

       <div class="inputfield">
          <label>Shop Pref</label>
          <div class="custom_select">
            <select>
          
          <option value="Dr-Cr-Debtors">01:PRP 1</option>
          </select>
          </div>
       </div>

       <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
        </div>
        {/* <div><a href={getAssetPath(`./assets/${this.a4}`)}>back</a></div> */}
      </div>
    </div>
    </div>
    ]; 
}
}
