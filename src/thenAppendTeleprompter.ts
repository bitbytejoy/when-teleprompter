import { Data } from "./Data";
import { runAppendElementToBody } from "./runAppendElementToBody";
import { runCreateTeleprompter } from "./runCreateTeleprompter";
import { whenTeleprompterCloseButtonIsClicked } from "./whenTeleprompterCloseButtonIsClicked";
import { whenTeleprompterPlayButtonIsClicked } from "./whenTeleprompterPlayButtonIsClicked";

export function thenAppendTeleprompter(data: Data) {
    const teleprompter = runCreateTeleprompter(
        data.teleprompt,
        () => whenTeleprompterCloseButtonIsClicked(data),
        () => whenTeleprompterPlayButtonIsClicked(data)
    );
    runAppendElementToBody(teleprompter);

    data.teleprompters.push(teleprompter);
}

