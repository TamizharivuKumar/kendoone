import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalizedRangeSliderMessagesDirective } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  registrationForm!: FormGroup;
  loadwe() {
    this.registrationForm.setValue({
      userName: 'Bruce',
      password: 'Batman',
      Confirpassword: 'Batman',
      address:
      {
        city: 'Gotham',
        state: 'Arkham',
        country: 'USA'
      }
    });
  }
  constructor(private formbuilder: FormBuilder) { }
  ngOnInit(): void {
    this.registrationForm = this.formbuilder.group(
      {
        userName: ['', [Validators.required, Validators.minLength(5)]],
        password: ['',[Validators.required, Validators.minLength(8)]],
        Confirpassword: ['',[Validators.required, Validators.minLength(8)]],
        address: this.formbuilder.group(
          {
            city: ['',[Validators.required, Validators.minLength(5)]],
            state: ['',[Validators.required, Validators.minLength(5)]],
            country: ['',[Validators.required, Validators.minLength(5)]]
          }
        )
      }
    );
  }
  get userName() { return this.registrationForm.get('userName'); }
  get passworf() { return this.registrationForm.get('password'); }
}
