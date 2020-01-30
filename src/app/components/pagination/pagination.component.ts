import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  page: number = 1;
  userId: number = 2;
  ratings: Array<any>;  
  pages: Array<number>;
  totalItems: number;
  itemsPerPage: number;

  constructor(private userService: UserService) { }  

  ngOnInit() {  
    // this.data = Array(1000).fill(0).map((x, i) => ({ id: (i + 1), name: `Item Paged ${i + 1}`, product: `Product ${i + 1}` }));  
    this.getRatings();
  
  } 

  getRatings(){
    this.userService.getUserPaginatedArtists(this.userId, this.page - 1).subscribe(data =>
      {console.log(data);
        this.ratings = data['content'];
        this.pages = new Array(data['totalPages']);
        this.totalItems = data['totalElements'];
        this.itemsPerPage = data['size'];
      },
      (error) => console.log(error.error.message)
      );
  }

  loadPage($event: any){
    console.log($event);
    this.page = $event;
    this.getRatings();
  }



  // beginPagination(pagedItems: Array<any>) {  
  //   this.pagedItems = pagedItems;  
  // }  

}
