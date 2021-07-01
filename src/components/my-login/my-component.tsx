import { Component, Prop, h,getAssetPath } from '@stencil/core';


@Component({
  tag: 'p-login',
  styleUrl: 'my-component.css',
  assetsDirs:['assets'],
  shadow: true
})
export class MyComponent {

 @Prop() nav="main.html";
 @Prop() logo="bc.jpg";
 @Prop() user="p.jpeg";



 




  render() {
    return [
      <div>
          <p><center><img src={getAssetPath(`./assets/${this.logo}`) } id="ig"></img></center></p> 
 
     <div class="loginBox">
     
     <img src={getAssetPath(`./assets/${this.user}`) } class="user"/>
    
     <form  id="login-form" action={getAssetPath(`./assets/${this.nav}`) }>
       <p>Username</p>
       <input type="text" name = "username" id="username-field"  placeholder="Enter Username"/>
       <p>Password</p>
       <input type="password" name = "password" id="password-field"  placeholder="Enter Password"/>
       <p>Company Name</p>
<select id="dropdown" class="company" name="Company">
</select>
      <input type="submit" name = "" id="login-form-submit" value="Login"/></form>  </div>
        
 
    
       </div>];
  }
}
