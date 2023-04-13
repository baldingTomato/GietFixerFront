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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Repairment } from '../model/repairment';
import { RepairmentRequest } from '../model/repairmentRequest';
import { RepairmentStatus } from '../model/repairmentStatus';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RepairmentService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addRepairment(body?: RepairmentRequest, observe?: 'body', reportProgress?: boolean): Observable<Repairment>;
    public addRepairment(body?: RepairmentRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Repairment>>;
    public addRepairment(body?: RepairmentRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Repairment>>;
    public addRepairment(body?: RepairmentRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Repairment>('post',`${this.basePath}/api/Repairment`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param repairmentId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteRepairment(repairmentId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteRepairment(repairmentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteRepairment(repairmentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteRepairment(repairmentId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (repairmentId === null || repairmentId === undefined) {
            throw new Error('Required parameter repairmentId was null or undefined when calling deleteRepairment.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/api/Repairment/${encodeURIComponent(String(repairmentId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllRepairments(observe?: 'body', reportProgress?: boolean): Observable<Array<Repairment>>;
    public getAllRepairments(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Repairment>>>;
    public getAllRepairments(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Repairment>>>;
    public getAllRepairments(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Repairment>>('get',`${this.basePath}/api/Repairment`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param repairmentId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRepairmentByID(repairmentId: string, observe?: 'body', reportProgress?: boolean): Observable<Repairment>;
    public getRepairmentByID(repairmentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Repairment>>;
    public getRepairmentByID(repairmentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Repairment>>;
    public getRepairmentByID(repairmentId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (repairmentId === null || repairmentId === undefined) {
            throw new Error('Required parameter repairmentId was null or undefined when calling getRepairmentByID.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Repairment>('get',`${this.basePath}/api/Repairment/${encodeURIComponent(String(repairmentId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param repairmentStatus 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRepairmentByStatus(repairmentStatus?: RepairmentStatus, observe?: 'body', reportProgress?: boolean): Observable<Repairment>;
    public getRepairmentByStatus(repairmentStatus?: RepairmentStatus, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Repairment>>;
    public getRepairmentByStatus(repairmentStatus?: RepairmentStatus, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Repairment>>;
    public getRepairmentByStatus(repairmentStatus?: RepairmentStatus, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (repairmentStatus !== undefined && repairmentStatus !== null) {
            queryParameters = queryParameters.set('repairmentStatus', <any>repairmentStatus);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Repairment>('get',`${this.basePath}/byStatus`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param repairmentId 
     * @param employeeId 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRepairment(repairmentId: string, employeeId: string, body?: RepairmentRequest, observe?: 'body', reportProgress?: boolean): Observable<Repairment>;
    public updateRepairment(repairmentId: string, employeeId: string, body?: RepairmentRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Repairment>>;
    public updateRepairment(repairmentId: string, employeeId: string, body?: RepairmentRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Repairment>>;
    public updateRepairment(repairmentId: string, employeeId: string, body?: RepairmentRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (repairmentId === null || repairmentId === undefined) {
            throw new Error('Required parameter repairmentId was null or undefined when calling updateRepairment.');
        }

        if (employeeId === null || employeeId === undefined) {
            throw new Error('Required parameter employeeId was null or undefined when calling updateRepairment.');
        }


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Repairment>('put',`${this.basePath}/api/Repairment/${encodeURIComponent(String(employeeId))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
