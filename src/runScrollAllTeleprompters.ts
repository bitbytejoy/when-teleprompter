import { runScrollTeleprompter } from "./runScrollTeleprompter";

export function runScrollAllTeleprompters(teleprompters: Element[], distance: number) {
    teleprompters.forEach(teleprompter => {
        runScrollTeleprompter(teleprompter, distance);
    });
}

