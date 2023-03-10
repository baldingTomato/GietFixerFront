/**
 * WebAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Item } from './item';
import { Payment } from './payment';
import { Employee } from './employee';
import { Customer } from './customer';
import { RepairmentStatus } from './repairmentStatus';
import { DeliveryType } from './deliveryType';


export interface Repairment { 
    id?: string;
    creationTime?: string | null;
    completionTime?: string | null;
    estimatedCost?: number;
    payments?: Array<Payment> | null;
    total?: number;
    repairmentStatus?: RepairmentStatus;
    remarks?: string | null;
    deliveryType?: DeliveryType;
    employee?: Employee;
    customer?: Customer;
    item?: Item;
}

