import { Component, inject, Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export abstract class Unsubscriber implements OnDestroy {
    protected destroy$ = new Subject<void>();

    constructor() { }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}