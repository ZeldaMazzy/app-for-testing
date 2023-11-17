import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public user!: {name: string}
  public isLoggedIn: boolean = false;

  constructor(private userService: UserService) {
    this.user = userService.user;
  }
}
