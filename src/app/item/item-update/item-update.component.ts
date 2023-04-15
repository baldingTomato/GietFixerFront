import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item, ItemRequest, ItemService } from "../../api";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-item',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class UpdateItemComponent {
  @Input() item: Item;
  @Output() updated = new EventEmitter<any>();

  itemForm: FormGroup;
  selectedItem: Item;

  itemService: ItemService;

  constructor(iser: ItemService, private http: HttpClient,
    private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {

    this.itemService = iser;
    this.activatedRoute.queryParams.subscribe(params => {
      this.item = JSON.parse(params['item']);
    });
  }

  async ngOnInit() {

    this.itemForm = this.formBuilder.group({
      model: [this.item.model, Validators.required],
      serial: [this.item.serial, Validators.required],
      imei: [this.item.imei, Validators.required]
    });
    
  }

  onUpdate() {

    const updatedItem = this.getItemFromForm();

    this.updated.emit(this.item);
    //console.log(updatedRepairment);
    //console.log(this.repairment);
      this.itemService.updateItem(this.item.id, updatedItem).subscribe(
        result => {
          console.log('Item updated successfully', result);
          this.router.navigate(['/home'], { queryParams: { selectedTab: 'ITEM' } });
        },
        error => {
          console.error('Error updating item', error);
        }
      );

  }

  getItemFromForm(){
    const request = {} as ItemRequest;
    request.model = this.itemForm.value['model'];
    request.serial = this.itemForm.value['serial'];
    request.imei = this.itemForm.value['imei'];
    return request;
}
}