import {AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, SimpleChanges, ViewChild} from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { DotThemeProvider } from '@digital-ai/dot-components';

const containerElementName = 'dotNgContainer';

@Component({
    selector: 'dot-ng',
    template: `<span #${containerElementName}></span>`
})
export class CustomDotNgComponent implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild(containerElementName, {static: true}) containerRef!: ElementRef;


    ngOnChanges(changes: SimpleChanges): void {
        this.render();
    }

    ngAfterViewInit() {
        this.render();
    }

    ngOnDestroy() {
        ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
    }

    private render() {
        ReactDOM.render(
            <DotThemeProvider>
            </DotThemeProvider>
            ,
          this.containerRef.nativeElement
        );
    }
}
