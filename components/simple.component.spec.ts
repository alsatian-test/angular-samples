import { Expect, Test, TestFixture } from "alsatian";
import { SimpleComponent } from "./simple.component";

@TestFixture("simple component tests")
export class SimpleComponentTests {

    @Test("simple component exists")
    public simpleComponentExists() {
        Expect(SimpleComponent).toBeDefined();
        Expect(SimpleComponent).not.toBeNull();
    }
}