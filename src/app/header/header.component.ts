import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() renderdComponent = new EventEmitter<string>();  
  public showMenu: boolean = false;
  public showDropDown: boolean = false;
// ------------------------------------------------------
  public toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
// ------------------------------------------------------

  public toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }
// ------------------------------------------------------
public selectComponent(value:string){
  this.renderdComponent.emit(value);
}
}
