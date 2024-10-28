import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { UtilisateurService } from 'src/app/services/utilisateurs.service';
@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.scss'
})
export class LeafletMapComponent implements OnInit {
  longitude: any;
  latitude: any;
  private map!: L.Map;
  private centroid: L.LatLngExpression = [12.6306349, -8.027064]; // ODC Mali
  private customIcon!: L.Icon;

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
    this.customIcon = L.icon({
      iconUrl: 'assets/images/map.png', // Chemin vers ton icône
      iconSize: [30, 40], // Taille de l'icône (42x42 pixels)l x L
      iconAnchor: [16, 32], // Point d'ancrage de l'icône (au milieu en bas)
      popupAnchor: [0, -32] // Position du popup par rapport à l'icône
    });

    tiles.addTo(this.map);
  }

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.initMap();
    this.getRobot();
  }

  robots: any;
  NbreRobot: any;
  getRobot(): void {
    this.utilisateurService.getRobot().subscribe(
      (data) => {
        this.robots = data;
        console.log(this.robots);
        this.NbreRobot = this.robots.length;
        this.longitude = this.robots.longitude
        this.latitude = this.robots.latitude
        console.log(this.longitude)
        console.log(this.latitude)

        // Ajout de chaque robot comme marqueur sur la carte
        this.robots.forEach((robot: any) => {
          const { longitude, latitude } = robot;
          if (longitude && latitude) {
            // Ajouter un marqueur pour chaque robot avec ses coordonnées
            const marker = L.marker([latitude, longitude], { icon: this.customIcon });
            marker.addTo(this.map).bindPopup(`Robot ID: ${robot.id}`);
          }
        });

      },
      (error) => {
        console.error('Erreur lors de la récupération', error);
      }
    );
  }
}
