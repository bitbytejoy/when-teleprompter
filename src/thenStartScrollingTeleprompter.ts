import { Data } from "./Data";
import { runScrollEachAnimationFrame } from './runScrollEachAnimationFrame';
import { whenTeleprompterRequestAnimationFrameIdUpdates } from "./whenTeleprompterRequestAnimationFrameIdUpdates";

export function thenStartScrollingTeleprompter(data: Data) {
	const speed = 60 / 3; // px / second

	if (data.teleprompterRequestAnimationFrameId === undefined) {
		runScrollEachAnimationFrame(
			data.teleprompters,
			speed,
			(requestAnimationFrameId: number) => {
				whenTeleprompterRequestAnimationFrameIdUpdates(requestAnimationFrameId, data);
			}
		);
	}
}

