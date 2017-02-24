import "alsatian-angular-test-shim";
import { AsyncSetup, Setup, Teardown, Expect, Test, TestFixture } from "alsatian";
import { TestBed, getTestBed } from "@angular/core/testing";
import { ComponentWithExternalTemplate } from "./component-with-external-template";
import * as sinon from "sinon";
import * as FileSystem from "fs";

@TestFixture("component with external template tests")
export class ComponentWithExternalTemplateTests {

    @AsyncSetup
    private async _setup() {
        // you could setup with webpack or rollup or whatever but this is super simple
        const server = sinon.fakeServer.create();
        server.autoRespond = true;    
        server.respondWith("external-template.html", FileSystem.readFileSync("./components/external-template.html", "utf-8"));

        await TestBed.configureTestingModule({
            declarations: [ ComponentWithExternalTemplate ]
        }).compileComponents();
    }

    @Teardown
    private _teardown() {
        getTestBed().resetTestingModule();
    }

    @Test("external template is loaded")
    public externalTemplateIsLoaded() {

        const fixture = TestBed.createComponent(ComponentWithExternalTemplate);
        Expect(fixture.debugElement.nativeElement.textContent).toBe("I'm totally getting rendered");
    }
}