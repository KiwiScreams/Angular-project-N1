import { NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
export enum Role 
{
  Admin = 'Admin',
  User = 'User',
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularDavaleba';
  isActive = false;
  visible = true;
  roleAdmin = Role.Admin;
  Delete() 
  {
    this.visible = !this.visible;
  }
  Activate()
  {
    this.isActive = !this.isActive;
  }
  userRole = Role;
  users: 
  {
    firstName: string;
    lastName: string;
    role?: Role;
    id: number;

  }[] = [
      {
        firstName: 'John',
        lastName: 'Black',
        role: Role.Admin,
        id: 1
      },
      {
        firstName: 'Nino',
        lastName: 'Johnson',
        role: Role.User,
        id: 2
      },
    ];
}
