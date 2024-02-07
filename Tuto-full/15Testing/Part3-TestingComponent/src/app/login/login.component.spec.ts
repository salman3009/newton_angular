import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { RouterTestingModule } from '@angular/router/testing';
import {Router} from '@angular/router';
describe("Login Component Testing", () => {
  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule ],
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
    }).compileComponents();
  } );
});
it("Login - Success", () => {
  var comp = TestBed.createComponent(LoginComponent).debugElement.componentInstance;
  comp.userEmail = "salman444g@gmail.com";
  comp.userPassword = "12345";

  expect( comp.onSubmit()).toBe(true);
});


it("Login - Success - not to be true", () => {
  var comp = TestBed.createComponent(LoginComponent).debugElement.componentInstance;
  comp.userEmail = "salman444g@gmail.com";
  comp.userPassword = "12342323";

  expect( comp.onSubmit()).not.toBe(true);
});


it("Login - Password length should be less than 10", () => {
  var comp = TestBed.createComponent(LoginComponent).debugElement.componentInstance;
  comp.userPassword = "12345";
  expect(comp.userPassword.length).toBeLessThanOrEqual(10);
});


