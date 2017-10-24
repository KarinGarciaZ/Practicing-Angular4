import { RetoPostService } from './services/reto-post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { TeacherComponent } from './teacher.component';
import { StudentsService } from './students/students.service';
import { AuthorsComponents } from './authors.components';
import { AuthorServices } from './authors.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikeComponent } from './like/like.component';
import { TextComponent } from './text/text.component';
import { PanelComponent } from './panel/panel.component';
import { TweetLikeComponent } from './tweet-like/tweet-like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormRetoComponent } from './form-reto/form-reto.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { RetoPostComponent } from './reto-post/reto-post.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponents,
    StudentsComponent,
    TeacherComponent,
    SummaryPipe,
    LikeComponent,
    TextComponent,
    PanelComponent,
    TweetLikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    FormRetoComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostComponentComponent,
    RetoPostComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '',                    component: HomeComponent},
      { path: 'followers/:id/:username', component: GithubProfileComponent},
      { path: 'followers',           component: RetoPostComponent},      
      { path: 'posts',               component: PostComponentComponent},
      { path: '**',                  component: NotFoundComponent}
    ])
  ],
  providers: [
    CoursesService,
    AuthorServices,
    StudentsService,
    PostService,
    RetoPostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
