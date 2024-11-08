import { Component, EventEmitter, Output } from '@angular/core';
import { Comic } from '../../models/Comic';

@Component({
  selector: 'app-new-comic',
  templateUrl: './new-comic.component.html',
  styleUrls: ['./new-comic.component.css']
})
export class NewComicComponent {

  @Output() newComic = new EventEmitter();

  comic: Comic = new Comic('', '', '')

  // Método para manejar el envío del formulario
  submitForm(comicForm: any) {
    if (comicForm.valid) {
      // Lógica para manejar el cómic (por ejemplo, enviar a un servidor o agregar a una lista)
      console.log('Nuevo cómic:', this.comic);

      let com = new Comic(this.comic.nombre, this.comic.imagen, this.comic.descripcion)

      // Aquí podrías emitir un evento para agregar el cómic a una lista en un componente padre, por ejemplo:
      // this.newComic.emit(this.comic);
      this.newComic.emit(com)

      // Limpiar el formulario después de enviar
      comicForm.resetForm();
      this.comic = { nombre: '', imagen: '', descripcion: '' }; // Resetear el objeto comic
    } else {
      console.log('Formulario inválido');
    }
  }
}
