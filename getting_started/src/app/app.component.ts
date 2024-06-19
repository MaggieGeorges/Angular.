import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disable = true;
  greetins: String = "Hello World Again";
  text = "Starting text";

  constructor() {
    setTimeout(() => {
      this.disable = false;
    }, 4000);
  }

  greet() {
    return "Hi There";
  }

  AddName() {
    console.log("Clicked!!");
  }

  takeInput(event: Event) {
    console.log(event);
  }
}
