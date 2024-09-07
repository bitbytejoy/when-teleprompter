import { Data } from "./Data";
import { runAppendElementToBody } from "./runAppendElementToBody";
import { runCreateTeleprompterForm } from "./runCreateTeleprompterForm";
import { whenTeleprompterFormSubmits } from "./whenTeleprompterFormSubmits";
import { whenTelepromptFormTextareaChanges } from "./whenTelepromptTextareaChanges";

export function thenAppendTeleprompterForm(data: Data) {
    const teleprompterForm = runCreateTeleprompterForm(
        data.teleprompt,
        () => whenTeleprompterFormSubmits(data),
        (text: string) => whenTelepromptFormTextareaChanges(text, data)
    );

    runAppendElementToBody(teleprompterForm);

    data.teleprompterForms.push(teleprompterForm);
}

