import { Component,Prop, h } from '@stencil/core';


@Component({
  tag: 'create-contact',
  styleUrl: 'add-form.css',
  shadow: true
})
export class MyComponent {
  
    @Prop() a3="get-contact.html";
  render() {
    return [
    <div class="container"> 
     <div class="wrapper">
     <div class="title">ADD CUSTOMER</div>
     <div class="form">


     <div class="inputfield">
          <label>Contact Owner</label>
          <input type="text" class="input" placeholder="Contact Owner"/>
       </div> 

       <div class="inputfield">
          <label>Lead Source</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
            <option value="5265">Advertizement</option>
				<option value="5266">Cold Calls</option>
				<option value="5267">Employee Referral</option>
				<option value="5268">External Referral</option>
				<option value="5269">Online Store</option>
				<option value="5270">Partner</option>
				<option value="5271">Public Relations</option>
				<option value="5272">Trade Show</option>
				<option value="5273">Web Download</option>
				<option value="5274">Web Research</option>
            </select>
          </div>
       </div> 


       <div class="inputfield">
          <label>First Name</label>
          <div class="custom_select1">
            <select>
             <option value="Mr.">Mr.</option>
				<option value="Mrs.">Mrs.</option>
				<option value="Ms.">Ms.</option>
				<option value="Dr.">Dr.</option>
				<option value="Prof.">Prof.</option>
            </select>
            </div>
            <input type="text" class="input" placeholder="First Name"/>
       </div>  

       <div class="inputfield">
          <label>LastName</label>
          <input type="text" class="input" placeholder="LastName"/>
       </div> 
       
          
       
          <div class="inputfield">
          <label>Account Name</label>
          <div class="custom_select">
            <select>
            <option>--Select--</option>
            
				<option value="B Labs">B Labs</option>
				<option value="FF">FF</option>
				<option value="Manpower">Manpower</option>
				<option value="SWATI CO">SWATI CO</option>
                <option value="Swati Traders">Swati Traders</option>
				
            </select>
          </div>
       </div> 

       <div class="inputfield">
          <label>	Email</label>
          <input type="text" class="input" placeholder="Email"/>
       </div> 

       <div class="inputfield">
          <label>Title</label>
          <input type="text" class="input" placeholder="Title"/>
       </div> 

       

       <div class="inputfield">
          <label>Phone</label>
          <input type="text" class="input" placeholder="Phone"/>
       </div> 

       <div class="inputfield">
          <label>Department</label>
          <input type="text" class="input" placeholder="Department"/>
       </div> 

       <div class="inputfield">
          <label>Other Phone</label>
          <input type="text" class="input" placeholder="Other Phone"/>
       </div> 

       <div class="inputfield">
          <label>Home Phone</label>
          <input type="text" class="input" placeholder="Home Phone"/>
       </div> 

       <div class="inputfield">
          <label>	Mobile</label>
          <input type="text" class="input" placeholder="Mobile"/>
       </div>

       <div class="inputfield">
          <label>Fax</label>
          <input type="text" class="input" placeholder="Fax"/>
       </div>

       <div class="inputfield">
          <label>Assistant</label>
          <input type="text" class="input" placeholder="Assistant"/>
       </div>

       <div class="inputfield">
          <label>	Date Of Birth</label>
          <input type="text" class="input" placeholder="Date Of Birth"/>
       </div>

       <div class="inputfield">
          <label>	Reports To</label>
          <input type="text" class="input" placeholder="Reports To"/>
       </div>

       <div class="inputfield">
          <label>Asst Phone</label>
          <input type="text" class="input" placeholder="Asst Phone"/>
       </div>

       <div class="inputfield">
          <label>Email Opt Out</label>
          <input type="text" class="input" placeholder="Email Opt Out"/>
       </div>

       <div class="inputfield">
          <label>	Skype ID</label>
          <input type="text" class="input" placeholder="Skype ID"/>
       </div>

       <div class="inputfield">
          <label>Secondary Email</label>
          <input type="text" class="input" placeholder="Secondary Email"/>
       </div>

       <div class="inputfield">
          <label>Mailing City</label>
          <input type="text" class="input" placeholder="Mailing City"/>
       </div>

       <div class="inputfield">
          <label>Mailing Street</label>
          <input type="text" class="input" placeholder="Mailing Street"/>
       </div>

       <div class="inputfield">
          <label>Other City</label>
          <input type="text" class="input" placeholder="Other City"/>
       </div>

       <div class="inputfield">
          <label>	Mailing State</label>
          <input type="text" class="input" placeholder="Mailing State"/>
       </div>

       <div class="inputfield">
          <label>Other Street</label>
          <input type="text" class="input" placeholder="Other Street"/>
       </div>

       <div class="inputfield">
          <label>Other Zip</label>
          <input type="text" class="input" placeholder="Other Zip"/>
       </div>

       <div class="inputfield">
          <label>	Other State</label>
          <input type="text" class="input" placeholder="Other State"/>
       </div>

       <div class="inputfield">
          <label>Mailing Country</label>
          <input type="text" class="input" placeholder="Mailing Country"/>
       </div>

       <div class="inputfield">
          <label>Other Country</label>
          <input type="text" class="input" placeholder="Other Country"/>
       </div>

       <div class="inputfield">
          <label>Description</label>
          <input type="text" class="input" placeholder="Description"/>
       </div>

       

       <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
        <input type="submit" value="Delete" class="btn"/>
       </div>
       {/* <div><a href={getAssetPath(`./assets/${this.a3}`)}>back</a></div> */}
     </div>
     </div>
    </div>
    ];
  }
}
