import { Routes } from '@angular/router';
import { AboutComponent } from './routing_pages/about/about.component';
import { ProjectsComponent } from './routing_pages/projects/projects.component';
import { HomeComponent } from './routing_pages/home/home.component';
import { AchievementsComponent } from './routing_pages/achievements/achievements.component';

export const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'achievements', component: AchievementsComponent},
    {path: 'projects', component: ProjectsComponent}
    // {path: '**', redirectTo: ''}

];
