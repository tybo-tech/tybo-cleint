import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user.model';
import { Customer } from 'src/models/customer.model';
import { getId } from './helper';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string;
  private userBehaviorSubject?: BehaviorSubject<User>;
  public userObservable?: Observable<User>;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL;

    let _user = localStorage.getItem('_user');
    let user = undefined;
    if (_user && _user !== 'undefined') {
      user = JSON.parse(_user);
    }
    this.userBehaviorSubject = new BehaviorSubject<User>(user);
    this.userObservable = this.userBehaviorSubject.asObservable();
  }
  updateUserState(user: User) {
    if (this.userBehaviorSubject) this.userBehaviorSubject.next(user);
    if (user) localStorage.setItem('_user', JSON.stringify(user));
    else localStorage.removeItem('_user');
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
  getUserById(userId: number | string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/get.php?UserId=${userId}`);
  }
  getShop(userId: number): Observable<User> {
    return this.http.get<User>(
      `${this.url}/user/get-shop.php?UserId=${userId}`
    );
  }

  login(data: User): Observable<User> {
    return this.http.post<User>(`${this.url}/user/login.php`, data);
  }
  verifyEmail(Email: string): Observable<User> {
    return this.http.post<User>(`${this.url}/user/verify-email.php`, { Email });
  }
  logout(e: any) {
    if (this.userBehaviorSubject) this.userBehaviorSubject.next(e);
    localStorage.removeItem('_user');
  }

  initUser() {
    const id = getId('user');
    const user: User = {
      UserId: 0,
      DeliveryFee: 0,
      Name: '',
      Email: '',
      PhoneNumber: '',
      Password: '',
      Status: '',
      JoinDate: `${new Date()}`,
      Role: '',
      ParentId: 1,
      ImageUrl: '',
      Slug: id,
      Banner: '',
      GuidId: id,
      Background: '',
      Color: '',
      AddressLine: '',
      BankName: '',
      BankAccNo: '',
      BankAccHolder: '',
      BankBranch: '',
      AddressLineHome: '',
      Street: '',
      City: '',
      Province: '',
      PostalCode: '',
      Measurements: []
    };
    return user;
  }
  initUserFromCustomer(customer: Customer) {
    const id = getId('user');
    const user: User = {
      UserId: 0,
      DeliveryFee: 0,
      Name: customer.Name,
      Measurements: [],
      Email: customer.Email,
      PhoneNumber: customer.PhoneNumber,
      Password: customer.Password,
      Status: 'Active',
      JoinDate: `${new Date()}`,
      Role: 'Customer',
      ParentId: 1,
      ImageUrl: customer.Dp || '',
      Slug: id,
      Banner: '',
      GuidId: id,
      Background: '',
      Color: '',
      AddressLine: customer.AddressLineHome,
      BankName: '',
      BankAccNo: '',
      BankAccHolder: '',
      BankBranch: '',
      AddressLineHome: customer.AddressLineHome,
      Street: customer.Street,
      City: customer.City,
      Province: customer.Province,
      PostalCode: customer.PostalCode,
    };
    return user;
  }
}
