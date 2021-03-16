export interface Googlebook {
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
    buyLink: string
  };
  accesInfo:{
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub:{
      isAvailable: boolean;
      downloadLink: string
    };
    pdf:{
      isAvailable: boolean;
      downloadLink: string
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean
  };
  searchInfo:{
    textSnippet: string
  };
}
