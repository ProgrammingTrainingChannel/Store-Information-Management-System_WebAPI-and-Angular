import { Component } from '@angular/core';
import { IUser } from './shared/interfaces/user.interface';

@Component({
    templateUrl: '/app/app.component.html',
})

export class AppComponent {

    IsLogged: boolean;

    ngOnInit() {

        if (localStorage.getItem('token') != 'generated_token') {
            this.IsLogged = false;
        }
        else {
            this.IsLogged = true;
        }
    };

    user: IUser = {
        username: "",
        password: "",
        grant_type: "password"
    }

    Login(): void {
        localStorage.setItem('token', '-');
        if (this.user.username == "kassahun.abera@cartercenter.org" && this.user.password == "p@55w0rd") {
            localStorage.setItem('token', 'generated_token');
            alert("Welcome Kassahun, You can now access all features of the system.");
            this.IsLogged = true;
        }
        else if (this.user.username == "hannan.ahmed@cartercenter.org" && this.user.password == "p@55w0rd") {
            localStorage.setItem('token', 'generated_token');
            alert("Welcome Kassahun, You can now access all features of the system.");
            this.IsLogged = true;
        }
        else if (this.user.username == "mitiku.taddesse@cartercenter.org" && this.user.password == "p@55w0rd") {
            localStorage.setItem('token', 'generated_token');
            alert("Welcome Kassahun, You can now access all features of the system.");
            this.IsLogged = true;
        }
        else if (this.user.username == "amlakawit.bekele@cartercenter.org" && this.user.password == "p@55w0rd") {
            localStorage.setItem('token', 'generated_token');
            alert("Welcome Kassahun, You can now access all features of the system.");
            this.IsLogged = true;
        }
        else if (this.user.username == "admin@cartercenter.org" && this.user.password == "p@55w0rd") {
            localStorage.setItem('token', 'generated_token');
            alert("Welcome Kassahun, You can now access all features of the system.");
            this.IsLogged = true;
        }
        else {
            alert("Incorrect username or password, Please try again.");
        }
    };
}