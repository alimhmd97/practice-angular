import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu :boolean = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
  showDropDown :boolean = false;
  toggleDropDown(){
    this.showDropDown = !this.showDropDown;
  }
}
