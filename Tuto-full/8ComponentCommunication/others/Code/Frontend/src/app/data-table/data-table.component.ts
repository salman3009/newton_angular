import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { DashboardService } from "../dashboard.service";
import {Router} from '@angular/router';
import {CommonService} from '../common.service';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
       dietSelection="sf";
       currentDate=new Date();
       firstName:string;
       lastName:string;
       email:string;
       firstNameData:string;
       lastNameData:string;
       emailData:string;
       flag:boolean=false;
       dataTableArray:any;
       welcomeFlag:boolean=false;
       globalId:number;
       firstnameError:boolean=false;
       KRISFLYER_REGEXP = /^([8]{1}[0-9]{9})$/;
       tempFlag:boolean=false;
       dataGlobal:any[]=[];
       
  constructor(private objCommon:CommonService,private DashboardService:DashboardService,private router : Router) { 
    this.tempFlag=this.objCommon.adminFlag;
    this.dataGlobal=[{
      id:"23",
      name:"salman"
    },{
      id:24,
      name:"rajesh"
    }]
  }

  ngOnInit() {
    this.firstName="First";
    this.lastName="Last";
    this.email="EmailId";
    // this.initialDataLoad();
     this.getallData();

  }

  getallData()
  {
     this.objCommon.getBookingData().subscribe((response)=>{
            console.log(response.posts);
            this.dataTableArray=response.posts;
            console.log(this.dataTableArray);
     },(error)=>{
            console.log(error);
     });

  }

  emailCheck()
  {
    debugger
      // if(!this.KRISFLYER_REGEXP.test(this.firstNameData))
      // {
      //      alert("error");
      // }

      // this.router.navigate(['/login']);
  }

  updateCallData()
  {
this.dataTableArray[this.globalId].firstName=this.firstNameData;
this.dataTableArray[this.globalId].lastName=this.lastNameData;
this.dataTableArray[this.globalId].emailId=this.emailData;

  }
  getUpdateId(n)
  {
    this.globalId=n;
    console.log(this.globalId);
    this.firstNameData=this.dataTableArray[this.globalId].firstName;
    this.lastNameData=this.dataTableArray[this.globalId].lastName;
    this.emailData=this.dataTableArray[this.globalId].emailId;
  }
  initialDataLoad()
  {
    debugger;
    // this.DashboardService.getBookingDetails().subscribe((response)=>{
    //   this.dataTableArray=response.posts;
    //   console.log(this.dataTableArray);
    // },(error)=>{
    //   console.log(error);
    // });
  }

   call()

   {
    debugger;
    if(this.firstNameData!=undefined&&this.lastNameData!=undefined&&this.emailData!=undefined)
    {

      this.objCommon.postBookingData(this.firstNameData,this.lastNameData,this.emailData).subscribe((response)=>{
         console.log(response);
        this.dataTableArray.push(response.post)
         this.flag=true;
      },(error)=>{
        console.log(error);
      });

      
    }

    //  if(this.firstNameData==undefined)
    //  {
    //    this.firstnameError=true;
    //  }
    //  if(this.firstNameData!=undefined && this.lastNameData!=undefined && this.emailData!=undefined)
    //  {
    //   const post={firstName:this.firstNameData,lastName:this.lastNameData,emailId:this.emailData};
    //   this.DashboardService.postBookingDetails(post).subscribe((response)=>{
    //     this.dataTableArray.push({name:this.firstNameData,lastName:this.lastNameData,email:this.emailData});
    //     this.flag=true;
    //   },(error)=>{
    //     console.log(error);
    //   });
    //  }
    //  console.log(this.dataTableArray);
    
   }

   deleteBookingData(n)
   {
     debugger;
     const id=this.dataTableArray[n]._id;
     this.objCommon.deleteBookingData(id).subscribe((response)=>{
        this.dataTableArray.splice(n,1);
     },(error)=>{
       console.log(error);
     })
   }

   updateCall()
   {
    const post={firstName:this.firstNameData,lastName:this.lastNameData,emailId:this.emailData};
    this.DashboardService.updateBookingDetails(post,this.dataTableArray[this.globalId]._id).subscribe((response)=>{
      console.log(response);
      this.dataTableArray[this.globalId].firstName=this.firstNameData;
      this.dataTableArray[this.globalId].lastName=this.lastNameData;
      this.dataTableArray[this.globalId].emailId=this.emailData;
      this.globalId=null;
      this.firstNameData=null;
      this.lastNameData=null;
      this.emailData=null;
    },(error)=>{
      console.log(error);
    })
   }
   getId(n)
   {
     this.globalId=n;
     this.firstNameData=this.dataTableArray[n].firstName;
     this.lastNameData=this.dataTableArray[n].lastName;
     this.emailData=this.dataTableArray[n].emailId;
   }

}
