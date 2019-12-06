import { Component } from '@angular/core';
import { UserService } from 'src/services/user.services';

@Component({
  selector: 'app-mojango',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(
    public service: UserService
  ) {
    //service.findAll().subscribe(this.getUserList)

    // ou

    service.findAll().subscribe(response => {
      console.log(response)
    })
  }

  getUserList(response) {
    console.log(response)
  }
}
