import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, NavController} from '@ionic/angular';
import {Account, UtenteService} from '../../services/utente.service';
import {Utente} from '../../model/utente.model';
import {HttpErrorResponse} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginFormModel: FormGroup;
  private loginTitle: string;
  private loginSubTitle: string;

  constructor(private formBuilder: FormBuilder,
              private alertController: AlertController,
              private translateService: TranslateService,
              private navController: NavController,
              private utenteService: UtenteService) { }

  ngOnInit() {
    this.loginFormModel = this.formBuilder.group({
      email: ['angelo@gmail.com', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(8)
      ])],
      password: ['lalala', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(5)
      ])]
    });
  }

  onLogin() {
    const account: Account = this.loginFormModel.value;
    this.utenteService.login(account).subscribe((utente: Utente) => {
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
    this.translateService.get('LOGIN_ERROR_SUB_TITLE').subscribe((data) => {
      this.loginSubTitle = data;
    });
    this.translateService.get('LOGIN_ERROR_TITLE').subscribe((data) => {
      this.loginTitle = data;
    });
  }
}
