import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {GithubService} from './github/shared/github.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RepoBrowserComponent} from './github/repo-browser/repo-browser.component';
import {RepoListComponent} from './github/repo-list/repo-list.component';
import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';
import {ContactComponent} from './contact/contact.component';
import {UsersListComponent} from "./users/users-list/users-list.component";
import {LocalStorageModule} from "angular-2-local-storage";
import {CreateUserComponent} from "./users/create-user/create-user.component";
import {UserService} from "./users/shared/user.service";
import {DeleteUserComponent} from "./users/delete-user/delete-user.component";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        RepoBrowserComponent,
        RepoListComponent,
        RepoDetailComponent,
        HomeComponent,
        ContactComponent,
        UsersListComponent,
        CreateUserComponent,
        DeleteUserComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig, {useHash: false}),
        LocalStorageModule.withConfig({
            prefix: 'sumofuturo',
            storageType: 'localStorage'
        })
    ],
    providers: [
        GithubService,
        UserService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
