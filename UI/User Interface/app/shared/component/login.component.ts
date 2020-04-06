import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IUser } from '../interfaces/user.interface';

@Component({
    templateUrl: 'app/shared/template/login.component.html',
})

export class LoginComponent {
    private _route: ActivatedRoute;
    private _router: Router;
    constructor(private route: ActivatedRoute, private router: Router, private http: Http) {
        this._route = route;
        this._router = router;

        this.http = http;
    }

    user: IUser = {
        username: "",
        password: "",
        grant_type: "password"
    }

    Login(): void {
        
    };
}
