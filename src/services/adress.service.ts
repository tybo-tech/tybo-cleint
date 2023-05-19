import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from 'src/models/adress.model';
import { User } from 'src/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
 
  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_URL;

  }

  add(data: Address): Observable<Address> {
    return this.http.post<Address>(`${this.url}/adresses/save.php`, data);
  }
  addAndreturnUser(data: Address): Observable<User> {
    return this.http.post<User>(`${this.url}/adresses/save.php`, data);
  }


  list(otherId: number): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.url}/adresses/list.php?OtherId=${otherId}`);
  }

  get(id: string) {
    return this.http.get<Address>(`${this.url}/adresses/get.php?AddressId=${id}`);
  }



}
