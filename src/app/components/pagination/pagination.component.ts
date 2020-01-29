import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  title = 'custom-pagination-angular';  
  data = [];  
  pagedItems: Array<any>;  
  constructor() { }  
  ngOnInit() {  
    this.data = Array(1000).fill(0).map((x, i) => ({ id: (i + 1), name: `Item Paged ${i + 1}`, product: `Product ${i + 1}` }));  
  }  
  beginPagination(pagedItems: Array<any>) {  
    this.pagedItems = pagedItems;  
  }  

}
