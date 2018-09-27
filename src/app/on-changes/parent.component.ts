import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'lch-on-changes-parent',
  templateUrl: './parent.component.html',
  styles: ['.parent {background: Lavender;}']
})
export class ParentComponent {
  persona: Object;
  habilidad: string;
  title = 'OnChanges & DoCheck';
  @ViewChild(ChildComponent) childView: ChildComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // new Person object every time; triggers onChanges
    this.persona = { name: 'Jaime'}
    // setting habilidad only triggers onChanges if this value is different
    this.habilidad = 'Bailar';
    if (this.childView) { this.childView.reset(); }
  }
}
