import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Sathish';
  names:string[] = [];
  addNames() {
    this.names.push(this.name)
    console.log(this.names)
  }
}
