import { Component } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent {
  itens = [
    {'nome': 'Arroz', 'Qtd': '1 kg'}
  ];
}
