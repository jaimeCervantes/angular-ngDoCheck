import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

class Persona {
  name: string;
}

@Component({
  selector: 'lch-on-changes',
  templateUrl: './child.component.html' ,
  styles: [
    '.persona {background: LightYellow; padding: 8px; margin-top: 8px}',
    'p {background: Yellow; padding: 8px; margin-top: 8px}'
  ]
})
export class ChildComponent implements OnChanges {
  @Input() persona: Persona;
  @Input() habilidad: string;
  nombreAnterior: string;
  changeDetected: boolean;
  habilidadAnterior: string;
  contadorSinCambios: number;

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        let chng = changes[propName];
        let cur  = JSON.stringify(chng.currentValue);
        let prev = JSON.stringify(chng.previousValue);
        this.changeLog.push(`OnChanges: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }
  }

  reset() { this.changeLog.length = 0; }

  ngDoCheck() {
    if (this.persona.name !== this.nombreAnterior) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: persona.name cambio a "${this.persona.name}" y era "${this.nombreAnterior}"`);
      this.nombreAnterior = this.persona.name;
    }

    if (this.habilidad !== this.habilidadAnterior) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Habilidad cambio a "${this.habilidad}" y era "${this.habilidadAnterior}"`);
      this.habilidadAnterior = this.habilidad;
    }

    if (this.changeDetected) {
        this.contadorSinCambios = 0;
    } else {
        // log that hook was called when there was no relevant change.
        let count = this.contadorSinCambios += 1;
        let noChangeMsg = `DoCheck ejecutado ${count}x cuando no hubo cambios en persona o habilidad`;
        if (count === 1) {
          // add new "no change" message
          this.changeLog.push(noChangeMsg);
        } else {
          // update last "no change" message
          this.changeLog[this.changeLog.length - 1] = noChangeMsg;
        }
    }

    this.changeDetected = false;
  }
}
