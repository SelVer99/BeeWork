import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UtenteService} from '../services/utente.service';
import {X_AUTH} from '../constants';
import {AlertController, NavController} from '@ionic/angular';
import {catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private navController: NavController,
                private alertController: AlertController,
                private utenteService: UtenteService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
      // Ottengo il token di autenticazione
        const authToken = this.utenteService.getAuthToken();
        if (authToken !== null && authToken !== undefined && authToken !== '') {
            console.log('Il token è stato aggiunto');
            // Si clona la richiesta per inserire il token nell'header
            const authReq = req.clone({
                headers: req.headers.set(X_AUTH, `Bearer ${authToken}`)
            });
            return next.handle(authReq).pipe(
                catchError(err => {
                    this.showError(err);
                    return EMPTY;
                })
            );
        } else { return next.handle(req);}
    }

    async showError(err: HttpErrorResponse) {
        const errorMessage = `Status: ${err.status}, Message: ${err.message}`;
        const alert = await this.alertController.create({
            header: 'Errore',
            message: errorMessage,
            buttons: [
                {
                    text: 'OK',
                    handler: () => {
                        this.navController.navigateRoot('login');
                    }
                }
            ]
        });
        await alert.present();
    }
}
