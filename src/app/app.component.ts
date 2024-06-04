import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecursosService } from './servicios/recursos.service';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { DataTableComponent } from './shared/tabla/data-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactoComponent,DataTableComponent],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clienteAngular';
  constructor(private recursosService: RecursosService) {}
}
