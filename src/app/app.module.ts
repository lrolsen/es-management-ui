import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MappingDefinitionService }  from './mapping-definition.service';
import { MappingMgntComponent }  from './mapping-mgnt.component';
import {EnumKeyValueListPipe} from "./enumlist.pipe";

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ 
    AppComponent,
    MappingMgntComponent,
    EnumKeyValueListPipe
  ],
  providers:    [ MappingDefinitionService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
