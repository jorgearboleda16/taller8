import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecursosService } from './servicios/recursos.service';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { DataTableComponent } from './shared/tabla/data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { Foto } from './interfaz/foto';
import { UserTableComponent } from './shared/user-table/user-table.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent, DataTableComponent, UserTableComponent, HttpClientModule, AboutComponent, RouterLink, HomeComponent],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clienteAngular';
  fotos: Foto[] = [];

  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>;
    });
  }
}
