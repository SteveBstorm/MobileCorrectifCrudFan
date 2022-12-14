import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Fan } from 'src/app/shared/models/fan.model';
import { FanService } from 'src/app/shared/services/fan.service';
import { AgeValidator } from 'src/app/shared/validators/age.validator';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  currentId! : number
  currentFan! : Fan

  fg! : FormGroup
  constructor(
    private ar : ActivatedRoute,
    private fanService : FanService,
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.currentId = this.ar.snapshot.params['id']
    this.currentFan = this.fanService.getByIndex(this.currentId)
    this.fg = this.initForm()
    this.currentFan.series.forEach(s => {
      this.getSeriesArray().push(new FormControl(s, Validators.required))
    })
  }

  initForm() : FormGroup {
    return this.builder.group({
      nom : [this.currentFan.nom, Validators.required],
      dateNaissance : [this.currentFan.dateNaissance, AgeValidator(13)],
      series : this.builder.array([])
    })
  }
  submitForm() {
    this.fanService.update(this.fg.value, this.currentId)
    console.log(this.fg.value)
  }

  getSeriesArray() : FormArray {
    return this.fg.controls['series'] as FormArray
  }

  ajouterSerie(){
    this.getSeriesArray().push(new FormControl('', Validators.required))
  }

  deleteSerie(index : number){
    this.getSeriesArray().removeAt(index)
  }

}
