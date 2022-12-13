import { FanService } from './../../shared/services/fan.service';
import { Fan } from './../../shared/models/fan.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listFan! : Fan[]
  constructor(
    private fanService : FanService
  ) { }

  ngOnInit(): void {
    this.listFan = this.fanService.getList()
  }

}
