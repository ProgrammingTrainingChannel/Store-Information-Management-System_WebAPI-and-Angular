"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.user = {
            username: "",
            password: "",
            grant_type: "password"
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != 'generated_token') {
            this.IsLogged = false;
        }
        else {
            this.IsLogged = true;
        }
    };
    ;
    AppComponent.prototype.Login = function () {
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
    ;
    AppComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/app.component.html',
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map