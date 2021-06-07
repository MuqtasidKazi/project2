import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  activeSection = 1;

  constructor(
    private pageScrollService: PageScrollService, 
    @Inject(DOCUMENT) private document: any
  ) { }

  fullPageScroll(e: HTMLElement, i) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document
    });

    this.activeSection = i;
  }
  public tname=[];
  public totkills=[];

public data=[];

  public NoOfTeams= [
    { number: 1},
    { number: 2},
    { number: 3},
    { number: 4},
    { number: 5},
    { number: 6},
    { number: 7},
    { number: 8},
    { number: 9},
    { number: 10},
    { number: 11},
    { number: 12},
    { number: 13},
    { number: 14},
    { number: 15},
    { number: 16},
    { number: 17},
    { number: 18},
    { number: 19},
    { number: 20},
    { number: 21},
    { number: 22},
    { number: 23},
    { number: 24},
    { number: 25}
  ]
public teams: number;

storeData(name:string,kills:number){
    this.data=[
    {teamname: name, kill:kills}
  ]
}

}
