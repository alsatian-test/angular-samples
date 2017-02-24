import "alsatian-angular-test-shim";
import { Setup, Teardown, Expect, Test, TestFixture } from "alsatian";
import { By } from "@angular/platform-browser";
import { TestBed, getTestBed } from "@angular/core/testing";
import { ChildComponent } from "./child-component";
import { ComponentWithChild } from "./component-with-child";
import { Component } from "@angular/core";

@TestFixture("child component tests")
export class ComponentWithChildTests {

    @Setup
    private _setup() {
        TestBed.configureTestingModule({
            declarations: [ ComponentWithChild, ChildComponent ],
        });
    }

    @Teardown
    private _teardown() {
        getTestBed().resetTestingModule();
    }

    @Test("parent component renders as it should")
    public parentComponentRenders() {

        const fixture = TestBed.createComponent(ComponentWithChild);
        Expect(fixture.debugElement.query(By.css("p")).nativeElement.textContent).toBe("I am a parent");
    }

    @Test("child component renders as it should")
    public childComponentRenders() {

        const fixture = TestBed.createComponent(ComponentWithChild);
        Expect(fixture.debugElement.query(By.css("child-component")).nativeElement.textContent).toBe("I am a child");
    }
}