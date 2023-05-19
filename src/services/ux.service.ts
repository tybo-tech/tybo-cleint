import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IKey, UxModel } from 'src/models/ux.model';
import { WebsiteModel } from 'src/models/website.model';
import { IObjectMap } from './ParserHelper';

@Injectable({
  providedIn: 'root',
})
export class UxService {
  private uxBehaviorSubject: BehaviorSubject<UxModel>;
  public uxObservable: Observable<UxModel>;

  private keyBehaviorSubject: BehaviorSubject<IKey>;
  public keyObservable: Observable<IKey>;

  private resizeBehaviorSubject = new BehaviorSubject<boolean>(false);
  public resizeObservable: Observable<boolean>;

  private mappingBehaviorSubject: BehaviorSubject<IObjectMap[]>;
  public mappingObservable: Observable<IObjectMap[]>;

  constructor() {
    //UX
    this.uxBehaviorSubject = new BehaviorSubject<UxModel>({});
    this.uxObservable = this.uxBehaviorSubject.asObservable();

    //Keys
    this.keyBehaviorSubject = new BehaviorSubject<IKey>({});
    this.keyObservable = this.keyBehaviorSubject.asObservable();

    //Mapping
    this.mappingBehaviorSubject = new BehaviorSubject<IObjectMap[]>([]);
    this.mappingObservable = this.mappingBehaviorSubject.asObservable();

    //Resize
    this.resizeObservable = this.resizeBehaviorSubject.asObservable();
  }
  updateUXState(ux: UxModel) {
    if (this.uxBehaviorSubject) this.uxBehaviorSubject.next(ux);
  }
  updateMappingState(ux: IObjectMap[]) {
    if (this.mappingBehaviorSubject) this.mappingBehaviorSubject.next(ux);
  }
  public get ux() {
    return this.uxBehaviorSubject?.value;
  }
  public get keys() {
    return this.keyBehaviorSubject?.value;
  }

  updateResizerState(website: WebsiteModel) {
    if (!website || !website.Element) return;
    const element = document.getElementById(website.Element.ElementId || '');
    element &&
      this.updateUXState({
        Resizer: {
          x: element.getBoundingClientRect().left + 'px',
          y: element.getBoundingClientRect().top + 'px',
          w: element.getBoundingClientRect().width + 'px',
          h: element.getBoundingClientRect().height + 'px',
          visible: true,
        },
      });
  }
  updateKeyEvent(key: IKey) {
    this.keyBehaviorSubject.next(key);
  }
  updateResizer() {
    this.resizeBehaviorSubject.next(true);
  }
}
