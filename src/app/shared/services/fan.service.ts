import { Fan } from './../models/fan.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  private listeFan : Fan[] = []
  constructor(
    private router : Router
  ) { }

  creation(newFan : Fan) {
    this.listeFan.push(newFan)
    this.router.navigate(['list'])
  }

  getList() : Fan[] {
    return this.listeFan
  }

  getByIndex(index : number) : Fan {
    return this.listeFan[index]
  }

  update(fan : Fan, index : number) {
    this.listeFan[index] = fan
    this.router.navigate(['list'])
  }

  deleteSerie(idFan : number, idSerie : number){
    this.listeFan[idFan].series.splice(idSerie,1)
  }
}
