import { Component } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public user!: {name: string}
  public isLoggedIn: boolean = false;
  public data: string = "";

  constructor(private userService: UserService, private dataService: DataService) {
    this.user = userService.user;

    dataService.getDetails()
      .then(response => {
        this.data = response;
      })
  }
}
