import "alsatian-angular-test-shim";
import { Setup, Teardown, Expect, Test, TestFixture } from "alsatian";
import { By } from '@angular/platform-browser';
import { TestBed, getTestBed } from '@angular/core/testing';
import { SimpleComponent } from "./simple.component";

@TestFixture("simple component tests")
export class SimpleComponentTests {

    @Setup
    private _setup() {
        TestBed.configureTestingModule({
            declarations: [ SimpleComponent ], // declare the test component
        });
    }

    @Teardown
    private _teardown() {
        getTestBed().resetTestingModule();
    }

    @Test("simple component exists")
    public simpleComponentExists() {

        const fixture = TestBed.createComponent(SimpleComponent);

        // query for the title <h1> by CSS element selector
        const de = fixture.debugElement.query(By.css("simple-component"));

        Expect(fixture.debugElement.nativeElement.textContent).toBe("something");
    }
}