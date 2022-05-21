import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { AbilitiesComponent } from './pages/abilities/abilities.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'abilities', component: AbilitiesComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
  { path: '**', redirectTo: '/aboutme', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    SidebarComponent,
    AboutMeComponent,
    AbilitiesComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
