import { Directive, Input, HostListener  } from "@angular/core";

@Directive({
  selector: '[selectTest]'
})
export class SelectTest {
  
  @Input("tab")
  id: number;

  @Input()
  active = false;

  @HostListener('click')
  click() {
    console.log('hi');
  }

}