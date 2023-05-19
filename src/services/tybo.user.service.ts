import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TyboUserService {
  url: string = 'https://editor.tybo.co.za/builder-api/api';
  private userBehaviorSubject?: BehaviorSubject<User>;
  public userObservable?: Observable<User>;

  constructor(private http: HttpClient) {
    let _user = localStorage.getItem('_tybo_user');
    let user = undefined;
    if (_user && _user !== 'undefined') {
      user = JSON.parse(_user);
    }
    this.userBehaviorSubject = new BehaviorSubject<User>(user);
    this.userObservable = this.userBehaviorSubject.asObservable();
  }
  updateUserState(user: User) {
    if (this.userBehaviorSubject) this.userBehaviorSubject.next(user);
    if (user) localStorage.setItem('_tybo_user', JSON.stringify(user));
    else localStorage.removeItem('_tybo_user');
  }
  public get getUser() {
    return this.userBehaviorSubject?.value;
  }
  update(data: User): Observable<User> {
    return this.http.post<User>(`${this.url}/user/update.php`, data);
  }
  add(data: User): Observable<User> {
    return this.http.post<User>(`${this.url}/user/add.php`, data);
  }
  getUsersByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/user/get-users.php?Role=${role}`);
  }
  getStat(): Observable<any> {
    return this.http.get<any>(`${this.url}/user/get-admin-stat.php`);
  }
  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/get.php?UserId=${userId}`);
  }

  login(data: User): Observable<User> {
    return this.http.post<User>(`${this.url}/user/login.php`, data);
  }

  getByEmail(data: {Email: string}): Observable<User> {
    return this.http.post<User>(`${this.url}/user/verify-email.php`, data);
  }
  logout(e: any) {
    if (this.userBehaviorSubject) this.userBehaviorSubject.next(e);
    localStorage.removeItem('_tybo_user');
  }
}
