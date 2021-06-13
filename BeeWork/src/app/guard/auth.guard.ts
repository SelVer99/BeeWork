import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild} from '@angular/router';
import {UtenteService} from '../services/utente.service';
import {NavController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private utenteService: UtenteService, private navController: NavController) {}

    canActivate(): Observable<boolean> {
        return this.utenteService.isLogged().pipe(
                map((isLoggedIn: boolean) => {
                    if (!isLoggedIn) {
                        this.navController.navigateRoot('login');
                        return false;
                    }
                    return true;
                })
            );
    }

}
