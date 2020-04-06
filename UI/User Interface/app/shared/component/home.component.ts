import { Component } from '@angular/core';

@Component({
    templateUrl: '../app/shared/template/home.component.html',
})

export class HomeComponent {
    ngOnInit() {
        console.log("Loaded");
    }
}