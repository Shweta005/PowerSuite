import { Component,h } from '@stencil/core';


@Component({
  tag: 'create-oppo',
  styleUrl: 'add-form.css',
  // assetsDirs:['assets'],
  shadow: true
})
export class MyComponent {
  // @Prop() grp="groups.jpg";

  

  render() {
    return[
      <div class="container">
      <div class="wrapper">
       <div class="title"> CREATE OPPORTUNITY </div>
       
    <div class="form">
        <div class="inputfield">
          <label>*Name</label>
          <input type="text" class="input" placeholder="Name"/>
       </div>  
       <div class="inputfield">
          <label>Currency</label>
          <div class="custom_select">
            <select>
            <option value="Indian Rupees : Rs">Indian Rupees : Rs</option>
            {/* <option value="Active">Active</option>
            <option value="Deactive">Deactive</option> */}
            </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>Type</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
            <option value="5375">Existing Business</option>
            <option value="5376">New Business</option>
            </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>*Account Name</label>
          <div class="custom_select">
          <select>
          <option value="Select">Select</option>
          <option value="B Labs">B Labs</option>
          <option value="FF">FF</option>
          <option value="Manpower">Manpower</option>
          <option value="SWATI  CO.">SWATI  CO.</option>
          <option value="Swati Traders">Swati Traders</option>
     </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>*Amount</label>
          <input type="text" class="input" placeholder="Amount"/>
       </div>  
       <div class="inputfield">
           <label htmlFor="Expected Close Date">*Expected Close Date</label>
 			 <input type="date"class="input"></input>
            </div>
        <div class="inputfield">
        <label>Assigned To</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
              <option value="17">priya  naidu</option>
              <option value="117">PRIYA  Naidu</option>
              <option value="118">PRIYA  Naidu</option>
            </select>
          </div>
          </div> 
          <div class="inputfield">
          <label>Campaign</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
              <option value="4">bala</option>
              <option value="6">COMMTEX</option>
              <option value="7">Naresh</option>
              <option value="7">Naresh</option>
            </select>
          </div></div>
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
          <label>*Sales Stage</label>
          <div class="custom_select">
            <select>
            <option value="0">Select</option>
            <option value="5359">Closed Lost</option>
				<option value="5358">Closed Won</option>
				<option value="5354">Id. Decesion Makers</option>
				<option value="5352">Need Analysis</option>
				<option value="5357">Negotiation/Review</option>
				<option value="5355">Perception Analysis</option>
				<option value="5356">Proposal/Price Quote</option>
				<option value="5351">Qualification</option>
				<option value="5353">Value Proposition</option>
            </select>
          </div>
       </div>  
       <div class="inputfield">
          <label>Probability (%)</label>
          <input type="text" class="input" placeholder="Probability"/>
       </div>
       <div class="inputfield">
          <label>Next Step</label>
          <input type="text" class="input" placeholder="Next Step"/>
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
      
    </div>
</div>
</div>   
 ] ;
  }
}