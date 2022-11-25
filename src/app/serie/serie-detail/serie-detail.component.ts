// Input es para recibir del Sibling
import { Component, OnInit, Input } from '@angular/core';

// Para la ruta al detail
import { ActivatedRoute } from '@angular/router';

// Se debe importar la clase que modela las series y el service
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css'],
})
export class SerieDetailComponent implements OnInit {

  // Para recibir del Sibling
  serieId!: string;
  @Input() serieDetail!: Serie;

  constructor(
    // Para la ruta al detail
    private route: ActivatedRoute,

    private serieService: SerieService
  ) {}

  getSerie() {
    this.serieService.getSerie(this.serieId).subscribe((serieFromService) => {
      this.serieDetail = serieFromService;
    });
  }

  ngOnInit() {
    if (this.serieDetail === undefined) {
      this.serieId = this.route.snapshot.paramMap.get('id')!;
      if (this.serieId) {
        console.log("Saca bien el id");

        this.getSerie();
      }
    }
  }
}
