export function runUpdateTelepromptFormTeleprompt(teleprompterForm: Element, teleprompt: string) {
    const textarea = teleprompterForm.querySelector("textarea");
    if (textarea instanceof HTMLTextAreaElement) {
        textarea.value = teleprompt;
    }
}

