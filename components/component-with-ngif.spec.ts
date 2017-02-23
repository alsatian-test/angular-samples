import "alsatian-angular-test-shim";
import { Setup, Teardown, Expect, AsyncTest, Test, TestFixture } from "alsatian";
import { By } from "@angular/platform-browser";
import { TestBed, getTestBed } from "@angular/core/testing";
import { ComponentWithNgIf } from "./component-with-ngif";
import { CommonModule } from "@angular/common";

@TestFixture("component with ngif tests")
export class ComponentWithNgIfTests {

    @Setup
    private _setup() {
        TestBed.configureTestingModule({
            declarations: [ ComponentWithNgIf ]
        });
    }

    @Teardown
    private _teardown() {
        getTestBed().resetTestingModule();
    }

    @Test("child element is attached")
    public shouldCreateElementIfFalse() {

        const fixture = TestBed.createComponent(ComponentWithNgIf);

        const component = fixture.componentInstance;
        component.feelingFancy = true;

        fixture.detectChanges();

        Expect(fixture.debugElement.query(By.css(".fancy"))).toBeDefined();
        Expect(fixture.debugElement.query(By.css(".fancy"))).not.toBeNull();
    }

    @Test("child element is not attached")
    public shouldntCreateElementIfFalse() {

        const fixture = TestBed.createComponent(ComponentWithNgIf);

        const component = fixture.componentInstance;
        component.feelingFancy = false;

        fixture.detectChanges();

        Expect(fixture.debugElement.query(By.css(".fancy"))).toBeNull();
    }
}