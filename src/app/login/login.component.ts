import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // logged:boolean = false;
  //
  // empleado: any = {
  //   user: "empleado",
  //   password: "Guatemala"
  // }


  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);

  }
  //
  // log(user){
  //   // console.log(user);
  // }
  //
  // checkUser(access){
  //   // let user = access.value.usuario;
  //   // let pass = access.value.password;
  //   // if(access.errors !== null && user == empleado.user && pass == empleado.password){
  //   //   console.log('logged');
  //   //
  //   //   this.logged = true;
  //   // }else{
  //   //   console.log(access.errors);
  //   //   console.log(user);
  //   //   console.log(pass);
  //   //   console.log("can't do that starfox");
  //   }

  // }

}
