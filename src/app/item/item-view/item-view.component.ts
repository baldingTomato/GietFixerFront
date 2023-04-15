import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ItemService, Item } from 'src/app/api';

@Component({
  selector: 'app-items',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})

export class ItemComponent implements OnInit {
  content?: string;
  
  itemService : ItemService;
  items: Item[];

constructor(iser : ItemService, private http: HttpClient, private router: Router) {

  this.itemService = iser;

}

deleteItem(itemId: string | undefined) {
  if(itemId == undefined){
    return;
  }
  if (confirm("Are you sure you want to delete this customer?")) {
  this.itemService.deleteItem(itemId).subscribe(
    data => {
      console.log('Item deleted successfully');
      // refresh the list of items
      this.ngOnInit();
    },
    error => {
      console.error('Error deleting item: ', error);
    }
  );
  }
}

updateItem(selectedItem: Item) {
  console.log(selectedItem);
  this.router.navigate(['/update', selectedItem.id], { queryParams: { item: JSON.stringify(selectedItem) } });
}
  
  
async ngOnInit(){
    this.itemService.getAllItems().subscribe(
      data => {
        this.items = data;
        console.log(data);
      }
    );

   
  }
}
