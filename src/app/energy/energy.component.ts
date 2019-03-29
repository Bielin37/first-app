import { Validators, FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent implements OnInit {

  sume: number;
  monthForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.monthForm = this.buildMonthForm();
  }

  buildMonthForm(){
    return this.formBuilder.group({
      one: ['', Validators.required],
      two: ['', Validators.required],
      three: ['', Validators.required],
      four: ['', Validators.required],
      five: ['', Validators.required],
      six: ['', Validators.required],
      seven: ['', Validators.required],
      eight: ['', Validators.required],
      nine: ['', Validators.required],
      ten: ['', Validators.required],
      eleven: ['', Validators.required],
      twelve: ['', Validators.required]
    });
  }

  count(one: number, two: number, three: number, four: number,
    five: number, six: number, seven: number,
    eight: number, nine: number, ten: number,
    eleven: number, twelve: number){
      this.sume = +one + +two + +three + +four + +five
      + +six + +seven + +eight + +nine + +ten + +eleven
      + +twelve;
  }

}
