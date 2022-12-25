import { Directive ,HostListener,HostBinding,Input,OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @Input() backgroundColor: string ;

  @HostBinding('class') backgroundColorClass: string;
 public isOpen: boolean = false;

@HostListener('click') toggleOpen(){
  this.isOpen =!this.isOpen;
  this.backgroundColorClass=this.isOpen?'bg-gray-700':this.backgroundColor;
};
constructor(){
  
 }
ngOnInit(): void {
  this.backgroundColorClass= this.backgroundColor;

  console.log(this.backgroundColor);

}
}
