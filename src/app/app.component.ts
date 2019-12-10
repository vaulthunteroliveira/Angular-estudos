import { Component } from '@angular/core';
import { UserService } from 'src/services/user.services';
import { UserDTO } from 'src/models/user.dto';

@Component({
  selector: 'app-mojango',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  obj: Object;

  constructor(
    public service: UserService
  ) {

    service.findAll().subscribe(res => {
      this.obj = res;
      console.log(this.obj)
    }, error =>{

    })
  }

  teste(id){
    this.service.getUserById(id).subscribe(res =>{
      console.log(res)
    }, 
    error => {})
  }
}
