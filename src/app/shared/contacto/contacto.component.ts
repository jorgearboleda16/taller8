import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  titulo:string="Contactos"

  medios:any[] = [
    {"texto":"En Twitter"},
    {"texto":"En Facebook"},
    {"texto":"En por correo electronico"},
    
  ]

}
