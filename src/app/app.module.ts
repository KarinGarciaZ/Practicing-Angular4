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
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService,
    AuthorServices,
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
