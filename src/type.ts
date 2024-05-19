import { Locale } from "antd/es/locale";

export interface LocaleData {
  antLocale: Locale;
  logo: string;
  initial: string;
  previewHelp: string;
  error404: {
    backHome: string;
    description: string;
  };
  uploadCard: {
    title: string;
    subTitle: string;
  };
  listAction: {
    batchAppend: string;
    addFolder: string;
    clear: string;
    downloadAll: string;
    downloadOne: string;
    removeOne: string;
    reCompress: string;
  };
  columnTitle: {
    status: string;
    name: string;
    preview: string;
    size: string;
    newSize: string;
    dimension: string;
    newDimension: string;
    decrease: string;
    action: string;
  };
  optionPannel: {
    resizeLable: string;
    formatLable: string;
    jpegLable: string;
    pngLable: string;
    gifLable: string;
    help: string;
    failTip: string;
    unChanged: string;
    toWidth: string;
    toHeight: string;
    widthPlaceholder: string;
    heightPlaceholder: string;
    qualityTitle: string;
    resetBtn: string;
    confirmBtn: string;
    colorsDesc: string;
    pngDithering: string;
    gifDithering: string;
  };
  progress: {
    before: string;
    after: string;
    rate: string;
  };
}
