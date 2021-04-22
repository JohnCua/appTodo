import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';



export const estadoInicial: filtrosValidos = 'todos';


const _filtroReducer = createReducer(
    estadoInicial,
    on(setFiltro , (state: filtrosValidos, { filtro }) => filtro ), 
    );

export function filtroRerducer( state: any, action:any ) {
    return _filtroReducer(state, action);
}