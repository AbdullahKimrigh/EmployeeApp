import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'App';

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  
  fName: string = ' ';
  lName: string = ' ';
  myUrl: string = ' ';
  age = '';

  InfoForm = this.formBuilder.group({
    Fname: ' ',
    Lname: ' ',
    Uyear: ' '
  });

  onSubmit() {
    // this.fullName = function (data: { Fname: string; Lname: string; }) {
    //   return data.Fname + ' ' + data.Lname
    // }
    // this.myUrl = function $location {
    //   return location.myUrl
    // }
    // this.age = function (){
    //   return data.age
    // }
    this.InfoForm.reset();
  }
}