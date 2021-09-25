import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  imgUrls = [];
  isLoading = false;
  isError = false;

  constructor(
    private http: HttpClient,
    private planetsService: PlanetsService
  ) {}

  ngOnInit(): void {}

  onFetchData() {
    this.isLoading = true;
    this.planetsService.getImages().subscribe(
      (images) => {
        this.isLoading = false;
        this.imgUrls = images;
      },
      (error) => {
        this.isError = true;
      }
    );
  }
}
