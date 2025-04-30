import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule], // ✅ Cleaned up
})
export class HomePage implements OnInit {
  holidayHomes: any[] = [];

  constructor() {}

  ngOnInit() {
    this.loadFeaturedHomes();
  }

  loadFeaturedHomes() {
    this.holidayHomes = [
      { id: 1, name: 'Beachfront Cottage', location: 'Watamu' },
      { id: 2, name: 'Mountain Cabin', location: 'Nyeri' },
      { id: 3, name: 'City Apartment', location: 'Nairobi' },
    ];
  }
}
