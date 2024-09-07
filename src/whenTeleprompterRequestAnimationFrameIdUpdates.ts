import { Data } from "./Data";
import { thenUpdateRequestAnimationFrameId } from "./thenUpdateRequestAnimationFrameId";

export function whenTeleprompterRequestAnimationFrameIdUpdates(requestAnimationFrameId: number, data: Data) {
    thenUpdateRequestAnimationFrameId(requestAnimationFrameId, data);
}

