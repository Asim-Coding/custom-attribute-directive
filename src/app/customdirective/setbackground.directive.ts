import {Directive, ElementRef, OnInit} from  "@angular/core";

@Directive({
  selector : '[setBackground]'
})
export class SetBackgroundDirective implements OnInit{
  // private element: ElementRef;
     constructor(private element: ElementRef){
       //element.nativeElement.style.backgroundColor = "lightgreen";
       this.element = element;
     }
     ngOnInit(){
       this.element.nativeElement.style.backgroundColor = "lightgreen";
     }
}