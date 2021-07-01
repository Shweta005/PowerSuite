import { Component,h } from '@stencil/core';


@Component({
  tag: 'create-lead',
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
       <div class="title">  CREATE LEAD </div>
       
    <div class="form">
        <div class="inputfield">
          <label>Lead Owner</label>
          <input type="text" class="input" placeholder="Lead Owner"/>
       </div> 
       <div class="inputfield">
          <label>*Company</label>
          <input type="text" class="input" placeholder="Company"/>
       </div>  
       <div class="inputfield">
          <label>Title</label>
          <input type="text" class="input" placeholder="Title"/>
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
          <label>*Last Name</label>
          <input type="text" class="input" placeholder="Last Name"/>
       </div>  
       <div class="inputfield">
          <label>Email</label>
          <input type="text" class="input" placeholder="Email"/>
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
          <label>Fax</label>
          <input type="text" class="input" placeholder="Fax"/>
       </div>  
       <div class="inputfield">
          <label>Mobile</label>
          <input type="text" class="input" placeholder="Mobile"/>
       </div>  
        <div class="inputfield">
          <label>Industry</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
            <option value="5325">ASP</option>
				<option value="5327">Government</option>
				<option value="5328">Large Enterprise</option>
				<option value="5329">ManagementISV</option>
				<option value="5330">MSP(Management Service Provider)</option>
				<option value="5331">Network Equipment(Enterprise)</option>
				<option value="5332">Optical Networking</option>
				<option value="5333">Service Provider</option>
				<option value="5334">Small/Medium Enterprise</option>
				<option value="5335">Storage Equipment</option>
				<option value="5336">Storage service Provider</option>
				<option value="5338">System Integrator</option>
				<option value="5326">Telecom OEM</option>
				<option value="5337">Wireless Industry</option>
            </select>
          </div>
       </div>  
       <div class="inputfield">
           <label>Annual Revenue</label>
           <input type="text" class="input" placeholder="Annual Revenue"/>
            </div>
       <div class="inputfield">
           <label >No of Employees</label>
           <input type="text" class="input" placeholder="No of Employees"/>
            </div> 
       <div class="inputfield">
          <label>Website</label>
          <input type="text" class="input" placeholder="Website"/>
       </div>
       <div class="inputfield">
          <label>Skype ID</label>
          <input type="text" class="input" placeholder="Skype ID"/>
       </div>
       <div class="inputfield">
          <label>Lead Status</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
            <option value="5339">Attempted To contact</option>
				<option value="5340">Contact in future</option>
				<option value="5341">Contacted</option>
				<option value="5342">Junk Lead</option>
				<option value="5343">Lost lead</option>
				<option value="5344">Not Contacted</option>
				<option value="5345">Prequalified</option>
            </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>Rating</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
            <option value="5346">Acquired</option>
				<option value="5347">Active</option>
				<option value="5348">Market Failed</option>
				<option value="5349">Project Cancelled</option>
				<option value="5350">Shutdown</option>
            </select>
          </div>
       </div>
       <div class="inputfield">
          <label>Country</label>
          <input type="text" class="input" placeholder="Country"/>
       </div>   
       <div class="inputfield">
          <label>Phone</label>
          <input type="text" class="input" placeholder="Phone"/>
       </div> 
       <div class="inputfield">
          <label>Street</label>
          <input type="text" class="input" placeholder="Street"/>
       </div> 
       <div class="inputfield">
           <label>City</label>
           <input type="text" class="input" placeholder="City"/>
            </div> 
       <div class="inputfield">
          <label>Zip Code</label>
          <input type="text" class="input" placeholder="Zip Code"/>
       </div> 
       <div class="inputfield">
          <label>State</label>
          <input type="text" class="input" placeholder="State"/>
       </div> 
      <div class="inputfield">
          <label>Description</label>
          <textarea class="input"></textarea>
       </div> 
        
       <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
        <input type="submit" value="Delete" class="btn"/>
        <input type="submit" value="OK" class="btn"/>
      </div>
    
    </div>
</div>
</div>   
 ] ;
  }
}

 