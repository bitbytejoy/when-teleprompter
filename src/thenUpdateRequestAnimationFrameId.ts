import { Data } from "./Data";

export function thenUpdateRequestAnimationFrameId(requestAnimationFrameId: number, data: Data) {
    data.teleprompterRequestAnimationFrameId = requestAnimationFrameId;
}

