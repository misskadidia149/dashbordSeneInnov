import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.scss'
})
export class LeafletMapComponent implements OnInit {
  private map!: L.Map;
  // private centroid: L.LatLngExpression = [42.3601, -71.0589]; // Boston
  private centroid: L.LatLngExpression = [12.6306349,-8.027064]; // ODC Mali


  // Méthode pour initialiser la carte
  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 15
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 5,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    // Définir une icône personnalisée avec l'image 'carte-des-broches.png'
    const customIcon = L.icon({
      iconUrl: 'assets/images/carte-des-broches.png', // Chemin vers ton icône
      iconSize: [32, 32], // Taille de l'icône (32x32 pixels)
      iconAnchor: [16, 32], // Point d'ancrage de l'icône (au milieu en bas)
      popupAnchor: [0, -32] // Position du popup par rapport à l'icône
    });

    // Créer 5 marqueurs aléatoires autour du centre et leur appliquer l'icône personnalisée
    // Array(5).fill(this.centroid).map(
    //   (x: any) => [(x as [number, number])[0] + (Math.random() - 0.5) / 10, (x as [number, number])[1] + (Math.random() - 0.5) / 10]
    // ).map(
    //   x => L.marker(x as L.LatLngExpression, { icon: customIcon }) // Utilisation de l'icône personnalisée ici
    // ).forEach(
    //   x => x.addTo(this.map)
    // );
    const marker = L.marker(this.centroid, { icon: customIcon });
    marker.addTo(this.map);


    tiles.addTo(this.map);
  }

  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }
}
