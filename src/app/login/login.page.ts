import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private serviceUser: ServiceService ,private router: Router) { }

  ngOnInit() {
  }
   
  user: string = '';
  pass: string = '';

  alert_noEntrar: boolean = false;

  userInfo: string[] = [];
  error(){
    this.alert_noEntrar = false;
  }

  ingresar(){
    if(this.user==='' || this.pass===''){
      this.alert_noEntrar = true;
      console.log('NO');
      
    }else{
      this.serviceUser.validar(this.user,this.pass).subscribe((login)=>{
        this.userInfo = login;
        console.log(login);
        
       this.router.navigate(['ordenes',login.userid]);
      },error=>{
        this.alert_noEntrar = true;
        console.log('NO');
      }
      )
    }
     
  }



}
