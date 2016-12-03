import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserModelService} from "./_internal/user-model.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public userName: string;

  constructor(public userModel: UserModelService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params
      .subscribe((value) => {
        this.userName = value['userName'];
        this.userModel.init(this.userName);
      });
  }

}
