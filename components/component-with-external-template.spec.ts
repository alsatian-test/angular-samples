import "alsatian-angular-test-shim";
import { Setup, Teardown, Expect, Test, TestFixture } from "alsatian";
import { TestBed, getTestBed } from "@angular/core/testing";
import { ComponentWithExternalTemplate } from "./component-with-external-template";

@TestFixture("component with external template tests")
export class ComponentWithExternalTemplateTests {

    @Setup
    private _setup() {
        TestBed.configureTestingModule({
            declarations: [ ComponentWithExternalTemplate ],
        });
    }

    @Teardown
    private _teardown() {
        getTestBed().resetTestingModule();
    }

    @Test("external template is loaded")
    public externalTemplateIsLoaded() {

        const fixture = TestBed.createComponent(ComponentWithExternalTemplate);
        Expect(fixture.debugElement.nativeElement.textContent).toBe("I am soooooo simple");
    }
}