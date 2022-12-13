import { Fan } from './../../shared/models/fan.model';
import { FanService } from './../../shared/services/fan.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from 'src/app/shared/validators/age.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  fg! : FormGroup

  constructor(
    private fanService : FanService,
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg = this.initForm()
  }

  initForm() : FormGroup {
    return this.builder.group({
      nom : [null, Validators.required],
      dateNaissance : [null, AgeValidator(13)],
      series : this.builder.array([])
    })
  }

  submitForm() {
    this.fanService.creation(this.fg.value)
    console.log(this.fg.value)
  }

  getSeriesArray() : FormArray {
    return this.fg.controls['series'] as FormArray
  }

  ajouterSerie(){
    this.getSeriesArray().push(new FormControl('', Validators.required))
  }

}
