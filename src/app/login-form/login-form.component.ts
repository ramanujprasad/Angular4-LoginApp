import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../services/user.service';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  model: any = {};
  mismatch = false;
  loginForm: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private route: ActivatedRoute, private router:Router, private user:UserService, formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit() {
    
  }

  onFormSubmitted(value) {    
    console.log('form value:', value);
    if (value['username'] === 'admin' && value['password'] === 'admin') {
      this.mismatch = false;
      this.user.setUserLoggedIn();
      this.router.navigate(['myprofile']);
    } else {
      this.mismatch = true;
    }    
  }
}
