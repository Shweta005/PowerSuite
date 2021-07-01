import { Component,h } from '@stencil/core';


@Component({
  tag: 'create-camp',
  styleUrl: 'add-form.css',
 
 
})
export class MyComponent {
  
 
 

  render() {
    return[
      <div class="container">
      <div class="wrapper">
       <div class="title">  ADD CAMPAIGN </div>
       
    <div class="form">
        <div class="inputfield">
          <label>Campaign  Owner</label>
          <input type="text" class="input" placeholder="Campaign Owner"/>
       </div>  
       <div class="inputfield">
          <label>Type</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
			<option value="5319">Advertisement</option>
			<option value="5320">Banner Ads</option>
			<option value="5313">Conference</option>
			<option value="5321">Direct Mail</option>
			<option value="5322">Email</option>
			<option value="5317">Partners</option>
			<option value="5316">Public Relations</option>
			<option value="5318">Referral Program</option>
			<option value="5315">Trade Show</option>
			<option value="5314">Webinar</option>
            </select></div>
       </div>  
       <div class="inputfield">
          <label>*Campaign Name</label>
          <input type="text" class="input" placeholder="Campaign Name"/>
       </div>  
       <div class="inputfield">
          <label>Product Name</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
			<option value="10000002">Building Material</option>
			<option value="10000004">Purchased</option>
            </select>
          </div></div>
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
          <label>	Location</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
            <option value="5283">Mumbai</option>
            {/* <option value="Deactive">Deactive</option> */}
            </select>
          </div>
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
           <label htmlFor="Start Date">	Start Date</label>
 			 <input type="date"class="input"></input>
            </div>
       <div class="inputfield">
           <label htmlFor="End Date">End Date</label>
 			 <input type="date"class="input"></input>
            </div> 
       <div class="inputfield">
          <label>Expected Revenue</label>
          <input type="text" class="input" placeholder="Expected Revenue"/>
       </div>
       <div class="inputfield">
          <label>Budgeted Cost</label>
          <input type="text" class="input" placeholder="Budgeted Cost"/>
       </div>
       <div class="inputfield">
          <label>Actual Cost</label>
          <input type="text" class="input" placeholder="Actual Cost"/>
       </div> 
       <div class="inputfield">
          <label>Expected Response</label>
          <input type="text" class="input" placeholder="Expected Response"/>
       </div> 
      <div class="inputfield">
          <label>Description</label>
          <textarea class="input"></textarea>
       </div> 
       <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
        <input type="submit" value="Delete" class="btn"/>
        
      </div>
      {/* <div><a href={getAssetPath(`./assets/${this.a5}`)}>back</a></div> */}

      
        
    </div>
</div>
</div>   
 ] ;
  }
}