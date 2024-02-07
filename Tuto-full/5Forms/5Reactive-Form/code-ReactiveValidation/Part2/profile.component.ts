import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,FormBuilder,Validators} from '@angular/forms';
import  {ProfessionListService} from '../profession-list.service';
import {Profession} from '../profession';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public registerForm:FormGroup;
  public socialNetwork:boolean=false;
  public list:Profession[]=[];
  public skillsList:any[]=[''];
  public unamePattern:any;
  constructor(public profession:ProfessionListService,private formBuilder: FormBuilder) {
    this.list=this.profession.getProfessionList();
    console.log(this.list[0].keyword);
    this.unamePattern = "^[a-z0-9_-]{8,15}$";
    this.registerForm =this.formBuilder.group({
      profession: ['',Validators.required],
      location:['',Validators.required],
      website:['',Validators.required],
      github:['',Validators.required],
      bio:['',Validators.required],
      skills:this.formBuilder.array([]),
      company:['',[Validators.pattern(this.unamePattern),Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      social:this.formBuilder.group({
        facebook: ['',Validators.required],
        youtube: ['',Validators.required],
        instagram: ['',Validators.required],
        twitter: ['',Validators.required],
        linkedin: ['',Validators.required]
      })
    })
    this.registerForm.valueChanges.subscribe((obj)=>{
      console.log(obj);
    })
   }

   get userFormGroups () {
    return this.registerForm.get('skills') as FormArray
  }

  ngOnInit(): void {
  }

  get f() { return this.registerForm.controls; }

  onSubmitHandler():void{
   console.log(this.registerForm.value);
  //  this.registerForm.setValue({
  //    location:'Bangalore'
  //  });
   console.log(this.registerForm.value);
   this.registerForm.reset({
     profession:'Developer'
   });
  }

  onSocialHandler():void{
    this.socialNetwork =!this.socialNetwork;
  }
  // onAddSkillHandler(){
  //   // this.skillsList.push('');
  //   var formGroup = new FormGroup({
  //     skillName: new FormControl(null)
  //   });

  //   (<FormArray>this.registerForm.get("skills")).push(formGroup);
  // }
  // onRemoveSkillHandler(i:number){
  //   (<FormArray>this.registerForm.get("skills")).removeAt(i);
  // }

  onAddSkill(){
    var formGroup = this.formBuilder.group({
      skillName:''
    });
    let items = this.registerForm.get('skills') as FormArray;
    items.push(formGroup);
  }

  onRemoveSkill(i:number){
    let items = this.registerForm.get('skills') as FormArray;
    items.removeAt(i);
  }
}
