import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../app/layout/task1/user";

@Injectable()
export class MockDataService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("assets/mock/MOCK_DATA_USER.json");
  }
}