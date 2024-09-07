export function runCalcDeltaTime(lastTime: DOMHighResTimeStamp, currentTime: DOMHighResTimeStamp): DOMHighResTimeStamp {
    return (currentTime - lastTime) / 1000;
}

