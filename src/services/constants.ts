import { Shipping } from 'src/models/shipping.model';
import { IFlex } from 'src/models/utils.model';

export const IMAGE_CROP_SIZE = 800;

export const SEND_EMAIL_GENERAL_TEXT =
  'https://sizakheleholidays.co.za/api/api/general-email.php';
// export const COMPANY_EMIAL = 'info@sizakheleholidays.co.za, mrnnmthembu@gmail.com';
// export const COMPANY_EMIAL = 'mrnnmthembu@gmail.com';
export const COMPANY_EMIAL =
  'info@sizakhelelogistics.co.za, mrnnmthembu@gmail.com';
export const ORDER = 'ORDER';
export const CURRENT_ORDER = 'current__order';
export const COMPANYID = 'sizakheleholidays.co.za';
export const PRIVINCES = [
  'Eastern Cape',
  'Free State',
  'Gauteng',
  'KwaZulu-Natal',
  'Limpopo',
  'Mpumalanga',
  'Northern Cape',
  'North West',
  'Western Cape',
];

export const DEVICES = {
  phone: 'phone',
  desktop: 'desktop',
  tablet: 'tablet',
};
export const BANK_IMAGES = [
  {
    id: 'absa',
    img: 'xxxx',
  },
  {
    id: 'absa',
    img: 'xxxx',
  },
  {
    id: 'absa',
    img: 'xxxx',
  },
  {
    id: 'absa',
    img: 'xxxx',
  },
  {
    id: 'absa',
    img: 'xxxx',
  },
  {
    id: 'absa',
    img: 'xxxx',
  },
  {
    id: 'absa',
    img: 'xxxx',
  },
];

export const ganarateImages = () => {
  let items = [];
  for (let i = 0; i <= 4; i++) {
    items.push({
      Id: i,
      Img: `assets/images/sections/section-${i}-col.svg`,
      Name: getItemName(i),
    });
  }
  return items;
};

const getItemName = (index: number) => {
  if (index === 0) return 'Empty';
  if (index === 1) return '1 column';
  return `${index} columns`;
};

export const customShipping: Shipping = {
  ShippingId: 'Custom',
  CompanyId: '',
  Name: 'Custom',
  Description: '',
  Price: 0,
  ImageUrl: '',
  StatusId: 1,
  Selected: false,
};

export const systemShippings: Shipping[] = [
  {
    ShippingId: 'courier',
    CompanyId: '',
    Name: 'Courier',
    Description: '',
    Price: 100,
    ImageUrl: '',
    StatusId: 1,
    Selected: false,
  },
  {
    ShippingId: '',
    CompanyId: '',
    Name: 'Paxi,7 to 9 days',
    Description: '',
    Price: 59.95,
    ImageUrl: '',
    StatusId: 1,
    Selected: false,
  },
  {
    ShippingId: '',
    CompanyId: '',
    Name: 'Paxi,3 to 5 days',
    Description: '',
    Price: 100,
    ImageUrl: '',
    StatusId: 1,
    Selected: false,
  },
  {
    ShippingId: 'Free',
    CompanyId: '',
    Name: 'Free',
    Description: '',
    Price: 0,
    ImageUrl: '',
    StatusId: 1,
    Selected: false,
  },
  {
    ShippingId: 'Collection',
    CompanyId: '',
    Name: 'Collection',
    Description: '',
    Price: 0,
    ImageUrl: '',
    StatusId: 1,
    Selected: false,
  },
  customShipping,
];

export const PAYMENT_METHODS = {
  PayFast: {
    Name: 'Pay online with payfast',
    Selected: true,
    Icon: 'https://editor.tybo.co.za/builder-api/api/upload/uploads/1677302327.svg',
  },
  Transfer: {
    Name: 'Transfer sellers bank account',
    Selected: false,
    Icon: '',
  },
};

export const PAYMENT_STATUSES = {
  PendingPayment: 'Pending payment',
  PaymentConfirmed: 'Payment confirmed',
  Paid: 'Paid',
  Cancelled: 'Cancelled',
  Refunded: 'Refunded',
};

export const PAYMENT_STATUSES_LIST = () => {};

export const ORDER_STATUSES = {
  Cart: 'Cart',
  OrderPlaced: 'Order placed',
  Precessing: 'Order precessing',
  ReadyForShipment: 'Order ready for shipment',
  OnTheWay: 'Order shipped, on the way',
  Complited: 'Complited',
  Cancelled: 'Cancelled',
  Failed: 'Failed',
  Returned: 'Returned',
};

