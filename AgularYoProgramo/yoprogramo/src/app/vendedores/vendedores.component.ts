import { Component, OnInit } from '@angular/core';
import { Vendedores} from '../vendedores';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {

  ListaVendedores: Vendedores[] = [
    new Vendedores("Pepe","Sand","pepe@hotmail.com",200),
    new Vendedores("N Persona 2","A Persona 2","Email Persona 2",1800),
    new Vendedores("N Persona 3","A Persona 3","Email Persona 3",1100),
    new Vendedores("N Persona 4","A Persona 4","Email Persona 4",3800)  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
