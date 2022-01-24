declare interface IGetCurrentUserDetailsApplicationCustomizerStrings {
  Title: string;
}

declare module 'GetCurrentUserDetailsApplicationCustomizerStrings' {
  const strings: IGetCurrentUserDetailsApplicationCustomizerStrings;  
  export = strings;
}

declare global {
  var himaniGlobalJSON:string = "potter";
  interface  ContosoHimaniJSON {
    "User Name": string,
    "User LogIn": string,
    "User Email": string
  };
}

