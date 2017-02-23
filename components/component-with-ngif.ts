import { Component } from "@angular/core";

@Component({
    selector: "component-with-ngif",
    template: `<div class="fancy" *ngIf="feelingFancy"></div>`
})
export class ComponentWithNgIf {
    public feelingFancy: boolean = false;
}