import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessages'
})
export class ErrorMessagesPipe implements PipeTransform {

  transform(error: any, ...args: unknown[]): unknown {
    if (!error) return '';

    let defaultMsg = 'Error desconocido';
    const opciones: Record<string, string> = {
      required: 'Este campo es requerido',
      minlength: `Este campo debe tener al menos ${error.value.requiredLength} caracteres`,
      email: 'Debe ingresar un e-mail valido',
      maxlength: '..',
      min: 'Debe ser mayor a ...',
      max: '',
      noHomero: 'El valor ingresado no puede ser la palabra Homero'
    }

    if (opciones[error.key]) {
      defaultMsg = opciones[error.key]
    }
    return defaultMsg;
  }

}
