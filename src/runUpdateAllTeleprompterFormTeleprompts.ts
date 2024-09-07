import { runUpdateTelepromptFormTeleprompt } from "./runUpdateTelepromptFormTeleprompt";

export function runUpdateAllTeleprompterFormTeleprompts(teleprompterForms: Element[], teleprompt: string) {
    teleprompterForms.forEach(teleprompterForm => {
        runUpdateTelepromptFormTeleprompt(teleprompterForm, teleprompt);
    });
}

