import { Email } from "src/models/email.model";
import { ElementModel, PageModel, WebsiteModel } from "src/models/website.model";
import { Constants } from "./constants";

export const getFlatData = (results: ElementModel[], items: ElementModel[]) => {
    items.forEach((c) => {
      results.push(c);
      if (c.Children) getFlatData(results, c.Children);
    });
    return results;
  };

  export const getId = (prefix: string = ''): string => {
    if (prefix && prefix.length) prefix += '-';
    return `${prefix}${Math.floor(
      Math.random() * 1000000000
    )}-${new Date().getTime()}`;
  };

  export const formatEmail = (email: Email, logoUrl = 'https://tybofashion.co.za/api/api/upload/uploads/1667451566.png') =>  `

<div style="padding: 1rem">
  <img
    src="${logoUrl}"
    style="width: 8rem; margin-top: 3rem; margin-bottom: 2rem;"
    alt=""
  />
  <p>
 
    ${email.Message}

    <br /><br />
    Regards <br />
    ${email.FromName} <br />
    ${email.FromEmail} <br />
    ${email.FromPhone} <br />
  </p>
</div>

`


export const ELEMENT_TYPES = {
    img: 'img',
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    container: 'container',
    centerContainer: 'center-container',
    nav: 'nav',
    ul: 'ul',
    li: 'li',
    icon: 'icon',
    br: 'br',
    hr: 'hr',
    span: 'span',
    a: 'a',
    form: 'form',
    button: 'button',
    grid: 'buttgridon',
    dataList: 'data-list',
    dataItem: 'data-item',
    section: 'section',
    body: 'body',
    inputTextarea: 'input-textarea',
    inputText: 'input-text',
    inputNumber: 'input-number',
    inputEmail: 'input-email',
    inputPhone: 'input-phone',
    inputSelect: 'input-select',
    inputPassword: 'input-password',
    inputDate: 'input-date',
    inputRange: 'input-range',
    inputCheck: 'input-checkbox',
    inputSearch: 'input-search',
    inputTime: 'input-time',
  };
  
  export const INPUT_TYPES = [
    { Name: 'Text input', Type: 'input-text' },
    { Name: 'Textarea', Type: 'input-textarea' },
    { Name: 'Email input', Type: 'input-email' },
    { Name: 'Password input', Type: 'input-password' },
    { Name: 'Number input', Type: 'input-number' },
    { Name: 'Date input', Type: 'input-date' },
    { Name: 'Time input', Type: 'input-time' },
    { Name: 'Check box', Type: 'input-checkbox' },
    { Name: 'Range Slider', Type: 'input-range' },
    { Name: 'File Upload', Type: 'input-file' },
  ];
  export const isText = (t: string) => {
    const _ET = ELEMENT_TYPES;
    return (
      t == _ET.h1 ||
      t == _ET.h2 ||
      t == _ET.h3 ||
      t == _ET.h4 ||
      t == _ET.h5 ||
      t == _ET.h6 ||
      t == _ET.a ||
      t == _ET.p
    );
  };
  export const isFormInput = (t: string) => {
    const _ET = ELEMENT_TYPES;
    return (
      t == _ET.inputTextarea ||
      t == _ET.inputText ||
      t == _ET.inputNumber ||
      t == _ET.inputEmail ||
      t == _ET.inputPhone ||
      t == _ET.inputSelect ||
      t == _ET.inputPassword ||
      t == _ET.inputDate ||
      t == _ET.inputRange ||
      t == _ET.inputCheck ||
      t == _ET.inputSearch ||
      t == _ET.inputTime
    );
  };
  export const getInputType = (t: string) => {
    const items: any = {
      'input-textarea': 'textarea',
      'input-text': 'text',
      'input-number': 'number',
      'input-email': 'email',
      'input-phone': 'tel',
      'input-select': 'select',
      'input-password': 'password',
      'input-date': 'date',
      'input-range': 'range',
      'input-checkbox': 'checkbox',
      'input-search': 'search',
      'input-time': 'time',
    };
    return items[t];
  };
  export const ALL_TEXT = (): string[] => {
    const _ET = ELEMENT_TYPES;
    return [_ET.h1, _ET.h2, _ET.h3, _ET.h4, _ET.h5, _ET.h6, _ET.p];
  };
  export const isInput = (type: string): boolean => {
    return INPUT_TYPES.find((x) => x.Type === type) !== undefined;
  };

  export function renderIcons(el: ElementModel, element: HTMLElement) {
    if (
      el.Type === ELEMENT_TYPES.a &&
      el.Metadata?.IconType &&
      el.Metadata?.IconType !== Constants.IconPositions.None
    ) {
      if (el.Metadata?.IconType === Constants.IconPositions.LeftIcon)
        element.innerHTML = `<i class="bi ${el.Metadata?.IconClass}"></i> ${el.Data}`;
      if (el.Metadata?.IconType === Constants.IconPositions.RightIcon)
        element.innerHTML = `${el.Data} <i class="bi ${el.Metadata?.IconClass}"></i>`;
    }
  }
  
  export const getElementById = (id: string, items: ElementModel[]) => {
    const wids = isolateWidget([], items);
    const element = wids.find((x) => x.ElementId === id);
    return element;
  };


  export const isolateWidget = (
    output: ElementModel[],
    widgets: ElementModel[]
  ) => {
    widgets.forEach((wid) => {
      output.push(wid);
      if (wid.Children) isolateWidget(output, wid.Children);
    });
    return output;
  };

  export const geElementsByIdList = (website: WebsiteModel, ids: string[]) => {
    const items: ElementModel[] = [];
    if (website && website.Page && ids.length) {
      const wids = isolateWidget([], website.Page.Sections) || [];
      const globs = isolateWidget([], website.Sections) || [];
      const elements: ElementModel[] = [...wids, ...globs];
      ids.forEach((id) => {
        const check = elements.find((x) => x.ElementId === id);
        if (check) items.push(check);
      });
    }
    return items;
  };
  

  
