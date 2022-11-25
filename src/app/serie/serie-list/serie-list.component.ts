// Input, Output y EventEmitter son para comunicación Sibling to Sibling
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Se debe importar la clase que modela las series y el service
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
})
export class SerieListComponent implements OnInit {
  // Atributos
  series: Array<Serie> = [];
  avrg: number = 0;

  // Para detalle
  selectedSerie!: Serie;
  selected: boolean = false;

  // Constructor para que reciba el SerieService
  constructor(private serieService: SerieService) {}

  getSeries(): void {
    // Tomar las series del service, que a su vez las toma del archivo
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;

      // Calcular el promedio de las temporadas de las series
      let sum: number = 0;
      series.map((s) => {
        sum += s.seasons;
      });
      this.avrg = sum / series.length;
    });
  }

  // Ejecuta cuando se hace (click) al tr. La llamada está en la vista
  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
    this.selected = true;
    console.log("Asignó!");
  }

  // Cuando corra el componente, pida las series al service
  ngOnInit() {
    this.getSeries();
  }
}
