import { Injectable } from '@angular/core';
import {User} from "./interface/User";
import {Follower} from "./interface/Follower";

@Injectable()
export class UserModelService {
  public user: User;
  public followers: Follower[];

  constructor() { }

  public loadUser() {

  }
  public loadFollowers(){

  }
}
