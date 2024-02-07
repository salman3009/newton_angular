import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray } from '@angular/forms';
import { CountriesService } from '../countries-service.service';
import { Country } from '../country';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  genders = [ "male", "female" ];
  countries: Country[] = []
  constructor(private countriesService: CountriesService) { }

  ngOnInit()
  {
    //part1
    this.countries = this.countriesService.getCountries();

    this.signUpForm = new FormGroup({
      firstName: new FormControl("salman"),
      gender: new FormControl(null),
      countryID: new FormControl(null),
      receiveNewsLetters: new FormControl(null),
      skills: new FormArray([])
    });

    

    //part 4
    // this.signUpForm = new FormGroup({
    //   personName: new FormGroup({
    //     firstName: new FormControl(null),
    //     lastName: new FormControl(null),
    //   }),
      
    //   email: new FormControl(null),
    //   mobile: new FormControl(null),
    //   dateOfBirth: new FormControl(null),
    //   gender: new FormControl(null),
    //   countryID: new FormControl(null),
    //   receiveNewsLetters: new FormControl(null),
    // });
//part 3 Subscribing to valueChanges observable
this.signUpForm.valueChanges.subscribe((value) => {
  console.log(value);
});
  }

  onSubmitClick()
  {
    //Display current form value
    //console.log(this.signUpForm.value);

    //setValue
    // this.signUpForm.setValue({
    //   firstName: "Adam",
    //   lastName: "Smith",
    //   email: "smith@gmail.com",
    //   mobile: "9876543210",
    //   dateOfBirth: "2020-01-01",
    //   gender: "male",
    //   countryID: 3,
    //   receiveNewsLetters: true
    // });

    //patchValue
    // this.signUpForm.patchValue({
    //   firstName: "Adam",
    //   lastName: "Smith",
    //   email: "smith@gmail.com"
    // });

    //reset
    this.signUpForm.reset();

    //reset with Parameters
    this.signUpForm.reset({
      firstName: "Adam",
      lastName: "Smith",
      email: "smith@gmail.com"
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
}
