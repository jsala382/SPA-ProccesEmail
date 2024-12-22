import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NgModule } from "@angular/core";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ValidationComponent } from "./validation/validation.component";
import { RouterModule, Routes } from "@angular/router";
import { PhotoCaptureComponent } from "./photo-capture/photo-capture.component";
import { FormularioUsuarioComponent } from "./formulario-usuario/formulario-usuario.component";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
const routes: Routes= [
   {path: '',redirectTo: '/welcome', pathMatch:'full'},
   {path:'welcome', component:WelcomeComponent },
   {path:'validation', component:ValidationComponent },
   {path: 'photo-capture', component:PhotoCaptureComponent},
   {path:'formulario-usuario',component:FormularioUsuarioComponent}
]
  


@NgModule({
     declarations: [
        AppComponent,
        WelcomeComponent,  
        ValidationComponent,
        PhotoCaptureComponent,
        FormularioUsuarioComponent
     ] ,  
     imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes)
      ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     bootstrap: [AppComponent] 
})

export class AppModule{

}