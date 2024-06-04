import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para standalone components
import { UserService } from '../../servicios/user.service';


@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  providers: [UserService]
})
export class UserTableComponent {

  usuarios: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.obtenerUsuarios().subscribe(
      (response: any) => {
        this.usuarios = response;
      },
      (error: any) => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }
}
