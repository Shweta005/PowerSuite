import { Component, Prop, h ,getAssetPath} from '@stencil/core';


@Component({
  tag: 'wel-come',
  styleUrl: 'my-component.css',
  assetsDirs:['assets'],
  shadow: true
})
export class MyComponent {

 
 @Prop() img=" ";
 
  render() {
    return[
       <div  id="img">
 <p><center><img src={getAssetPath(`./assets/${this.img}`)} width="1420" height="562" ></img></center></p>
     
   </div>
 ];
  }
}
