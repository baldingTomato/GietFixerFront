import { Component, OnInit } from '@angular/core';
import { Item, ItemService, ItemRequest } from "../../api";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from 'src/app/common/form-base/form-base.component';

@Component({
    selector: 'app-items-add',
    templateUrl: './item-add.component.html',
    styleUrls: ['./item-add.component.css']
})

export class ItemAddComponent extends FormBaseComponent implements OnInit {
    item: Item;
    itemForm: FormGroup;

    constructor(private itemService: ItemService,
        private formBuilder: FormBuilder) { super();}

    async ngOnInit() {
        this.itemForm = this.formBuilder.group({
            model: ['', Validators.required],
            serial: ['', Validators.required],
            imei: ['', Validators.required]
        })
        
        this.activeForm = this.itemForm;

        this.submitRequest.subscribe(()=>{
            this.addItem();
        })
    }

    addItem() {
        const item = this.getItemFromForm();
        console.log(item);
        this.itemService.addItem(item).subscribe(
            result => {
                console.log('Successfuly added an item');
            },
            error => {
                console.error(error);
            }
        );
    };

    getItemFromForm(){
        const request = {} as ItemRequest;
        request.model = this.itemForm.value['model'];
        request.serial = this.itemForm.value['serial'];
        request.imei = this.itemForm.value['imei'];
        return request;
    }

    submit(){

    }
}
