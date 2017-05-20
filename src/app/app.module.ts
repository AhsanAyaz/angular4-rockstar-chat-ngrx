import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';
import { WriteMessageComponent } from './components/write-message/write-message.component';
import { BsDropdownModule } from 'ngx-bootstrap';

import { ChatService } from './providers/chat.service';
import { LandingComponent } from './pages/landing/landing.component';
import { StoreModule } from '@ngrx/store';
import { messages } from './reducers/messages';
import { messagesFilter } from './reducers/messages-filter';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    ChatMessagesComponent,
    WriteMessageComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    StoreModule.provideStore({
      messages,
      messagesFilter
    })
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
