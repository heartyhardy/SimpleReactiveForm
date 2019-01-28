import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  isSubmitted:boolean=false;

  // Form controls
  firstName=new FormControl('');
  lastName=new FormControl('');
  email=new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  OnSubmit():void
  {
    this.isSubmitted=true;
  }

  OnReset()
  {
    this.firstName.setValue('');
    this.lastName.setValue('');
    this.email.setValue('');
    this.isSubmitted=false;
  }
}
