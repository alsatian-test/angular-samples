import { Component } from "@angular/core";

@Component({
    selector: "component-with-bound-property",
    template: "<p>My name is: {{name}}</p>"
})
export class ComponentWithBoundProperty {
    public name: string;
}