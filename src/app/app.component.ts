import { AfterContentChecked, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsComponent } from "./items/items.component";
import { ParentAComponent } from "./parent-a/parent-a.component";
import { ParentBComponent } from "./parent-b/parent-b.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemsComponent, ParentAComponent, ParentBComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterContentChecked {
  title = 'angular-latest-app';

  password = '';
  email = '';
  
  ngAfterContentChecked(): void {
    console.log('AppComponent: ngAfterContentChecked');
  }
}
