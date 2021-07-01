import { Component, h,getAssetPath,Prop } from '@stencil/core';



@Component({
  tag: 'social-network',
  styleUrl: 'my-component.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class MyComponent {
  @Prop() image1 = "twitter.png";
  @Prop() image2 = "facebook.png";
  @Prop() image3 = "messenger.png";
  @Prop() image = "whatsapp.png";

render() {  
  
  return [
    <div class="twitter">
    <a href="https://www.twitter.com/"><img src={getAssetPath(`./assets/${this.image1}`)} width="24" height="20"/>  Blue Bird</a>
 </div>,
  <div class="facebook">
    <a href="https://www.facebook.com/"><img src={getAssetPath(`./assets/${this.image2}`)} width="21" height="20"/>  Facebook</a>
   </div>,
  <div class="FacebookMessage">
    <a href="https://www.messenger.com/"><img src={getAssetPath(`./assets/${this.image3}`)} width="21" height="20"/>  Facebook Message</a> 
 </div>,
<div class="WhatsAppMessenger">
    <a href="https://www.whatsapp.com/"><img src={getAssetPath(`./assets/${this.image}`)} width="21" height="20"/>  WhatsApp Messenger</a>
    </div>

    
  ];
  }
}
