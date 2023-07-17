import {AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, SimpleChanges, ViewChild} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {DotAppSwitcher, DotThemeProvider} from '@digital-ai/dot-components';

const containerElementName = 'dotAppSwitcherContainer';

@Component({
    selector: 'app-switcher',
    template: `<span #${containerElementName}></span>`
})
export class CustomReactComponentWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
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

        const activeApp = {
            name: 'Continuous Testing'
        }

        const args = {
            open: true,
        }

        ReactDOM.render(
            <DotThemeProvider>
                <DotAppSwitcher activeApp={activeApp} {...args}/>
            </DotThemeProvider>
            ,
            this.containerRef.nativeElement
        );
    }
}
