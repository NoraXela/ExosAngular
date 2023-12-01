import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrl: './ex1.component.css',
})
export class Ex1Component {
  userName: string = '';
  selectedFont: string = '';
  selectedLayout: string = '';
  fontSize: string = '';

  changefont(selectedFont1: string) {
    document.getElementById('outputMessage')!.style.fontFamily = selectedFont1;
  }

  changeSize(selectedSize: string) {
    let goodSize = selectedSize + 'px';
    document.getElementById('outputMessage')!.style.fontSize = goodSize;
  }

  setLayout(selectedLayout: string) {
    switch (this.selectedLayout) {
      case '1':
        document.getElementById('outputMessage')!.style.textAlign = 'Left';
        break;
      case '2':
        document.getElementById('outputMessage')!.style.textAlign = 'Center';
        break;
      default:
        document.getElementById('outputMessage')!.style.textAlign = 'Right';
    }
  }
}
