import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private serviceUser: ServiceService) { }

  ngOnInit() {
  }
   
  user: string = '';
  pass: string = '';

  alert_noEntrar: boolean = false;

  error(){
    this.alert_noEntrar = false;
  }

  ingresar(){
    if(this.user==='' || this.pass===''){
      this.alert_noEntrar = true;
      console.log('NO');
      
    }else{
      this.serviceUser.validar(this.user,this.pass).subscribe((login)=>{
        console.log('OK');
      },error=>{
        this.alert_noEntrar = true;
        console.log('NO');
      }
      )
    }
    
   
    
  }



}
