import { Component,h } from '@stencil/core';


@Component({
  tag: 'create-pote',
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
      <div class="title">CREATE POTENTIAL</div>
      <div class="form">
 
 
      <div class="inputfield">
           <label>Potential owner</label>
           <input type="text" class="input" placeholder="Potential owner"/>
        </div> 
 
        <div class="inputfield">
           <label>Potential name</label>
           <input type="text" class="input" placeholder="Potential name"/>
        </div> 
 
        <div class="inputfield">
           <label>Amount</label>
           <input type="text" class="input" placeholder="Amount"/>
        </div> 
 
        <div class="inputfield">
           <label>Closing date</label>
           <input type="text" class="input" placeholder="Closing date"/>
        </div> 
 
        <div class="inputfield">
           <label>Account name</label>
           <div class="custom_select">
             <select>
             <option>--Select--</option>
           <option value="BB Labs">BB Labs</option>
           <option value="FF">FF</option>
           <option value="Manpower">Manpower</option>
           <option value="SWATI CO">SWATI CO</option>
           <option value="PSwati Traders">Swati Traders</option>
           </select>
           </div>
            </div> 
 
            <div class="inputfield">
           <label>Type</label>
           <div class="custom_select">
             <select>
             <option>--Select--</option>
           <option value="Existing Business">Existing Business</option>
           <option value="New BusinessF">New Business</option>
          </select>
           </div>
            </div> 
 
            <div class="inputfield">
           <label>Stage</label>
           <div class="custom_select">
             <select>
             <option>--Select--</option>
           <option value="Closed lost">Closed lost</option>
           <option value="Closed win">Closed win</option>
           <option value="Id.Decision maker">Id.Decision maker</option>
           <option value="Need analysis">Need analysis</option>
           <option value="Negotiation/Review">Negotiation/Review</option>
           <option value="Perception Analysis">Perception Analysis</option>
           <option value="Proposal/Price quote">Proposal/Price quote</option>
           <option value="Qualification">Qualification</option>
           <option value="Value Proposition">Value Proposition</option>
           </select>
           </div>
            </div> 
 
            <div class="inputfield">
           <label>	Probability(%)</label>
           <input type="text" class="input" placeholder="	Probability(%)"/>
        </div> 
 
        <div class="inputfield">
           <label>Next Step</label>
           <input type="text" class="input" placeholder="Next Step"/>
        </div>
 
        <div class="inputfield">
           <label>Expected Revenue</label>
           <input type="text" class="input" placeholder="Expected Revenue"/>
        </div> 
 
        <div class="inputfield">
           <label>Lead Source</label>
           <div class="custom_select">
             <select>
             <option>--Select--</option>
           <option value="Advertizement">Advertizement</option>
           <option value="Cold calls">Cold calls</option>
           <option value="Employee Referral">Employee Referral</option>
           <option value="External Referral">External Referral</option>
           <option value="Online store">Online store</option>
           <option value="Partner">Partner</option>
           <option value="Public Relations">Public Relations</option>
           <option value="Trade show">Trade show</option>
           <option value="Web Download">Web Download</option>
           <option value="Web Research">Web Research</option>
           </select>
           </div>
            </div> 
 
            <div class="inputfield">
           <label>Campaign Source</label>
           <div class="custom_select">
             <select>
             <option>--Select--</option>
           <option value="bala">bala</option>
           <option value="COMMTEX">COMMTEX</option>
           <option value="Naresh">Naresh</option>
             </select>
           </div>
            </div> 
 
            <div class="inputfield">
           <label>Contact Name</label>
           <div class="custom_select">
             <select>
             <option>--Select--</option>
           <option value="bala">PRIYA</option>
             </select>
           </div>
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
        
      </div>
      </div>
     </div>
     ];
   }
 }
 