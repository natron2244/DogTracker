import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector : '[dtChanger]'
})

export class DogChangerDirective {
    @HostBinding('class.is-Changed') isChanged = false;
    @Input() set dtChanger(value) {
        this.isChanged = value;
    }
}
