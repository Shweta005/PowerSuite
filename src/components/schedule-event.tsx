import { Component,h } from '@stencil/core';


@Component({
  tag: 'schedule-event',
  styleUrl: 'add-form.css',
  shadow: true
})
export class MyComponent {
  

	// @Prop() a2="get-activities.html";

  render() {
    return[
      <div class="container">
      <div class="wrapper">
       <div class="title">  ADD EVENT </div>
       
    <div class="form">
        <div class="inputfield">
          <label>Event Owner</label>
          <input type="text" class="input" placeholder="Event Owner"/>
       </div>  
       <div class="inputfield">
          <label>Subject</label>
          <input type="text" class="input" placeholder="Subject"/>
       </div>  
       <div class="inputfield">
          <label>Venue</label>
          <input type="text" class="input" placeholder="Venue"/>
       </div>  
       <div class="inputfield">
           <label htmlFor="Start Date">*Start Date</label>
 			 <input type="date" class="input"></input>
            </div>
            <div class="inputfield">
            <label>*Start Time</label> 
			<div class="custom_select1">
            <select>
				<option value="01">01</option>
				<option value="02">02</option>
				<option value="03">03</option>
				<option value="04">04</option>
				<option value="05">05</option>
				<option value="06">06</option>
				<option value="07">07</option>
				<option value="08">08</option>
				<option value="09">09</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
			</select>&nbsp;
      <select>
				<option value="00">00</option>
				<option value="01">01</option>
				<option value="02">02</option>
				<option value="03">03</option>
				<option value="04">04</option>
				<option value="05">05</option>
				<option value="06">06</option>
				<option value="07">07</option>
				<option value="08">08</option>
				<option value="09">09</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
				<option value="13">13</option>
				<option value="14">14</option>
				<option value="15">15</option>
				<option value="16">16</option>
				<option value="17">17</option>
				<option value="18">18</option>
				<option value="19">19</option>
				<option value="20">20</option>
				<option value="21">21</option>
				<option value="22">22</option>
				<option value="23">23</option>
				<option value="24">24</option>
				<option value="25">25</option>
				<option value="26">26</option>
				<option value="27">27</option>
				<option value="28">28</option>
				<option value="29">29</option>
				<option value="30">30</option>
				<option value="31">31</option>
				<option value="32">32</option>
				<option value="33">33</option>
				<option value="34">34</option>
				<option value="35">35</option>
				<option value="36">36</option>
				<option value="37">37</option>
				<option value="38">38</option>
				<option value="39">39</option>
				<option value="40">40</option>
				<option value="41">41</option>
				<option value="42">42</option>
				<option value="43">43</option>
				<option value="44">44</option>
				<option value="45">45</option>
				<option value="46">46</option>
				<option value="47">47</option>
				<option value="48">48</option>
				<option value="49">49</option>
				<option value="50">50</option>
				<option value="51">51</option>
				<option value="52">52</option>
				<option value="53">53</option>
				<option value="54">54</option>
				<option value="55">55</option>
				<option value="56">56</option>
				<option value="57">57</option>
				<option value="58">58</option>
				<option value="59">59</option>
			</select>&nbsp;
      		<select >
				<option value="AM">AM</option>
				<option value="PM">PM</option>
			</select></div>
           </div>
           <div class="inputfield">
           <label htmlFor="End Date">*End Date</label>
 			 <input type="date"class="input"></input>
            </div>
            <div class="inputfield">
            <label>*End Time</label> 
			<div class="custom_select1">
            <select>
				<option value="01">01</option>
				<option value="02">02</option>
				<option value="03">03</option>
				<option value="04">04</option>
				<option value="05">05</option>
				<option value="06">06</option>
				<option value="07">07</option>
				<option value="08">08</option>
				<option value="09">09</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
			</select>&nbsp;
      <select>
				<option value="00">00</option>
				<option value="01">01</option>
				<option value="02">02</option>
				<option value="03">03</option>
				<option value="04">04</option>
				<option value="05">05</option>
				<option value="06">06</option>
				<option value="07">07</option>
				<option value="08">08</option>
				<option value="09">09</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
				<option value="13">13</option>
				<option value="14">14</option>
				<option value="15">15</option>
				<option value="16">16</option>
				<option value="17">17</option>
				<option value="18">18</option>
				<option value="19">19</option>
				<option value="20">20</option>
				<option value="21">21</option>
				<option value="22">22</option>
				<option value="23">23</option>
				<option value="24">24</option>
				<option value="25">25</option>
				<option value="26">26</option>
				<option value="27">27</option>
				<option value="28">28</option>
				<option value="29">29</option>
				<option value="30">30</option>
				<option value="31">31</option>
				<option value="32">32</option>
				<option value="33">33</option>
				<option value="34">34</option>
				<option value="35">35</option>
				<option value="36">36</option>
				<option value="37">37</option>
				<option value="38">38</option>
				<option value="39">39</option>
				<option value="40">40</option>
				<option value="41">41</option>
				<option value="42">42</option>
				<option value="43">43</option>
				<option value="44">44</option>
				<option value="45">45</option>
				<option value="46">46</option>
				<option value="47">47</option>
				<option value="48">48</option>
				<option value="49">49</option>
				<option value="50">50</option>
				<option value="51">51</option>
				<option value="52">52</option>
				<option value="53">53</option>
				<option value="54">54</option>
				<option value="55">55</option>
				<option value="56">56</option>
				<option value="57">57</option>
				<option value="58">58</option>
				<option value="59">59</option>
			</select>&nbsp;
      		<select >
				<option value="AM">AM</option>
				<option value="PM">PM</option>
			</select></div>
           </div>
        <div class="inputfield">
        <div class="custom_select1">
            <select >
				<option value="Contact">Contact</option>
				<option value="Lead">Lead</option>
			</select>&nbsp;&nbsp;</div>&nbsp;&nbsp;
          <div class="custom_select">
            <select>
            <option value="Select">Select</option>
              <option value="priya  naidu">priya  naidu</option>
              <option value="PRIYA  Naidu">PRIYA  Naidu</option>
              <option value="PRIYA  Naidu">PRIYA  Naidu</option>
            </select>
          </div>
          </div> 
          <div class="inputfield">
          <label>Related To</label>
          <div class="custom_select">
            <select>
            <option value="Select">Select</option>
              <option value="Account">Account</option>
              <option value="Campaign">Campaign</option>
              <option value="Case">Case</option>
              <option value="Contact">Contact</option>
			        <option value="Lead">Lead</option>
			        <option value="Opportunity">Opportunity</option>
			        <option value="Potential">Potential</option>
			        <option value="Product">Product</option>
            </select>
          </div>
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
          <label>Recurring Activity</label>
          <input type="checkbox"/>
       </div>
       <div class="inputfield">
          <label>Send Notification Email</label>
          <input type="checkbox"/>
       </div>
      <div class="inputfield">
          <label>Description</label>
          <textarea></textarea>
       </div> 
       <div class="inputfield">
        <input type="submit" value="Save" class="btn"/>
        <input type="submit" value="Cancel" class="btn"/>
        
      </div>
      {/* <div><a href={getAssetPath(`./assets/${this.a2}`)}>back</a></div>   */}
    </div>
</div>
</div>   
 ] ;
  }
}