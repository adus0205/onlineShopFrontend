import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.scss']
})
export class LostPasswordComponent implements OnInit{

  formGroup!: FormGroup;
  formError = "";
  hash= "";
  formGroupChangePassword!: FormGroup;
  formChangePasswordError = "";
  

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
    ){}
    

  ngOnInit(): void {
    this.hash = this.route.snapshot.params['hash'];
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required]
    });
    this.formGroupChangePassword = this.formBuilder.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }); 
    
  }

  send(){
    if(this.formGroup.valid){
      this.loginService.lostPassword(this.formGroup.value)
        .subscribe({
          next: result => {
            this.formError = "";
            this.formGroup.reset();
            this.snackBar.open('Email z linkiem został wysłany', '', {
              duration: 3000, panelClass: "snack-bar-bg-color-ok"
            });
          },
          error: error => this.formError = error.error.message 
        });
        
    }
  }

  sendChangePassword(){
    if(this.formGroupChangePassword.valid && this.passwordIdentical(this.formGroupChangePassword.value)){
      this.loginService.changePassword({
        password: this.formGroupChangePassword.get("password")?.value,
        repeatPassword: this.formGroupChangePassword.get("repeatPassword")?.value,
        hash: this.hash
      }).subscribe({
        next: () => {
          this.formChangePasswordError = ""
          this.formGroupChangePassword.reset();
          this.snackBar.open('Hasło zostało zmieninone', '', {duration: 3000, panelClass: "snack-bar-bg-color-ok"});
        },
        error: error => this.formChangePasswordError = error.error.message 
      });
    }
  }

  private passwordIdentical(changePassword: any){
    if(changePassword.password === changePassword.repeatPassword){
      this.formChangePasswordError = "";
      return true;
    }
    this.formChangePasswordError = "Hasła nie są identyczne";
    return false;
  }

}
