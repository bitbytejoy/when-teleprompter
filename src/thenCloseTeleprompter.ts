import { Data } from "./Data";

export function thenCloseTeleprompter(data: Data) {
    data.teleprompters.forEach(teleprompter => teleprompter.remove());
    data.teleprompters.splice(0);

    if (data.teleprompterRequestAnimationFrameId) {
        window.cancelAnimationFrame(data.teleprompterRequestAnimationFrameId);
        data.teleprompterRequestAnimationFrameId = undefined;
    }
}

