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
import { DeliveryType } from './deliveryType';
import { RepairmentStatus } from './repairmentStatus';

export interface RepairmentRequest { 
    completionTime?: Date;
    estimatedCost?: number;
    total?: number;
    repairmentStatus?: RepairmentStatus;
    remarks?: string;
    deliveryType?: DeliveryType;
    employeeId?: string;
    customerId?: string;
    itemId?: string;
}