import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { Email } from 'src/models/email.model';
import { User } from 'src/models/user.model';
import { IMoving } from 'src/models/ux.model';
import {
  WebsiteModel,
  ElementModel,
  EventModel,
} from 'src/models/website.model';
import { CmsService } from 'src/services/cms.service';
import { COMPANY_EMIAL } from 'src/services/constants';
import { EmailService } from 'src/services/email.service';
import { EVENTS } from 'src/services/event-helper';
import {
  ELEMENT_TYPES,
  formatEmail,
  geElementsByIdList,
  getElementById,
  getFormElements,
  getInputType,
  isFormInput,
  isText,
  renderIcons,
} from 'src/services/helper';
import { StateService } from 'src/services/state.service';
import { TyboWebsiteService } from 'src/services/tybo.website.service';
import { UserService } from 'src/services/user.service';
import { UxService } from 'src/services/ux.service';

@Directive({
  selector: '[appUiRender]',
})
export class UiRenderDirective implements OnInit {
  @Input() pagePrefix?: string;
  moving?: IMoving;
  website?: WebsiteModel;
  user?: User;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private uxService: UxService,
    private stateService: StateService,
    private tyboWebsiteService: TyboWebsiteService,
    private cmsService: CmsService,
    private router: Router,
    private userService: UserService,
    private emailService: EmailService
  ) {}
  ngOnInit() {
    this.stateService.stateObservable?.subscribe((data) => {
      this.website = data;
      if (this.website) {
        this.loadBodyUI();
      }
    });
    // this.renderer.addClass('', '');
    this.uxService.uxObservable.subscribe((data) => {
      this.moving = data?.Moving;
    });

    this.userService.userObservable?.subscribe((user) => {
      if (user && user.UserId) {
        this.user = user;
      }
    });
  }

  loadBodyUI = () => {
    if (
      this.website &&
      this.website.Page &&
      this.website.Page.Sections.length
    ) {
      this.renderBody(this.website.Page.Sections[0]);
    }
  };

  renderSectionBetta(el: ElementModel, parentId: string) {
    if (el.Type === ELEMENT_TYPES.section) {
      const section = document.createElement('section');
      this.addEvent(section, el);
      if (el.SelectorName.length) section.className = el.SelectorName[0];
      section.id = el.ElementId || '';
      const body = document.getElementById(parentId);
      if (body) this.renderer.appendChild(body, section);

      if (el.Children.length) {
        el.Children.forEach((child) => this.renderElementBetta(child, section));
      }
    }
  }

  renderBody(el: ElementModel) {
    // console.log({ betta: el });
    if (el.Type === ELEMENT_TYPES.body) {
      // debugger
      this.elementRef.nativeElement.childNodes.forEach((node: any) => {
        this.renderer.removeChild(this.elementRef.nativeElement, node);
      });
      setTimeout(() => {
        const body = this.renderer.createElement('main');
        if (el.SelectorName.length) body.className = el.SelectorName[0];
        body.id = el.ElementId || '';
        this.renderer.appendChild(this.elementRef.nativeElement, body);
        if (el.Children.length) {
          el.Children.forEach((child) => {
            this.renderSectionBetta(child, body.id);
          });
        }
      }, 1);
    }
  }

  renderElementBetta(el: ElementModel, parent: Element) {
    if (
      el.Type === ELEMENT_TYPES.container ||
      el.Type === ELEMENT_TYPES.centerContainer ||
      el.Type === ELEMENT_TYPES.form ||
      el.Type === ELEMENT_TYPES.dataList ||
      el.Type === ELEMENT_TYPES.grid
    ) {
      const container = document.createElement('div');
      if (el.SelectorName.length) {
        el.SelectorName.forEach((x) => container.classList.add(x));
      }
      container.id = el.ElementId || '';
      if (parent) this.renderer.appendChild(parent, container);

      if (el.Children.length) {
        el.Children.forEach((child) =>
          this.renderElementBetta(child, container)
        );
      }
    }

    if (isText(el.Type)) {
      const element = document.createElement(el.Type);
      if (el.SelectorName.length) {
        el.SelectorName.forEach((x) => element.classList.add(x));
      }
      element.id = el.ElementId || '';
      element.innerHTML = el.Data;
      renderIcons(el, element);

      this.addEvent(element, el);
      if (parent) this.renderer.appendChild(parent, element);
    }
    if (isFormInput(el.Type)) {
      const element = document.createElement('input');
      if (el.SelectorName.length) {
        el.SelectorName.forEach((x) => element.classList.add(x));
      }
      element.id = el.ElementId || '';
      element.type = getInputType(el.Type);
      element.value = el.Data;
      this.addEvent(element, el);
      if (parent) this.renderer.appendChild(parent, element);
    }
    if (el.Type === ELEMENT_TYPES.button) {
      const element = document.createElement(el.Type);
      if (el.SelectorName.length) {
        el.SelectorName.forEach((x) => element.classList.add(x));
      }
      element.id = el.ElementId || '';
      element.innerHTML = el.Data;
      this.addEvent(element, el);
      if (parent) this.renderer.appendChild(parent, element);
    }
    if (el.Type === ELEMENT_TYPES.img) {
      const element = document.createElement('img');
      if (el.SelectorName.length) {
        el.SelectorName.forEach((x) => element.classList.add(x));
      }
      element.id = el.ElementId || '';
      element.src = el.Data;

      if (parent) this.renderer.appendChild(parent, element);
    }

    if (el.Type === ELEMENT_TYPES.icon) {
      const element = document.createElement('i');
      if (el.SelectorName.length) {
        el.SelectorName.forEach((x) => element.classList.add(x));
        // element.className = el.SelectorName[0];
        this.addEvent(element, el);
      }
      element.id = el.ElementId || '';
      element.innerHTML = el.Data;
      if (parent) parent.appendChild(element);
    }
  }
  addEvent(htmlElement: HTMLElement, element: ElementModel) {
    htmlElement.addEventListener('click', (e) => {
      e.stopPropagation();
      this.buttonClick(element, 0, htmlElement);
    });
    // htmlElement.setAttribute(
    //   'href',
    //   `/${this.pagePrefix}/${this.website?.WebsiteId}/`
    // );
    if (element.Type === ELEMENT_TYPES.a && element.Events?.length) {
      const e = element.Events.find((x) => x.Type === EVENTS.NavigateToPage.Id);
      if (e) {
        const page = this.website?.Pages.find((x) => x.PageId === e.TargetId);
        if (page) {
          // htmlElement.setAttribute(
          //   'href',
          //   `/${this.pagePrefix}/${this.website?.WebsiteId}${page.Url}`
          // );
        }
      }
    }
  }

  // Events

  buttonClick(element: ElementModel, index: number, htmlElement?: HTMLElement) {
    const event = element?.Events[index];
    if (!event) return;
    if (event.Type === 'add-to-cart') {
      return;
    }

    if (event.Type === EVENTS.CreateCollectionItem.Id) {
      this.addItem(element, index);
      return;
    }
    if (event.Type === EVENTS.Togle.Id) {
      this.toggle(element, index);
      return;
    }

    if (event.Type === EVENTS.Show.Id || event.Type === EVENTS.Hide.Id) {
      this.showElemet(element, index, event);
      return;
    }
    if (event.Type === EVENTS.NavigateToPage.Id) {
      this.navigateToPage(event);
      return;
    }

    const data = this.getFormValues(element);
    if (!data) return;
    if (data.Email && data.Password) {
      this.login(data);
    }
    if (data.WhatsAppNumber) {
      this.subcribeWhatsAppNumber(data['WhatsAppNumber']);
    }
    if (data.Email && data.Phone && data.Name && data.Message) {
      this.sendEmail(data);
    }
  }
  navigateToPage(event: EventModel) {
    console.log(event);
    const page = this.website?.Pages.find((x) => x.PageId === event.TargetId);
    if (page) {
      this.router.navigate([`/home/${page.Url || page.PageId}`]);
    }
  }
  showElemet(element: ElementModel, index: number, event: EventModel) {
    if (!this.website) return;
    if (element && element.Events?.length && this.website) {
      const htmlElement = document.getElementById(event.TargetId);
      if (event.Type === EVENTS.Hide.Id && htmlElement) {
        htmlElement.style.display = 'none';
        return;
      }
      if (event.Type === EVENTS.Show.Id && htmlElement) {
        htmlElement.style.display = 'flex';
        return;
      }

      // this.stateService.updateWebsiteState(this.website);
      this.buttonClick(element, Number(index) + 1);
    }
  }

  toggle(element: ElementModel, index: number) {
    if (!this.website) return;
    if (element && element.Events?.length && this.website) {
      let target = getElementById(
        element.Events[index].TargetId,
        this.website.Sections
      );
      if (!target && this.website.Page)
        target = getElementById(
          element.Events[index].TargetId,
          this.website.Page.Sections
        );
      if (target && target.PcStyles && target.PcStyles['display'] === 'flex')
        target.PcStyles['display'] = 'none';

      if (target && target.PcStyles && target.PcStyles['display'] === 'none')
        target.PcStyles['display'] = 'flex';

      if (target && target.TabStyles && target.TabStyles['display'] === 'flex')
        target.TabStyles['display'] = 'none';

      if (target && target.TabStyles && target.TabStyles['display'] === 'none')
        target.TabStyles['display'] = 'flex';

      if (
        target &&
        target.PhoneStyles &&
        target.PhoneStyles['display'] === 'flex'
      )
        target.PhoneStyles['display'] = 'none';

      if (
        target &&
        target.PhoneStyles &&
        target.PhoneStyles['display'] === 'none'
      )
        target.PhoneStyles['display'] = 'flex';

      this.stateService.updateWebsiteState(this.website);
      this.buttonClick(element, Number(index) + 1);
    }
  }
  addItem(element: ElementModel, index: number) {
    // debugger;
    if (!this.website || !element.Events.length) return;
    if (element.Events.length) {
      const ids: string[] = [];
      element.Events[index].DataMapping?.forEach((x) => {
        if (x.DataType === 'Form input' && x.ElementId) {
          ids.push(x.ElementId);
        }
      });
      if (ids.length) {
        const table = this.website.CMSCollections?.find(
          (x) => x.Id === element.Events[index].TableId
        );
        const values = geElementsByIdList(this.website, ids);
        if (values.length && table) {
          const records = this.cmsService.initData(table);
          // console.log({
          //   Grecord: records,
          //   Gvalues: values,
          //   Gevent: element.Events[index].DataMapping,
          // });

          records?.forEach((record) => {
            const check = element.Events[index].DataMapping?.find(
              (x) => x.ColumnId === record.ColumnId
            );
            if (check && check.DataType === 'Form input' && check.ElementId) {
              record.Value =
                values.find((x) => x.ElementId === check.ElementId)?.Data || '';
            }
            if (check && check.DataType === 'Static') {
              record.Value = check.ElementId || '';
            }
          });
          if (records?.length)
            this.cmsService.saveRange(records).subscribe((data) => {
              debugger;
              this.buttonClick(element, Number(index) + 1);
            });
          console.log(records);
        }
      }
    }
  }

  login(value: any) {
    this.userService.login(value).subscribe((user) => {
      if (user && user.UserId) {
        this.userService.updateUserState(user);
        if (user && user.Role === 'Admin') {
          this.router.navigate(['admin']);
        }
      }
    });
  }

  getFormValues(element: ElementModel) {
    if (
      element &&
      element.FormId &&
      this.website &&
      this.website.Page?.Sections
    ) {
      const formElemnts = getFormElements(
        element?.FormId,
        this.website.Page.Sections
      );
      if (formElemnts && formElemnts.length) {
        const data: any = {};
        formElemnts.forEach((e) => {
          data[e.Name] = e.Data;
        });
        return data;
      }
    }
  }
  sendEmail(data: any) {
    const emailToSend: Email = {
      FromEmail: data.Email,
      FromName: data.Name,
      FromPhone: data.Phone,
      ToEmail: COMPANY_EMIAL,
      ToName: 'Admin',
      Subject: data.Name + ' Enquiry',
      Message: data.Message,
    };
    emailToSend.Message = formatEmail(
      emailToSend,
      'https://sizakhelelogistics.co.za/assets/sizakhelelogistics/logo.jpg'
    );
    this.uxService.updateUXState({ Loading: true });
    this.emailService
      .sendGeneralTextEmail(emailToSend)
      .subscribe((response) => {
        if (response > 0) {
          this.uxService.updateUXState({
            Loading: false,
            Toast: {
              Title: 'Message sent!',
              Message:
                'Thank you for contacting us we will reply as soon as possible',
              Classes: ['_success'],
            },
          });
          this.router.navigate(['/']);
          //Thank you for contacting us we will reply as soon as possible
        }
      });
  }

  subcribeWhatsAppNumber(number_: string) {
    const emailToSend: Email = {
      FromEmail: 'system@mattressandco.co.za',
      FromName: '',
      FromPhone: '',
      ToEmail: COMPANY_EMIAL,
      ToName: 'Admin',
      Subject: 'New whatsapp number subscriber',
      Message: number_,
    };
    emailToSend.Message = formatEmail(emailToSend);
    this.uxService.updateUXState({ Loading: true });
    this.emailService
      .sendGeneralTextEmail(emailToSend)
      .subscribe((response) => {
        if (response > 0) {
          this.uxService.updateUXState({
            Loading: false,
            Toast: {
              Title: 'You are subscribed!',
              Message: `Thank you for subscribing, you won't miss out anymore`,
              Classes: ['_success'],
            },
          });
          this.router.navigate(['/']);
          //Thank you for contacting us we will reply as soon as possible
        }
      });
  }
}
