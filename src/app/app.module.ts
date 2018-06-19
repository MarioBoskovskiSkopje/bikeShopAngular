import { FilterService } from './services/filter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetJsonService } from './services/getjson.service';
import { RemoveduplicatesPipe } from './removeduplicates.pipe';
import { Removeduplicates1Pipe } from './removeduplicates1.pipe';
import { Removeduplicates2Pipe } from './removeduplicates2.pipe';
import { Removeduplicates3Pipe } from './removeduplicates3.pipe';
import { Removeduplicates4Pipe } from './removeduplicates4.pipe';
import { Removeduplicates5Pipe } from './removeduplicates5.pipe';
import { Removeduplicates6Pipe } from './removeduplicates6.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RemoveduplicatesPipe,
    Removeduplicates1Pipe,
    Removeduplicates2Pipe,
    Removeduplicates3Pipe,
    Removeduplicates4Pipe,
    Removeduplicates5Pipe,
    Removeduplicates6Pipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [GetJsonService,FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