export const DELIVERY_METHODS = {
  Delivery: {
    Name: 'Standard delivery',
    Selected: true,
    Price: 100,
    Icon: '',
  },
  Collection: {
    Name: 'Collection',
    Selected: false,
    Price: 0,
    Icon: '',
  },
};

export const editorStyle = {
  margin: '0',
  height: '200px',
  display: 'block',
  background: '#fff',
};

export const editorConfig = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    ['blockquote', 'code-block'],

    ['clean'],
    // ['formula']
  ],
};

export const PROVINCES = [
  ,
  'Gauteng',
  'waZulu-Natal',
  'Mpumalanga',
  'Limpopo',
  'Eastern Cape',
  'Free State',
  'Northern Cape',
  'North West',
  'Western Cape',
];

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

export const EVENT_TRIGGERS = ['Click', 'Hover'];
export const Constants = {
  YesNo: {
    Yes: 'Yes',
    No: 'No',
  },
  YesNoArray: ['Yes', 'No'],
  ElementCategory: {
    None: 'None',
    Global: 'Global',
    Reusable: 'Reusable',
    GlobalReusable: 'Global Reusable',
  },
  ElementCategoryList: ['None', 'Global', 'Reusable', 'Global Reusable'],
  IconPositions: {
    None: 'None',
    LeftIcon: 'Left Icon',
    RightIcon: 'Right Icon',
  },
  IconPositionList: ['None', 'Left Icon', 'Right Icon'],
  CssMetaData: {
    background_distance: 'background-distance',
    background_operity1: 'background-operity1',
    background_operity2: 'background-operity2',
    background_color2: 'background-color2',
    background_color1: 'background-color1',
    background_rotation: 'background-rotation',
    background_type: 'background-type',
    background_url: 'background-url',
  },
};

export const FLEX_IMAGES = {
  VERTICAL_START: 'assets/images/styles/flex-align/vertical-start.svg',
  VERTICAL_START_ACTIVE:
    'assets/images/styles/flex-align/vertical-start-active.svg',
  VERTICAL_CENTER: 'assets/images/styles/flex-align/vertical-center.svg',
  VERTICAL_CENTER_ACTIVE:
    'assets/images/styles/flex-align/vertical-center-active.svg',
  VERTICAL_END: 'assets/images/styles/flex-align/vertical-end.svg',
  VERTICAL_END_ACTIVE:
    'assets/images/styles/flex-align/vertical-end-active.svg',

  HORIZONTAL_START: 'assets/images/styles/flex-align/horizontal-start.svg',
  HORIZONTAL_START_ACTIVE:
    'assets/images/styles/flex-align/horizontal-start-active.svg',
  HORIZONTAL_CENTER: 'assets/images/styles/flex-align/horizontal-center.svg',
  HORIZONTAL_CENTER_ACTIVE:
    'assets/images/styles/flex-align/horizontal-center-active.svg',
  HORIZONTAL_END: 'assets/images/styles/flex-align/horizontal-end.svg',
  HORIZONTAL_END_ACTIVE:
    'assets/images/styles/flex-align/horizontal-end-active.svg',
  TALL: 'assets/images/styles/flex-align/tall.svg',
  TALL_ACTIVE: 'assets/images/styles/flex-align/tall-active.svg',
  SHORT: 'assets/images/styles/flex-align/short.svg',
  SHORT_ACTIVE: 'assets/images/styles/flex-align/short-active.svg',
  TALL_H: 'assets/images/styles/flex-align/tall-h.svg',
  TALL_H_ACTIVE: 'assets/images/styles/flex-align/tall-h-active.svg',
  SHORT_H: 'assets/images/styles/flex-align/short-h.svg',
  SHORT_H_ACTIVE: 'assets/images/styles/flex-align/short-h-active.svg',
};

