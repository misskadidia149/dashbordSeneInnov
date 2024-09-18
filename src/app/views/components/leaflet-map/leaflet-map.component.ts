import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.scss'
})
export class LeafletMapComponent implements OnInit {
  ngOnInit(): void {
      this.configMap()
  }

  //variables
  map: any


  //configuration du map
  configMap(){
    this.map=L.map('map', {

      center: [40.4258686,86.9080655],
      zoom:6
    }
    );
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

  }
}
