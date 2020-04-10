import { Component, OnInit } from '@angular/core';
import {UserService} from '../sevices/user.service';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../../Models/UserModel';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: UserModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data);
    this.users = this.activatedRoute.snapshot.data.allUsers ;
  }

  ngOnInit(): void {
  }

}
