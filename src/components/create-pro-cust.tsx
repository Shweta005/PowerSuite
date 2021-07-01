import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'create-pro-cust',
  styleUrl: 'add-form.css',
  shadow: true
})
export class MyComponent {
   @Prop() a4="get-account.html";
  render() {
    return [
      <div class="container">
      <div class="wrapper">
       <div class="title">  CREATE PROSPECTING </div>
       
    <div class="form">
        <div class="inputfield">
          <label>Prospect Customer Owner</label>
          <input type="text" class="input" placeholder="Prospect Customer Owner"/>
       </div>  
       <div class="inputfield">
          <label>Directory Name</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
			{/* <option value="5319">Advertisement</option>
			<option value="5320">Banner Ads</option>
			<option value="5313">Conference</option>
			<option value="5321">Direct Mail</option>
			<option value="5322">Email</option>
			<option value="5317">Partners</option>
			<option value="5316">Public Relations</option>
			<option value="5318">Referral Program</option>
			<option value="5315">Trade Show</option>
			<option value="5314">Webinar</option> */}
            </select></div>
       </div>  
       <div class="inputfield">
          <label>Category</label>
          <input type="text" class="input" placeholder="Category"/>
       </div>  
       <div class="inputfield">
          <label>Company Name</label>
          <input type="text" class="input" placeholder="Company Name"/>
          </div>
          <div class="inputfield">
          <label>Contact Person</label>
          <input type="text" class="input" placeholder="Contact Person"/>
       </div>  
       <div class="inputfield">
          <label>Address</label>
          <textarea class="input"></textarea>
       </div>  
        <div class="inputfield">
          <label>Address1</label>
          <textarea class="input"></textarea>
       </div>  
       <div class="inputfield">
           <label>Address2</label>
           <textarea class="input"></textarea>
            </div>
       <div class="inputfield">
           <label>City</label>
           <input type="text" class="input" placeholder="City"/>
            </div> 
       <div class="inputfield">
          <label>Pin Code</label>
          <input type="text" class="input" placeholder="Pin Code"/>
       </div>
       <div class="inputfield">
          <label>STD Code</label>
          <input type="text" class="input" placeholder="STD Code"/>
       </div>
       <div class="inputfield">
          <label>Phone</label>
          <input type="text" class="input" placeholder="Phone"/>
       </div> 
       <div class="inputfield">
          <label>Fax STD Code</label>
          <input type="text" class="input" placeholder="Fax STD Code"/>
       </div> 
       <div class="inputfield">
          <label>Fax</label>
          <input type="text" class="input" placeholder="Fax"/>
       </div> 
       <div class="inputfield">
          <label>Email</label>
          <input type="text" class="input" placeholder="Email"/>
       </div> 
       <div class="inputfield">
          <label>Website</label>
          <input type="text" class="input" placeholder="Website"/>
       </div> 
      <div class="inputfield">
          <label>Products Dealing Into</label>
          <textarea class="input"></textarea>
       </div> 
       <div class="inputfield">
          <label>Status</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
            <option value="5323">Active</option>
            <option value="5324">Deactive</option>
            </select>
          </div>
       </div>  
     <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
        
      </div>
     
    </div>
</div>
</div>   
 ] ;
  }
}