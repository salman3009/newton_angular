import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,FormArray,Validators} from '@angular/forms';
import { ProfessionListService } from '../profession-list.service';
import { Profession } from '../profession';
import {HttpRequestService} from '../http-request.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public registerForm: FormGroup;
  public skillList:any[]=[];
  public professionDetailsList:Profession[]=[];
  public userCompany:any;
  constructor(public toastr: ToastrManager,public http:HttpRequestService,public professionList:ProfessionListService,private formBuilder: FormBuilder) {
    this.userCompany='[0-9a-zA-Z]{6,12}';

    this.registerForm=this.formBuilder.group({
      profession: ['',Validators.required],
      company:['',[Validators.pattern(this.userCompany),Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      website:['',Validators.required],
      location:['',Validators.required],
      skills:this.formBuilder.array([]),
      github:['',Validators.required],
      bio:['',Validators.required],
      socialNetwork: this.formBuilder.group({
        facebook:['',Validators.required],
        twitter:['',Validators.required],
        youtube:['',Validators.required],
        linkedin:['',Validators.required],
        instagram: ['',Validators.required]
      })
    });
    this.professionDetailsList=this.professionList.getProfessionList();
    this.registerForm.valueChanges.subscribe((current)=>{
      console.log(current);
    })
   }

  ngOnInit(): void {
 
  }

  get userFormGroups () {
    return this.registerForm.get('skills') as FormArray
  }

  getValidity(i:number) {
    return (<FormArray>this.registerForm.get('skills')).controls[i].invalid;
  }

  get f() { return this.registerForm.controls; }

  onAddSkill(){
    // this.skillList.push('Data');
    var formGroup = this.formBuilder.group({
      skillName: ['',Validators.required]
    });
    let items = this.registerForm.get("skills") as FormArray;
    items.push(formGroup);
    // (<FormArray>this.registerForm.get("skills")).push(formGroup);
  }

  onRemoveSkill(i:number){
    let items = this.registerForm.get("skills") as FormArray;
    items.removeAt(i);
  }

  onSubmitHandler():void{
    this.registerForm.patchValue({
      company:this.registerForm.value.company
    });
    let obj=this.registerForm.value;

    console.log("Final Submission",obj);
    this.http.ProfilePostDetials(obj).subscribe(()=>{
      this.toastr.successToastr('successfully fetched.', '', {
        position: 'bottom-right'
    });
    },()=>{
      this.toastr.errorToastr('unauthorized access.', 'Please try with correct credentials!');
    })
    this.registerForm.reset({
      company:'TCS'
    });
  }


}
