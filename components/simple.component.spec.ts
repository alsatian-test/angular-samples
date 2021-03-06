import "alsatian-angular-test-shim";
import { Setup, Teardown, Expect, Test, TestFixture } from "alsatian";
import { TestBed, getTestBed } from "@angular/core/testing";
import { SimpleComponent } from "./simple.component";

@TestFixture("simple component tests")
export class SimpleComponentTests {

    @Setup
    private _setup() {
        TestBed.configureTestingModule({
            declarations: [ SimpleComponent ],
        });
    }

    @Teardown
    private _teardown() {
        getTestBed().resetTestingModule();
    }

    @Test("simple component exists")
    public simpleComponentExists() {

        const fixture = TestBed.createComponent(SimpleComponent);
        Expect(fixture.debugElement.nativeElement.textContent).toBe("I am soooooo simple");
    }
}