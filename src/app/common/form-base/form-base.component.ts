import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-form-base',
    template: ''
})
/* Base class to be implemented by components that you would
like to host inside of popup-box and rect on events from popup. */
export class FormBaseComponent {

    @Output() isValid = false;

    /* Ask the component to validate */
    @Output() validateRequest: EventEmitter<void> = new EventEmitter<void>();

    /* Ask the component to submit */
    @Output() submitRequest: EventEmitter<void> = new EventEmitter<void>();

    /* Ask the component to reset */
    @Output() resetRequest: EventEmitter<void> = new EventEmitter<void>();

    /* Updates has been submitted */
    @Output() submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

    /* will be emitted when valid state of the hosted component changes. */
    @Output() validityChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    /* will be emitted when visible state of the hosted component changes. */
    @Output() appearanceChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    /* enable reseting the form after active form has changed */
    resetAfterActiveChange = true;

    private form: FormGroup;
    private statusSubscription: Subscription;

    constructor() {
        this.resetRequest.subscribe(() => this.reset());
        this.validityChanged.subscribe((valid: boolean) => this.isValid = valid);
        this.submitted.subscribe(() => this.reset());

        this.validateRequest.subscribe(() => {
            if (this.form) {
                this.form.markAllAsTouched();
                this.form.updateValueAndValidity();

                this.isValid = this.form.valid;
            }
        });
    }

    protected set activeForm(form: FormGroup) {
        if (this.resetAfterActiveChange) {
            this.reset();
        }

        this.form = form;

        this.statusSubscription?.unsubscribe();
        this.statusSubscription = form.statusChanges.subscribe(status => this.isValid = status === 'VALID');
    }

    private reset = (): void => this.form?.reset();
}