export const getFormElements = (formid: string, items: ElementModel[]) => {
    const wids = isolateWidget([], items);
    const inputs: string[] = [
      'input-email',
      'input-password',
      'input-text',
      'input-phone',
      'input-textarea',
    ];
    const actives = wids.filter(
      (x) => x.FormId === formid && inputs.find((i) => i === x.Type)
    );
    return actives;
  };

  export const mapElements = (website: WebsiteModel) => {
    website.Pages?.forEach((page) => {
      doMap(page, website.Elements);
    });
    website = doGlobalMap(website, website.Elements);
    return website;
  };
  

  export const doMap = (page: PageModel, elements: ElementModel[] = []) => {
    page.Sections = elements.filter((x) => x.ParentId === page.PageId);
    page.Sections.forEach((x) => mapSection(x, elements));
  };
  export const doGlobalMap = (
    web: WebsiteModel,
    elements: ElementModel[] = []
  ) => {
    web.Sections = elements.filter((x) => x.ParentId === web.WebsiteId);
    web.Sections.forEach((x) => mapSection(x, elements));
  
    return web;
  };
  export const mapSection = (
    section: ElementModel,
    elements: ElementModel[] = []
  ) => {
    if (!section.Children?.length)
      section.Children = elements.filter((x) => x.ParentId === section.ElementId);
    section.Children.forEach((x) => mapSection(x, elements));
  };

  export const unSelectAll = (items: ElementModel[], website: WebsiteModel) => {
    const wids = isolateWidget([], items);
    const actives = wids.map((parent) => {
      parent.MouseOver = false;
      parent.SelectorName = parent.SelectorName.filter(
        (x) => x !== 'active-element'
      );
      return parent;
    });
    return actives;
  };