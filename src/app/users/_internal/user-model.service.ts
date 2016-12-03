import { Injectable } from '@angular/core';
import {User} from "./interface/User";
import {Follower} from "./interface/Follower";
import {UserResourceService} from "./user-resource.service";

@Injectable()
export class UserModelService {
  public user: User;
  public followers: Follower[];

  constructor(private userResource: UserResourceService) { }

  public loadUser(userName: string = 'rubenCodeforges') {
    return this.userResource.findUserByUserName(userName).subscribe((user)=>{
      this.user = user;
    })
  }
  public loadFollowers(userName: string){
    return this.userResource.findUserFollowers(userName).subscribe((followers: Follower[])=>{
      this.followers = followers;
    })
  }

  public init(userName: string) {
    this.reset();
    this.loadUser(userName);
    this.loadFollowers(userName);
  }

  private reset() {
    // undefined instead of null as per TypeScript coding guide
    this.user = undefined;
    this.followers = undefined;
  }
}
