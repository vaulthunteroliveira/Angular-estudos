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

  listUsers: UserDTO;

  constructor(
    public service: UserService
  ) {
    //esse trecho de código recebe uma função, getUserList, como parametro.
    //service.findAll().subscribe(this.getUserList)

    // ou

    //esse trecho faz o mesmo que o anterior, porém com uma função anonima.
    service.findAll().subscribe(res => {
      this.listUsers = res.data;
      console.log(this.listUsers);
    }, error =>{

    })
  }

  // getUserList(response) {
  //   console.log(response)
  // }
}
