import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, NavController} from '@ionic/angular';
import {UtenteService} from '../../services/utente.service';
import {HttpErrorResponse} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {Token} from '../../model/Token.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormModel: FormGroup;
  private loginTitle: string;
  private loginSubTitle: string;

  constructor(private formBuilder: FormBuilder,
              private alertController: AlertController,
              private translateService: TranslateService,
              private navController: NavController,
              private utenteService: UtenteService) { }

  ngOnInit() {
    this.loginFormModel = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(5)
      ]]
    });
  }


  onLogin() {
    this.utenteService.login(this.loginFormModel.value).subscribe(() => {
        this.loginFormModel.reset();
        this.navController.navigateRoot('home');
      },
      (err: HttpErrorResponse) => {
        if (err.status === 401) {
          console.error('login request error: ' + err.status);
          this.showLoginError();
        }
      });
    this.initTranslate();
  }

  async showLoginError() {
    const alert = await this.alertController.create({
      header: this.loginTitle,
      message: this.loginSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }

  private initTranslate() {
     this.translateService.get('LOGIN_ERROR_TITLE').subscribe((data) => {
       this.loginTitle = data;
     });
  }
}
