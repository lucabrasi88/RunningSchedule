import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">RunMate</div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Add new event</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">All events</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Coming events</a>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  name: string = "Wings For Life 2020";
  place: string = "Poznan";
}
