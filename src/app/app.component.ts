import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Max_Books';
  public renderdComponent:string ='Recipes';
  public selectRendersComponent(renderdComponent:string):void{
this.renderdComponent = renderdComponent;
  }
}
