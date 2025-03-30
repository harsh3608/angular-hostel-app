import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-list',
  imports: [
    CommonModule,
    ButtonModule,
    TableModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }




}
