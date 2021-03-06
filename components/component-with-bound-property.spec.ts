import "alsatian-angular-test-shim";
import { Setup, Teardown, Expect, AsyncTest, TestCase, TestFixture } from "alsatian";
import { TestBed, getTestBed } from "@angular/core/testing";
import { ComponentWithBoundProperty } from "./component-with-bound-property";

@TestFixture("component with bound property tests")
export class ComponentWithBoundPropertyTets {

    @Setup
    private _setup() {
        TestBed.configureTestingModule({
            declarations: [ ComponentWithBoundProperty ],
        });
    }

    @Teardown
    private _teardown() {
        getTestBed().resetTestingModule();
    }

    @TestCase("John")
    @TestCase("Jane")
    @AsyncTest("property is output")
    public async propertyIsOutput(name: string) {

        const fixture = TestBed.createComponent(ComponentWithBoundProperty);

        const component = fixture.componentInstance;
        component.name = name;

        fixture.detectChanges();

        await fixture.whenStable();

        Expect(fixture.debugElement.nativeElement.textContent).toBe("My name is: " + name);
    }
}