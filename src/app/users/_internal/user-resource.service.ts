import { Injectable } from '@angular/core';
import {HttpResource} from "../../infrastructure/http/HttpResource";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {User} from "./interface/User";
import {Follower} from "./interface/Follower";

@Injectable()
export class UserResourceService extends HttpResource{

  private endpoint: string = `${HttpResource.API_URL}/users`;

  constructor(http: Http) {
    super(http);
  }

  public findUserByUserName(userName: string): Observable<User>{
    return this.get<User>(`${this.endpoint}/${userName}`);
  }

  public findUserFollowers(userName: string): Observable<Follower[]> {
    return this.get<Follower[]>(`${this.endpoint}/${userName}/followers`);
  }

}



