import { Data } from "./Data";
import { thenUpdateAllTelepromptTextareas } from "./thenUpdateAllTelepromptTextareas";

export function whenTelepromptFormTextareaChanges(text: string, data: Data) {
    thenUpdateAllTelepromptTextareas(text, data);
}

