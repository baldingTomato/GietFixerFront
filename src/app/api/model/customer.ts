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
import { Address } from './address';


export interface Customer { 
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    address?: Address;
    email?: string | null;
    phoneNumber?: string | null;
}

