import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  tabSelected: string;
  onSelected(selected): void {
    this.tabSelected = selected;
  }

  ngOnInit(): void {
    this.tabSelected = 'dashboard';
  }
}
