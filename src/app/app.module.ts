import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { NewComponent } from './pages/new/new.component';
import { EditComponent } from './pages/edit/edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TagModule } from './pages/tag/tag.module';
import { ContactModule } from './pages/contact/contact.module';
import { UserModule } from './pages/user/user.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SidebarComponent],
  imports: [
    BrowserModule,
    TagModule,
    ContactModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
