import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-descripcion-summary',
  templateUrl: './descripcion-summary.component.html',
  styleUrls: ['./descripcion-summary.component.css']
})
export class DescripcionSummaryComponent implements OnInit {
  @Input()
  descripcion: string;
  constructor() { }

  ngOnInit() {
  }

}
