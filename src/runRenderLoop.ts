import { runCalcDeltaTime } from "./runCalcDeltaTime";

export function runRenderLoop(
    requestAnimationFrameIdUpdated: (id: number) => void,
    render: (deltaTime: number) => void) {
    let lastFrameTime = 1000 / 60;

    const frame = (time: DOMHighResTimeStamp) => {
        const deltaTime = runCalcDeltaTime(lastFrameTime, time);

        render(deltaTime);

        lastFrameTime = time;

        const id = requestAnimationFrame(frame);
        requestAnimationFrameIdUpdated(id);
    };

    requestAnimationFrame(frame);
}

