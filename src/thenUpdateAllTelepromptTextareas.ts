import { Data } from "./Data";
import { runUpdateAllTeleprompterFormTeleprompts } from "./runUpdateAllTeleprompterFormTeleprompts";

export function thenUpdateAllTelepromptTextareas(telepropmt: string, data: Data) {
    data.teleprompt = telepropmt;

    runUpdateAllTeleprompterFormTeleprompts(data.teleprompterForms, data.teleprompt);
}

