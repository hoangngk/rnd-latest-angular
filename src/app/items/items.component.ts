import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent implements OnInit {
  items = ['item1', 'item2', 'item3', 'item4', 'item5'];

  ngOnInit() {
    console.log('ItemsComponent initialized');
    setTimeout(() => {
      this.addItem();
    });
  }

  addItem() {
    this.items = [...this.items, `item${this.items.length + 1}`];
  }
}
