import { Component, h } from '@stencil/core';


@Component({
  tag: 'buis-acc',   
  styleUrl: 'add-form.css',
  

})
export class MyComponent {
  

    render() {
    return [
    <div class="container"> 
    <div class="wrapper">
    <div class="title">ADD BUSINESS ACCOUNT</div>
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
          <label>Cr.Days</label>
          <input type="text" class="input" placeholder="0"/>
       </div>

       <div class="inputfield">
          <label>Customer Name</label>
          <input type="text" class="input" placeholder="Customer Name"/>
       </div>

       <div class="inputfield">
          <label>Customer Group</label>
          <input type="text" class="input" placeholder="Business Account"/>
       </div>

       
       <div class="inputfield">
          <label>Contact Person</label>
          <input type="MUMBAI" class="input" placeholder="Contact Person"/>
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
          <label>Sales Man</label>
          <input type="text" class="input" placeholder="Sales Man"/>
       </div>

       <div class="inputfield">
          <label>	City</label>
          <input type="text" class="input" placeholder="MUMBAI"/>
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
          <label>EMAIL ID</label>
          <input type="text" class="input" placeholder="EMAIL ID"/>
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
          <label>	C.S.T TIN</label>
          <input type="text" class="input" placeholder="C.S.T TIN"/>
       </div>

       <div class="inputfield">
          <label>Tax pattern</label>
          <div class="custom_select">
            <select>
            <option>--Select--</option>          
          </select>
          </div>
       </div>

       
       <div class="inputfield">
          <label>	Tax Rate</label>
          <input type="text" class="input" placeholder="0"/>
       </div>

       <div class="inputfield">
          <label>Credit Allot </label>
          <input type="text" class="input" placeholder="0"/>
       </div>

       <div class="inputfield">
          <label>	Target</label>
          <input type="text" class="input" placeholder="0"/>
       </div>

       <div class="inputfield">
          <label>	Shop Pref</label>
          <div class="custom_select">
            <select>
            <option>01: PRP 1</option>          
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
    </div>];
  }
}
