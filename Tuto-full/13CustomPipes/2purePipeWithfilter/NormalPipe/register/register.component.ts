import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray} from '@angular/forms';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm: FormGroup;
  countries: Country[] = [];
  constructor(public countriesService:CountryService) { 
    this.countries = this.countriesService.getCountries();
    console.log(this.countries);
    this.signUpForm=new FormGroup({
      username:new FormControl("salman"),
      password:new FormControl(null),
      countryID: new FormControl(null),
      gender: new FormControl(null),
      receiveNewsLetters: new FormControl(null),
      skills: new FormArray([])
    });
  }

  ngOnInit(): void {

    this.signUpForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onAddSkill()
  {
    var formGroup = new FormGroup({
      skillName: new FormControl(null),
      level: new FormControl(null)
    });

    (<FormArray>this.signUpForm.get("skills")).push(formGroup);
  }

  onRemoveClick(index: number)
  {
    (<FormArray>this.signUpForm.get("skills")).removeAt(index);
  }
  
  onSubmitClick(){
    console.log(this.signUpForm.value);

    // this.signUpForm.patchValue({
    //   password:"123456"
    // })

    // this.signUpForm.setValue({
    //   username:"g",
    //   password:"123456"
    // })
    // console.log(this.signUpForm.value);

    this.signUpForm.reset();
    console.log(this.signUpForm.value);

    this.signUpForm.reset({
      username:'salman'
    });

  }

}
