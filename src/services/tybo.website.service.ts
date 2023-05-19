import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ElementModel,
  PageModel,
  WebsiteModel,
} from 'src/models/website.model';

@Injectable({
  providedIn: 'root',
})
export class TyboWebsiteService {
  url: string = 'https://editor.tybo.co.za/builder-api/api/website';
  url2: string = 'https://editor.tybo.co.za/builder-api/api/element';

  constructor(private http: HttpClient) {}

  // Website
  save(data: WebsiteModel): Observable<WebsiteModel> {
    return this.http.post<WebsiteModel>(`${this.url}/save.php`, data);
  }

  get(id: string): Observable<WebsiteModel> {
    return this.http.get<WebsiteModel>(`${this.url}/get.php?WebsiteId=${id}`);
  }

  getListByUrl(url: string): Observable<any[]> {
    return this.http.get<any[]>(`${url}`);
  }
  getSingleByUrl(url: string): Observable<any> {
    return this.http.get<any>(`${url}`);
  }
  searchUnsplash(query: string): Observable<any> {
    return this.http.get<any>(
      `https://api.unsplash.com/search/photos/?client_id=Hhc36pUTXJx05-MQGUEZwbGLfVNvkHLi5GV9IE3wC9Q&query=${query}`
    );
  }
  list(ownerId: string): Observable<WebsiteModel[]> {
    return this.http.get<WebsiteModel[]>(
      `${this.url}/list.php?OwnerId=${ownerId}`
    );
  }

  //Page
  savePage(data: PageModel): Observable<PageModel> {
    return this.http.post<PageModel>(`${this.url}/save-page.php`, data);
  }
  deletePage(data: PageModel): Observable<PageModel> {
    return this.http.post<PageModel>(`${this.url}/delete-page.php`, data);
  }
  addPageRange(data: PageModel[]): Observable<PageModel[]> {
    return this.http.post<PageModel[]>(`${this.url}/save-page-range.php`, data);
  }

  // Elements
  saveElement(data: ElementModel): Observable<ElementModel> {
    return this.http.post<ElementModel>(`${this.url2}/save.php`, data);
  }
  saveElementRange(data: ElementModel[]): Observable<ElementModel[]> {
    return this.http.post<ElementModel[]>(`${this.url2}/save-range.php`, data);
  }
  deleteElementRange(data: ElementModel[]): Observable<ElementModel[]> {
    return this.http.post<ElementModel[]>(`${this.url2}/delete.php`, data);
  }
}
