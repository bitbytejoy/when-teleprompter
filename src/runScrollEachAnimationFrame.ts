import { runCalcDeltaDistance } from "./runCalcDeltaDistance";
import { runRenderLoop } from "./runRenderLoop";
import { runScrollAllTeleprompters } from "./runScrollAllTeleprompters";

export function runScrollEachAnimationFrame(teleprompters: Element[], speed: number, onRequestAnimationFrameIdUpdated: (id: number) => void) {
	let deltaDistance = 0;
	runRenderLoop(
		(requestAnimationFrameId: number) => onRequestAnimationFrameIdUpdated(requestAnimationFrameId),
			(deltaTime: number) => {
			deltaDistance += runCalcDeltaDistance(speed, deltaTime);
			const distance = Math.floor(deltaDistance);
			deltaDistance -= distance;

			runScrollAllTeleprompters(teleprompters, deltaDistance);
		}
	);
}

