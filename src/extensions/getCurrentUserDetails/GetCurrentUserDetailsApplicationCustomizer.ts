import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'GetCurrentUserDetailsApplicationCustomizerStrings';

// required for JSOM code
require('sp-init');
require('microsoft-ajax');
require('sp-runtime');
require('sharepoint');
//


const LOG_SOURCE: string = 'GetCurrentUserDetailsApplicationCustomizer';


/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IGetCurrentUserDetailsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class GetCurrentUserDetailsApplicationCustomizer
  extends BaseApplicationCustomizer<IGetCurrentUserDetailsApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    globalThis.himaniGlobal="hermione";
    console.log(globalThis.himaniGlobal);
    console.log(`${LOG_SOURCE} Initialized`);

    const context: SP.ClientContext = new SP.ClientContext(this.context.pageContext.web.absoluteUrl);
    const web: SP.Web = context.get_web();
    let currentUser: SP.User = web.get_currentUser();

    context.load(web);
    context.load(currentUser);
    context.executeQueryAsync((sender: any, args: SP.ClientRequestSucceededEventArgs) => {
      let wtitle: string = web.get_title();
      let sampleJSON = {
        "User Name": currentUser.get_title(),
        "User LogIn": currentUser.get_loginName(),
        "User Email": currentUser.get_email()
      };
       globalThis.contosoHimaniJson = 
       {
        "User Name": currentUser.get_title(),
        "User LogIn": currentUser.get_loginName(),
        "User Email": currentUser.get_email()
      };

      let flatstring: string = `{
        "User Name": ${currentUser.get_title()},
        "User LogIn": ${currentUser.get_loginName()},
        "User Email": ${currentUser.get_email()}
      }`;

      // console.log(JSON.stringify(userJSON));
      console.log("I am JSON object");
      console.log(sampleJSON);

      console.log("I am global JSON Object");
      console.log(globalThis.contosoHimaniJson);
      
      console.log("I am a flat string that looks like JSOn but isn't stringified.");
      console.log(flatstring);
    },
      (sender, args) => {
        console.log(args.get_message());
      });

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    //Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

    return Promise.resolve();
  }
}
