/**
 * WebAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Customer } from './customer';
import { DeliveryType } from './deliveryType';
import { Employee } from './employee';
import { Item } from './item';
import { Payment } from './payment';
import { RepairmentStatus } from './repairmentStatus';

export interface Repairment { 
    id: string;
    creationTime?: Date;
    completionTime?: Date;
    estimatedCost?: number;
    payments?: Array<Payment>;
    total?: number;
    status?: RepairmentStatus;
    remarks?: string;
    deliveryType?: DeliveryType;
    employee?: Employee;
    customer?: Customer;
    item?: Item;
    employeeId?: string;
    customerId?: string;
    itemId?: string;
}