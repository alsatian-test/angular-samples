import { Component } from "@angular/core";

@Component({
    selector: "parent-component",
    template: `<p>I am a parent</p>
               <child-component></child-component>`
})
export class ComponentWithChild {

}