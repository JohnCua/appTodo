import { createAction, props } from '@ngrx/store';


export const crear = createAction(
    '[TODO] Crear Todo',
    props<{ texto: string }>()  //argumento
    );


export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()  //argumento
    );

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto: string }>()  //argumento
    );

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number }>()  //argumento
    );

export const toggleall = createAction(
    '[TODO] Seleccionar Todos',
    props<{ completado: boolean }>()  //argumento
    );