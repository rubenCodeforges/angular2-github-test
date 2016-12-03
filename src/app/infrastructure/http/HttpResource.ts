import {Response, RequestOptionsArgs, Http} from "@angular/http";
import {HttpExceptionHandler} from "./HttpExceptionHandler";
import {Observable} from "rxjs";

export class HttpResource {

  constructor(private http: Http){}

  protected static API_URL: string = 'https://api.github.com';

  protected get<T>(url: string, options?: RequestOptionsArgs): Observable<T>  {
    return this.http.get(url)
      .map(HttpResource.toJsonResponse)
      .catch(HttpExceptionHandler.handleError);
  }

  private static toJsonResponse(response: Response) {
    let body = response.json();
    return body || {};
  }

}
