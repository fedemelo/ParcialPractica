import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Se importan los componentes de listar y el de detalle
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

@NgModule({
  imports: [CommonModule],
  // Se debe poner el componente tanto en declarations como en exports
  declarations: [SerieListComponent, SerieDetailComponent],
  exports: [SerieListComponent, SerieDetailComponent]
})
export class SerieModule {}
