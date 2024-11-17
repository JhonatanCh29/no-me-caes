import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Tutores } from '../../models/tutores';
import { TutoresService } from '../../services/tutores.service';

@Component({
  selector: 'app-tutores',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './tutores.component.html',
  styleUrl: './tutores.component.css'
})
export class TutoresComponent {
    tutors!: Tutores[];

    constructor(private tutorService: TutoresService) {}

    ngOnInit() {
        this.tutorService.getTutores().then((tutors) => (this.tutors = tutors));
    }

    getTutores(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}
