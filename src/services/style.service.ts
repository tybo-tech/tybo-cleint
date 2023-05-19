import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  ElementModel,
  PageModel,
  WebsiteModel,
} from 'src/models/website.model';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { getFlatData } from './helper';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  private styleBehaviorSubject: BehaviorSubject<any>;
  public styleObservable: Observable<any>;

  private uiBehaviorSubject: BehaviorSubject<{El?: ElementModel, Parent?: HTMLElement}>;
  public uiObservable: Observable<{El?: ElementModel, Parent?: HTMLElement}>;

  private device = '';
  constructor(public breakpointObserver: BreakpointObserver) {
    this.styleBehaviorSubject = new BehaviorSubject<any>({});
    this.styleObservable = this.styleBehaviorSubject.asObservable();

    this.uiBehaviorSubject = new BehaviorSubject<any>({});
    this.uiObservable = this.uiBehaviorSubject.asObservable();

    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        this.device = state.matches ? 'desktop' : 'phone';
        // if (state.matches && this.website) this.website.Device = 'desktop';

        // if (!state.matches && this.website) this.website.Device = 'phone';
      });
  }

  updatestyles(data: any = {}) {
    this.styleBehaviorSubject.next(data);
  }

  updateUi(data: {El?: ElementModel, Parent?: HTMLElement}) {
    this.uiBehaviorSubject.next(data);
  }

  creatClass(website: WebsiteModel) {
    // if (1) return;
    if (!website) return;
    if (!website.Editing) website.Device = this.device;
    var elem: any = document.getElementById('__my-style');
    if (elem) elem.parentElement.removeChild(elem);
    var css = ``;
    let allData: ElementModel[] = getFlatData([], website.Sections);
    website.Pages.forEach((page) => {
      const data = getFlatData([], page.Sections);
      allData = [...allData, ...data];
    });
    if (website.Imports?.length) {
      const imports = website.Imports.filter((x) => x.Type === 'css');
      imports.forEach((imp) => {
        css += `@import url('${imp.Url}');`;
      });
    }
    allData.forEach((element) => {
      css += `\n\n.${element.SelectorName[0]}{`;
      if (
        !website?.Device ||
        (website?.Device === 'desktop' && element.PcStyles)
      ) {
        for (const [key, value] of Object.entries(element.PcStyles)) {
          css += `\n \t${key} : ${value};`;
        }
      }

      if (website?.Device === 'tablet' && element.TabStyles) {
        for (const [key, value] of Object.entries(element.TabStyles)) {
          css += `\n \t${key} : ${value};`;
        }
      }

      if (website?.Device === 'phone' && element.PhoneStyles) {
        for (const [key, value] of Object.entries(element.PhoneStyles)) {
          css += `\n \t${key} : ${value};`;
        }
      }
      css += '\n}';

      if (element.OnHover) {
        // debugger
        css += `\n\n.${element.SelectorName[0]}:hover{`;
        for (const [key, value] of Object.entries(element.OnHover)) {
          css += `\n \t${key} : ${value};`;
        }
        css += '\n}';
      }
    });

    let head = document.head || document.getElementsByTagName('head')[0],
      style: any = document.createElement('style');

    head.appendChild(style);
    style.setAttribute('id', '__my-style');

    style.type = 'text/css';
    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
}
