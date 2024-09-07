export function runScrollTeleprompter(teleprompter: Element, distance: number) {
    const scrollContainer = teleprompter.querySelector('[data-key="scroll-container"]');
    if (scrollContainer instanceof Element) {
        scrollContainer.scrollBy(0, Math.max(1.0, distance));
    }
}

