import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop4less';
  allUser: Object;
  isEdit=false;
  userObj={
    name :'',
    mobile:'',
    email:'',
    password:'',
    id:''
  }

  constructor(private commonService :CommonService){}
  ngOnInit(){
    this.getLatestUser();
  }
  addUser(formObj){
    console.log(formObj);


    this.commonService.creatUser(formObj).subscribe((response)=>{
      this.getLatestUser();

    })

  }
  getLatestUser(){
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser= response
    })
  }
  editUser(user){
    this.isEdit=true;
    this.userObj=user;
  }
  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }
  update(){
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(() =>{
      this.getLatestUser()
    })
  }
}
