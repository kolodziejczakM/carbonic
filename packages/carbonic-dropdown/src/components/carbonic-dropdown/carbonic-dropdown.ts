import { newE2EPage } from "@stencil/core/testing";

// TODO: replace it with actual one
describe("carbonic-dropdown", () => {
    it("renders", async () => {
        const page = await newE2EPage();

        await page.setContent("<carbonic-dropdown></carbonic-dropdown>");
        const element = await page.find("carbonic-dropdown");
        expect(element).toHaveClass("hydrated");
    });

    it("renders changes to the name data", async () => {
        const page = await newE2EPage();

        await page.setContent("<carbonic-dropdown></carbonic-dropdown>");
        const component = await page.find("carbonic-dropdown");
        const element = await page.find("carbonic-dropdown >>> div");
        expect(element.textContent).toEqual(`Hello, World! I'm `);

        component.setProperty("first", "James");
        await page.waitForChanges();
        expect(element.textContent).toEqual(`Hello, World! I'm James`);

        component.setProperty("last", "Quincy");
        await page.waitForChanges();
        expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

        component.setProperty("middle", "Earl");
        await page.waitForChanges();
        expect(element.textContent).toEqual(
            `Hello, World! I'm James Earl Quincy`
        );
    });
});
