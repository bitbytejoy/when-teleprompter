export function runCreateElement(markup: string): Element {
    const div = document.createElement("div");

    div.innerHTML = markup;

    const element = div.firstElementChild;

    if (element) {
        return element;
    } else {
        throw new Error("Invalid HTML");
    }
}

