import {
    ElementModel,
    IEventOptions,
    IEventTypes,
  } from 'src/models/website.model';
  
  export const initEvents = (
    pages: IEventOptions[] = [],
    collections: string[] = [],
    elements: IEventOptions[] = []
  ): IEventTypes[] => {
    return [
      {
        Id: EVENTS.NavigateToPage.Id,
        Name: EVENTS.NavigateToPage.Name,
        Options: [],
        Items: [
          {
            Id: 'select-page',
            Name: 'Select Page',
            Items: [],
            Options: pages,
          },
        ],
      },
      {
        Id: 'open-link',
        Name: 'Open Link',
        Items: [
          {
            Id: 'link-name',
            Name: 'Enter the link',
            Items: [],
            Options: [],
          },
        ],
        Options: [],
      },
      {
        Id: EVENTS.CreateCollectionItem.Id,
        Name: EVENTS.CreateCollectionItem.Name,
        Items: [],
        Options: [],
      },
      {
        Id:EVENTS.Show.Id,
        Name: EVENTS.Show.Name,
        Items: [
          {
            Id: 'select-element',
            Name: 'Select element',
            Items: [],
            Options: elements,
          },
        ],
        Options: [],
      },
      {
        Id:EVENTS.Hide.Id,
        Name: EVENTS.Hide.Name,
        Items: [
          {
            Id: 'select-element',
            Name: 'Select element',
            Items: [],
            Options: elements,
          },
        ],
        Options: [],
      },
      {
        Id: 'toggle',
        Name: 'Toggle',
        Items: [
          {
            Id: 'select-element',
            Name: 'Select element',
            Items: [],
            Options: elements,
          },
        ],
        Options: [],
      },
      { Id: 'add-to-cart', Name: 'Add to cart', Items: [], Options: [] },
      { Id: 'sign-up', Name: 'Sign up user', Items: [], Options: [] },
      { Id: 'login-up', Name: 'Login user', Items: [], Options: [] },
    ];
  };
  
  export const EVENTS = {
    CreateCollectionItem:{Id:  'create-collection-item', Name:'Create collection item'},
    Show:{ Id:'show',Name: 'Show Element'},
    Hide: {Id:'hide',Name:'Hide Element'},
    Togle: {Id:'toggle',Name:'Toggle Element'},
    NavigateToPage: {Id:'navigate',Name:'Navigate to page'},
  }