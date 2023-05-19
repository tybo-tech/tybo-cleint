import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WI } from 'src/configs';
import { WebsiteModel } from 'src/models/website.model';
import { mapElements, unSelectAll } from 'src/services/helper';
import { StateService } from 'src/services/state.service';
import { TyboWebsiteService } from 'src/services/tybo.website.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  website?: WebsiteModel;
  id: any;
  websiteId =WI;
  pageId: any;
  itemId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private stateService: StateService,
    private tyboWebsiteService: TyboWebsiteService
  ) {
    this.activatedRoute.params.subscribe((r) => {
      this.pageId = r['pageId'];
      this.itemId = r['itemId'];
      if (r['websiteId']) this.websiteId = r['websiteId'];

      this.getWebsite();
    });
  }

  ngOnInit(): void {
    this.stateService.stateObservable?.subscribe((data) => {
      if (data && data.Page) {
        this.website = data;
      }
    });
  }

  getWebsite() {
    this.tyboWebsiteService.get(this.websiteId).subscribe((data) => {
      if (data && data.WebsiteId) {
        if (data.Pages?.length) {
          data.Elements?.filter((x) => x.Type === 'a').forEach((sec) => {
            sec.Link = `/preview/${data.WebsiteId}/${sec.Link}`;
          });
          // debugger
          mapElements(data);
          if (this.pageId)
            data.Page = data.Pages.find(
              (x) => x.Url === `/${this.pageId}` || x.PageId === this.pageId
            );
          if (!data.Page || !this.pageId) data.Page = data.Pages[0];
        }
        if (data.Page) unSelectAll(data.Page.Sections, data);
        if (data.Page) unSelectAll(data.Sections, data);
        this.website = data;
        this.stateService.updateWebsiteState(this.website);
      }
    });
  }
}


