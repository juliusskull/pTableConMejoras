import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { TareasPendientes, TareasPendientesFiltro } from 'src/app/interfaces/tareaspendientes.interface';
import { Filtro } from './Filtro';

@Component({
  selector: 'app-gesp-table',
  templateUrl: './gesp-table.component.html',
  styleUrls: ['./gesp-table.component.css']
})
export class GespTableComponent implements OnInit, OnChanges {
 
  @Input() cols: any[];
  @Input() tareas_pendientes: TareasPendientes[];
  @Input() filtrosPosibles: TareasPendientesFiltro[];
  filtros: Filtro[];
  @Output() newItemEvent = new EventEmitter<TareasPendientes>();
  selectedTarea: TareasPendientes;
  idProceso: any;
  descripcionTarea: any;
  rows: number;
  rowsTxt: string;
  TipoDeTareaValue ='';
  totalRecords = 100;
  tipo_tareas_select: any[];
  MOSTRAR_FILTROS = false;
  vKey;loading;
  cities1 = [
    {label: '5 Registros',  value: 5},
    {label: '10 Registros', value: 10},
    {label: '15 Registros', value: 15},
    {label: '50 Registros', value: 50},
    {label: '100 Registros',  value: 50}
];
options = [5, 10, 15, 50, 100];

  constructor() { }

  ini() {
    if(localStorage.getItem('row') != null) {
      this.rows = Number(localStorage.getItem('row'));

    } else {
        this.rows = 15;
    }
    this.rowsTxt = this.rows.toString();
    
  }
  addNewItem(value: TareasPendientes) {
    this.newItemEvent.emit(value);
  }

  ngOnInit() { /*this.ini(); */ }

  ngOnChanges() { this.ini();}
  bajando(){
      //(keyup.arrowup)
      this.tareaNext(this.selectedTarea);
  }
  subiendo(){
      this.tareaBack(this.selectedTarea);
  }
  cambiarGrilla(value){
    this.rows = value;
    //alert(this.rows);
    console.log('row=>' + this.rows);
    localStorage.setItem('row', this.rows.toString());
    this.rowsTxt = this.rows.toString();
}
   //----------------------- table
 
   
filtrarGrillaCampo2(dt, campo){
  
    this.filtros.forEach(a=>{
        if(a.valor === campo){
            const r= a.valorSelect;
            dt.filter(r, campo, 'contains');
        }

    });
}
limpiarFiltros(dt){
    dt.reset();
    this.filtros.forEach(a => {
        a.valorSelect = 0;
    });
}

cargarTareasPosibles() {

    this.filtros = [];
  
    if(this.filtrosPosibles){

        this.filtrosPosibles.forEach(a => {
            const tt = [{label: a.filtro,  value:  ''}];
            let f = new Filtro(a.label, a.filtro, a.valor, []);
            f.valores.push({label: a.filtro,  value:  ''});
            this.filtros.push(f);
            this.filtrarTareasLabel(a.valor);
        });

    }
   

    this.MOSTRAR_FILTROS = true;

}
filtrarTareasLabel(key){
    let tt = [];
    this.tareas_pendientes.forEach(a => {      tt.push(a[key]);     });
    tt = this.filtrarRepetidos(tt);
    if(this.filtros){
        this.filtros.forEach(aa => {
            if(aa.valor === key) {
                tt.forEach(a => {  aa.valores.push({label: a,  value:  a});  }    );
            }
        });
    }
 
}
filtrarRepetidos(tt){
    return   tt.filter((item, index) => {
        return tt.indexOf(item) === index;
      });
}


tareaNext(tarea){
    let k=0;
    this.tareas_pendientes.forEach(a=>{
        k++;
        if(tarea === a){
            this.selectedTarea=  this.tareas_pendientes[k];
           
            if(k+2 > this.rows){
                this.rows= k+5;
            }
            this.onRowSelectItem();
        }
        
    });
    
}
tareaBack(tarea){
    let k = 0;
    this.tareas_pendientes.forEach(a=>{
       
        if(tarea === a){
            if( k > 0 ){
                this.selectedTarea =  this.tareas_pendientes[k - 1];
                this.onRowSelectItem();
            }
            
        }
        k++;
    });
    
}
onRowSelectItem(){
  try{
      
       console.log('idProceso => ' + this.selectedTarea.ID_PROCESO + '=>' + this.selectedTarea.EXTRA);
       this.idProceso = this.selectedTarea.ID_PROCESO;
       // tslint:disable-next-line:max-line-length
       this.descripcionTarea = this.selectedTarea.EXTRA; 
       this.addNewItem(this.selectedTarea);
   } catch(e){

   }
  
}
 twoSum = (nums, target) =>{
    let  c=0;
    nums.array.forEach(element => {
        
    });
    return  nums.map((a,index)=>{
        return (c+ a) === target
    });

};
filtrar_tareas(dt) {
   
    if (this.TipoDeTareaValue === 'TODOS') {
        dt.reset();
    } else {
        dt.filter(this.TipoDeTareaValue, 'DESC_TAR', 'equals');
    }
}
bsq_tareas(dt) {

}

//------------------------------------------------

}
