import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Email } from 'src/models/email.model';
import { UxService } from './ux.service';
import { formatEmail } from './helper';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  url: string;

  constructor(private http: HttpClient, private uxService: UxService) {
    this.url = environment.API_URL;
  }

  sendGeneralTextEmail(data: Email): Observable<any> {
    return this.http.post<any>(`${this.url}/email/general-email.php`, data);
  }
  sendEmail(
    FromEmail: string,
    FromName: string,
    FromPhone: string,
    ToEmail: string,
    ToName: string,
    Subject: string,
    Message: string,
  ) {
    const emailToSend: Email = {
      FromEmail: FromEmail,
      FromName: FromName,
      FromPhone: FromPhone,
      ToEmail: ToEmail,
      ToName: ToName,
      Subject: Subject,
      Message: Message,
    };
    emailToSend.Message = formatEmail(emailToSend);
    this.sendGeneralTextEmail(emailToSend).subscribe((response) => {
      if (response > 0) {
        // this.uxService.updateUXState({
        //   Loading: false,
        //   Toast: {
        //     Title: 'Message sent!',
        //     Message:
        //       'Thank you for contacting us we will reply as soon as possible',
        //     Classes: ['_success'],
        //   },
        // });
        //Thank you for contacting us we will reply as soon as possible
      }
    });
  }
}
