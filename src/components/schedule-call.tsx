import { Component,h } from '@stencil/core';


@Component({
  tag: 'schedule-call',
  styleUrl: 'add-form.css',
  shadow: true
})
export class MyComponent {
  

 
	// @Prop() a2="get-activities.html";

  render() {
    return[
		<div class="container">
		<div class="wrapper">
		 <div class="title">  ADD CALL </div>
	  <div class="form">
		 <div class="inputfield">
			<label>*Subject</label>
			<input type="text" class="input" placeholder="Subject"/>
		 </div>  
		 <div class="inputfield">
			<label>*Call Type</label>
			<fieldset class="input">
			 <label ><input type="radio" value="value1" name="group1"/>
	  <span class="checkmark"></span>&nbsp; Inbound
	  </label>
	   <label ><input type="radio" value="value2" name="group1"/>&nbsp; Outbound
	   </label>
	   </fieldset>
   
  
		 </div> 
		  <div class="inputfield">
			<label>Call Purpose</label>
			<div class="custom_select">
			  <select>
			  <option value="0">Select</option>
			<option value="5308">Administrative</option>
			<option value="5310">Demo</option>
			<option value="5309">Negotiation</option>
			<option value="5311">Project</option>
			<option value="5307">Prospecting</option>
			<option value="5312">Support</option>
	   </select>
			</div>
		 </div>  
		 <div class="inputfield">
			<label>Call From/To</label>
			<fieldset class="input">
			 <label><input type="radio" value="value1" name="group2"/>
	  <span class="checkmark"></span>&nbsp; Contact 
	  </label>
	   <label><input type="radio" value="value2" name="group2"/>&nbsp;
	   Lead </label>
	   </fieldset>
			  </div>
		 <div class="inputfield">
			<label>Contact Name</label>
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
			<label>Related To</label>
			<div class="custom_select">
			  <select>
				<option value="5296">Account</option>
				<option value="5300">Campaign</option>
				<option value="5299">Case</option>
				<option value="5297">Contact</option>
				<option value="5298">Lead</option>
				<option value="5303">Opportunity</option>
				<option value="5302">Potential</option>
				<option value="5301">Product</option>
			  </select>
			</div>
			<div class="custom_select">
			 <select>
			 <option value="0">Select</option>
			<option value="2">B Labs</option>
			<option value="10">FF</option>
			<option value="15">Manpower</option>
			<option value="33">SWATI  CO.</option>
			<option value="34">Swati Traders</option>
	   </select>
			</div>
		 </div> 
		 <div class="inputfield">
		   <fieldset class="input">
			<legend>*Call Details</legend>
			 <div class="inputfield">
			 <label htmlFor="*Call Start Date">*Call Start Date:</label>
				<input type="date"></input>
			  </div>
			  <div class="inputfield">
			  <label>*Call Start Time</label> 
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
			   <label>*Call Duration</label>
			   <div class="custom_select1">
			   <label> <select>
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
			  </select>
			  MIN</label>
				 <label><select>
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
			  </select>
			  SEC</label></div>
			 </div>
		   </fieldset>
		 </div>
		<div class="inputfield">
			<label>Description</label>
			<textarea></textarea>
		 </div> 
		 <div class="inputfield">
			<label>Billable</label>
			<input type="checkbox"/>
		 </div> 
		 <div class="inputfield">
			<label>Call Result</label>
			<input type="text" class="input" placeholder="Call Result"/>
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