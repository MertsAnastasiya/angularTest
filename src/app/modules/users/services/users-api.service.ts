import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable()
export class UsersApiService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]>  {
    //@ts-ignore
    return this.http.get('http://localhost:3000/navigator').pipe(map((res) => res.data));
  }
}
