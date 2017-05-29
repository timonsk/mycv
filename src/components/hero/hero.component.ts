import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.less']
})
export class HeroComponent implements OnInit {
    public avatarImagePath: string;

    ngOnInit(): void {
        this.avatarImagePath = require("../../assets/img/avatar.png");
    }
}

