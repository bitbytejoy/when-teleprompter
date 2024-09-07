import { BLACK } from "./BLACK";
import { runCreateElement } from "./runCreateElement";

export function runCreateTeleprompter(
    teleprompt: string,
    onCloseButtonClicked: () => void,
    onPlayButtonClicked: () => void): Element {
    const barHeight = "3rem";
    const teleprompter = runCreateElement(`
		<div style="position: fixed; top: 0; right: 0; bottom: 0; left: 0; background: ${BLACK}; color: white;">
			<div style="position: absolute; top: 0; right: 0; left: 0; z-index: 1; height: ${barHeight}; background: ${BLACK}; text-align: right;">
				<button data-key="close-button" style="all: unset; padding: 0 1rem; cursor: pointer; font-size: 2rem; line-height: ${barHeight};">&times;</button>
			</div>

			<div data-key="scroll-container" style="margin: auto; width: 1200px; max-width: calc(100% - 4rem); margin-top: ${barHeight}; height: calc(100vh - 2 * ${barHeight}); overflow-y: scroll; font-size: 60px;">
				<p>${teleprompt}</p>
			</div>

			<div style="position: absolute; bottom: 0; right: 0; left: 0; z-index: 1; height: ${barHeight}; background: ${BLACK}; text-align: right;">
				<button data-key="play-button" style="all: unset; padding: 0 1rem; cursor: pointer; font-size: 1.5rem; line-height: ${barHeight};">Play</button>
			</div>
		</div>
	`);

    const closeButton = teleprompter.querySelector('[data-key="close-button"]');
    if (closeButton instanceof HTMLButtonElement) {
        closeButton.onclick = () => onCloseButtonClicked();
    }

    const playButton = teleprompter.querySelector('[data-key="play-button"]');
    if (playButton instanceof HTMLButtonElement) {
        playButton.onclick = () => onPlayButtonClicked();
    }

    return teleprompter;
}

