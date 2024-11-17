import { Component } from '@angular/core';
import { AniosComponent } from './anios/anios.component';
import { TutoresComponent } from './tutores/tutores.component';
import { LineaComponent } from './linea/linea.component';
import { EmpresasComponent } from './empresas/empresas.component';

@Component({
  selector: 'app-estadisticos',
  standalone: true,
  imports: [AniosComponent, EmpresasComponent, LineaComponent, TutoresComponent, LineaComponent],
  templateUrl: './estadisticos.component.html',
  styleUrl: './estadisticos.component.css'
})
export class EstadisticosComponent {

}
