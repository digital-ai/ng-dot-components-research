import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild} from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom';
import {DotAppSwitcher, DotCoreApiProvider, DotIconButton, DotThemeProvider, DotTypography, useDotCoreApiContext} from '@digital-ai/dot-components';

const containerElementName = 'dotAppSwitcherContainer';

interface AppSwitcherButtonProps {
  iconId?: string;
  tooltip?: string;
}

function AppSwitcherButton({ iconId = 'apps', tooltip = "Toggle app switcher" }: AppSwitcherButtonProps) {
  const { setIsAppSwitcherOpen } = useDotCoreApiContext();

  const toggleAppSwitcher = () => {
    setIsAppSwitcherOpen((orig) => !orig);
  }

  return (
    <DotIconButton onClick={toggleAppSwitcher} iconId={iconId} tooltip={tooltip} />
  );
}

interface ActiveAppInfo {
  name: string;
  product?:
    | 'Release'
    | 'Deploy'
    | 'Agility'
    | 'Continuous Testing'
    | 'Intelligence'
    | 'Application Protection';
}

@Component({
    selector: 'dot-app-switcher',
    template: `<span #${containerElementName}></span>`
})
export class DotAppSwitcherWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
    @Input() public buttonIconId = 'apps';
    @Input() public buttonTooltip = "Toggle app switcher";
    @Input() public platformApi: string = 'foo';
    @Input() public includePlatformConsole = true;
    @Input() public yOffset = 56;
    @Input() public zIndex = 990;
    @Input() public activeApp: ActiveAppInfo = { name: 'Undefined', product: 'Agility'};
    @Input() public maxRecentInstances = 5;
    @Input() public noAppTypeLabel = 'Other';
    @Input() public searchInstancesThreshold = 5;
    @Output() public onClose = new EventEmitter<void>();
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

    handleOnClose() {
        if (this.onClose) {
            this.onClose.emit();
        }
    }

    private render() {
      ReactDOM.render(
        <DotThemeProvider>
          <DotCoreApiProvider apiUrl={this.platformApi}>
            <AppSwitcherButton iconId={this.buttonIconId} tooltip={this.buttonTooltip} />
            <DotAppSwitcher
              includePlatformConsole={this.includePlatformConsole}
              yOffset={this.yOffset}
              zIndex={this.zIndex}
              activeApp={this.activeApp}
              maxRecentInstances={this.maxRecentInstances}
              noAppTypeLabel={this.noAppTypeLabel}
              searchInstancesThreshold={this.searchInstancesThreshold}
              onClose={this.handleOnClose}
            />
          </DotCoreApiProvider>
        </DotThemeProvider>
        ,
        this.containerRef.nativeElement
      );
    }
}
