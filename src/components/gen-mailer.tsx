import { Component,Prop,h } from '@stencil/core';


@Component({
  tag: 'gen-mailer',
  styleUrl: 'add-form.css',
  shadow: true
 
})
export class MyComponent {
  @Prop() a5="get-campaigns.html";

 

  render() {
    return[
      <div class="container">
      <div class="wrapper">
       <div class="title"> GENERATE MAILER </div>
       
    <div class="form">
        <div class="inputfield">
          <label>Campaign Name</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
              <option value="4">bala</option>
              <option value="6">COMMTEX</option>
              <option value="7">Naresh</option>
              <option value="7">Naresh</option>
              <option value="None">None</option>
            </select>
          </div>
       </div>  
       <div class="inputfield">
           <label htmlFor="Date">Date</label>
 			 <input type="date"class="input"></input>
            </div>
            <div class="inputfield">
          <label>Product Name</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
            <option value="10000002">Building Material</option>
				<option value="10000004">Purchased</option>
            </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>Sku Name</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
            {/* <option value="Active">Active</option>
            <option value="Deactive">Deactive</option> */}
            </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>Template Subject</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
            {/* <option value="5375">Existing Business</option>
            <option value="5376">New Business</option> */}
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
            {/* <option value="5325">ASP</option>
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
			<option value="5337">Wireless Industry</option> */}
            </select>
          </div>
       </div>  
          <div class="inputfield">
          <label>*Status</label>
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
      {/* <div><a href={getAssetPath(`./assets/${this.a5}`)}>back</a></div>   */}
    </div>
</div>
</div>   
 ] ;
  }
}