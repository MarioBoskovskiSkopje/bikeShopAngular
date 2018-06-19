import { FilterService } from './services/filter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


<<<<<<< HEAD

=======
>>>>>>> 56639961bdb4ab483c2649e64f386362832e9083
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetJsonService } from './services/getjson.service';
import { RemoveduplicatesPipe } from './removeduplicates.pipe';
<<<<<<< HEAD
import { Removeduplicates1Pipe } from './removeduplicates1.pipe';
import { Removeduplicates2Pipe } from './removeduplicates2.pipe';
import { Removeduplicates3Pipe } from './removeduplicates3.pipe';
import { Removeduplicates4Pipe } from './removeduplicates4.pipe';
import { Removeduplicates5Pipe } from './removeduplicates5.pipe';
import { Removeduplicates6Pipe } from './removeduplicates6.pipe';
=======
>>>>>>> 56639961bdb4ab483c2649e64f386362832e9083



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    RemoveduplicatesPipe,
    Removeduplicates1Pipe,
    Removeduplicates2Pipe,
    Removeduplicates3Pipe,
    Removeduplicates4Pipe,
    Removeduplicates5Pipe,
    Removeduplicates6Pipe
=======
    RemoveduplicatesPipe
>>>>>>> 56639961bdb4ab483c2649e64f386362832e9083

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
