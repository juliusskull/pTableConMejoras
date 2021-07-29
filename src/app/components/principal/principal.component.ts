import { Component, OnInit } from '@angular/core';
import { TareasPendientes, TareasPendientesFiltro } from 'src/app/interfaces/tareaspendientes.interface';
import { ServicioService } from 'src/app/services/servicio.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  selectedTarea: TareasPendientes; 
  tareas_pendientes: TareasPendientes[];
  cols: any[];
  tipo_tareas_select: any[];
  filtrosPosibles: TareasPendientesFiltro[];
  
  constructor( private servicio: ServicioService) { 
    
  }

  ngOnInit() {
    this.servicio.getValores().subscribe(respose=>{
      this.tareas_pendientes = respose.data as any;
      this.filtrosPosibles = this.tareas_pendientes[0].FILTROS;
    });
    this.cols = [ 
      { field: 'ID_DERIVACION', header: '#', width: '5%' },    
      { field: 'SOLICITANTE', header: 'Solicitante', width: '20%' },
      { field: 'DESC_TAR', header: 'Descripción de la Tarea', width: '20%' },
      { field: 'DEMORA', header: 'D(Días)', width: '5%' },  
      { field: 'DESC_CIR', header: 'Circuito', width: '10%' },
      { field: 'MONTO', header: 'Precio', width: '7%' },

    ];

    this.tipo_tareas_select = [
      { label: 'TODOS', value: 'TODOS' },
      { label: 'CREACION PRESOLICITUD', value: 'CREACION PRESOLICITUD' },
      { label: 'VERIFICACION GERENCIA SOLICITANTE', value: 'VERIFICACION GERENCIA SOLICITANTE' },
    ];
  }
  _onRowSelectItem(t){
    this.selectedTarea = t;
    //this.onRowSelectItem();
    
  }

}