export const FLEXITEMS: IFlex[] = [
  {
    Icon: FLEX_IMAGES.VERTICAL_START,
    IconActive: FLEX_IMAGES.VERTICAL_START_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'flex-start', Justify: 'flex-start' },
  },
  {
    Icon: FLEX_IMAGES.VERTICAL_CENTER,
    IconActive: FLEX_IMAGES.VERTICAL_CENTER_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'center', Justify: 'flex-start' },
  },
  {
    Icon: FLEX_IMAGES.VERTICAL_END,
    IconActive: FLEX_IMAGES.VERTICAL_END_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'flex-end', Justify: 'flex-start' },
  },
  {
    Icon: FLEX_IMAGES.VERTICAL_START,
    IconActive: FLEX_IMAGES.VERTICAL_START_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'flex-start', Justify: 'center' },
  },
  {
    Icon: FLEX_IMAGES.VERTICAL_CENTER,
    IconActive: FLEX_IMAGES.VERTICAL_CENTER_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'center', Justify: 'center' },
  },
  {
    Icon: FLEX_IMAGES.VERTICAL_END,
    IconActive: FLEX_IMAGES.VERTICAL_END_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'flex-end', Justify: 'center' },
  },
  {
    Icon: FLEX_IMAGES.VERTICAL_START,
    IconActive: FLEX_IMAGES.VERTICAL_START_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'flex-start', Justify: 'flex-end' },
  },
  {
    Icon: FLEX_IMAGES.VERTICAL_CENTER,
    IconActive: FLEX_IMAGES.VERTICAL_CENTER_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'center', Justify: 'flex-end' },
  },
  {
    Icon: FLEX_IMAGES.VERTICAL_END,
    IconActive: FLEX_IMAGES.VERTICAL_END_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'flex-end', Justify: 'flex-end' },
  },

  // Rows
  {
    Icon: FLEX_IMAGES.HORIZONTAL_START,
    IconActive: FLEX_IMAGES.HORIZONTAL_START_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'flex-start', Justify: 'flex-start' },
  },
  {
    Icon: FLEX_IMAGES.HORIZONTAL_START,
    IconActive: FLEX_IMAGES.HORIZONTAL_START_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'flex-start', Justify: 'center' },
  },
  {
    Icon: FLEX_IMAGES.HORIZONTAL_START,
    IconActive: FLEX_IMAGES.HORIZONTAL_START_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'flex-start', Justify: 'flex-end' },
  },
  {
    Icon: FLEX_IMAGES.HORIZONTAL_CENTER,
    IconActive: FLEX_IMAGES.HORIZONTAL_CENTER_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'center', Justify: 'flex-start' },
  },
  {
    Icon: FLEX_IMAGES.HORIZONTAL_CENTER,
    IconActive: FLEX_IMAGES.HORIZONTAL_CENTER_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'center', Justify: 'center' },
  },
  {
    Icon: FLEX_IMAGES.HORIZONTAL_CENTER,
    IconActive: FLEX_IMAGES.HORIZONTAL_CENTER_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'center', Justify: 'flex-end' },
  },
  {
    Icon: FLEX_IMAGES.HORIZONTAL_END,
    IconActive: FLEX_IMAGES.HORIZONTAL_END_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'flex-end', Justify: 'flex-start' },
  },
  {
    Icon: FLEX_IMAGES.HORIZONTAL_END,
    IconActive: FLEX_IMAGES.HORIZONTAL_END_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'flex-end', Justify: 'center' },
  },
  {
    Icon: FLEX_IMAGES.HORIZONTAL_END,
    IconActive: FLEX_IMAGES.HORIZONTAL_END_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'flex-end', Justify: 'flex-end' },
  },

  //Space between
  {
    Icon: FLEX_IMAGES.TALL_H,
    IconActive: FLEX_IMAGES.TALL_H_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'flex-start', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL_H,
    IconActive: FLEX_IMAGES.TALL_H_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'center', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL_H,
    IconActive: FLEX_IMAGES.TALL_H_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'flex-end', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL_H,
    IconActive: FLEX_IMAGES.TALL_H_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'flex-start', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL_H,
    IconActive: FLEX_IMAGES.TALL_H_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'center', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL_H,
    IconActive: FLEX_IMAGES.TALL_H_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'flex-end', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL_H,
    IconActive: FLEX_IMAGES.TALL_H_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'flex-start', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL_H,
    IconActive: FLEX_IMAGES.TALL_H_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'center', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL_H,
    IconActive: FLEX_IMAGES.TALL_H_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'column',
    Values: { Align: 'flex-end', Justify: 'space-between' },
  },

  {
    Icon: FLEX_IMAGES.TALL,
    IconActive: FLEX_IMAGES.TALL_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'flex-start', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL,
    IconActive: FLEX_IMAGES.TALL_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'flex-start', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL,
    IconActive: FLEX_IMAGES.TALL_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'flex-start', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL,
    IconActive: FLEX_IMAGES.TALL_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'center', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL,
    IconActive: FLEX_IMAGES.TALL_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'center', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL,
    IconActive: FLEX_IMAGES.TALL_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'center', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL,
    IconActive: FLEX_IMAGES.TALL_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'flex-end', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL,
    IconActive: FLEX_IMAGES.TALL_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'flex-end', Justify: 'space-between' },
  },
  {
    Icon: FLEX_IMAGES.TALL,
    IconActive: FLEX_IMAGES.TALL_ACTIVE,
    Hover: false,
    Active: false,
    Group: 'row',
    Values: { Align: 'flex-end', Justify: 'space-between' },
  },
];
