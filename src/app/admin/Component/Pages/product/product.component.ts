import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatButtonModule, MatStepperModule, MatInputModule , ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {




  Products = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  Categories = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  Brands = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  Units = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  Barcode = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
