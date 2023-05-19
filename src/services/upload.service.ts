import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url: string;
  constructor(
    private http: HttpClient,
  ) {
    this.url = environment.API_URL;
  }


  uploadFile(formData:any): Observable<any> {
    return this.http.post<any>(`${this.url}/upload/upload.php`,
      formData
    );
  }


  doneUplaoding(response: any, product:any, user:any, variationOption:any, promaotion:any,company:any) {
    if (response) {
      if (product) {
        product.FeaturedImageUrl = `${environment.API_URL}/upload/${response}`;
      }
      if (user) {
        user.Dp = `${environment.API_URL}/upload/${response}`;
      }
      if (variationOption) {
        variationOption.ImageUrl = `${environment.API_URL}/upload/${response}`;
      }
      if (promaotion) {
        promaotion.ImageUrl = `${environment.API_URL}/upload/${response}`;
      }
      if (company) {
        company.Dp = `${environment.API_URL}/upload/${response}`;
      }
    }
  }




  dataURLToBlob(dataURL :any) {
    const BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) === -1) {
      // tslint:disable-next-line: no-shadowed-variable
      const parts = dataURL.split(',');
      // tslint:disable-next-line: no-shadowed-variable
      const contentType = parts[0].split(':')[1];
      // tslint:disable-next-line: no-shadowed-variable
      const raw = parts[1];

      return new Blob([raw], { type: contentType });
    }

    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;

    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

}
