import { Component,Prop,h } from '@stencil/core';


@Component({
  tag: 'create-temp',
  styleUrl: 'add-form.css',
  shadow: true
  
})
export class MyComponent {
  
  @Prop() a5="get-campaigns.html";
 

  render() {
    return[
      <div class="container">
      <div class="wrapper">
       <div class="title"> CREATE TEMPLATE </div>
       
    <div class="form">
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
          <label>*Template Name</label>
          <input type="text" class="input" placeholder="Template Name"/>
       </div>  
       <div class="inputfield">
          <label>*Template Mail Subject</label>
          <input type="text" class="input" placeholder="Template Mail Subject"/>
       </div>  
       <fieldset class="input">
       <div class="inputfield">
       <label>*Template Mail Body</label>
       <input type="file"class="input" name="TemplateView1$txtTemplateMailBody" id="TemplateView1_txtTemplateMailBody"/>
       </div>
       <fieldset class="input">
        <legend>Images In HTML</legend>
       <div class="inputfield">
       <center>
       <input type="file" class="input" name="TemplateView1$FileUpload1" id="TemplateView1_FileUpload1" />
       <input type="file" class="input" name="TemplateView1$FileUpload2" id="TemplateView1_FileUpload2" />
       <input type="file" class="input" name="TemplateView1$FileUpload3" id="TemplateView1_FileUpload3" />
       <input type="file" class="input" name="TemplateView1$FileUpload4" id="TemplateView1_FileUpload4" />
       <input type="file" class="input" name="TemplateView1$FileUpload5" id="TemplateView1_FileUpload5" />
       <input type="file" class="input" name="TemplateView1$FileUpload6" id="TemplateView1_FileUpload6" />
       </center>
       </div> 
       </fieldset>
       </fieldset>
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