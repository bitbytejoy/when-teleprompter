import { runCreateElement } from "./runCreateElement";

export function runCreateTeleprompterForm(
    text: string,
    onSubmit: () => void,
    onTextChange: (text: string) => void): Element {
    const textareaStyle = "all: unset; display: block; width: 100%; background: white; border: 1px solid lightgray; box-sizing: border-box; padding: 0.5rem 0.75rem;";

    const teleprompterForm = runCreateElement(`
		<div style="margin: auto; max-width: calc(100% - 2rem); width: 600px; padding-top: 5rem;">
			<div>
				<h1>Enter your prompt</h1>
			</div>

			<form>
				<div style="display: flex; flex-direction: column; gap: 1rem;">
					<div>
						<textarea rows="10" style="${textareaStyle}">${text}</textarea>
					</div>

					<div>
						<button>Start prompter</button>
					</div>
				</div>
			</form>
		</div>
	`);

    const form = teleprompterForm.querySelector("form");
    if (form instanceof HTMLFormElement) {
        form.onsubmit = (e) => {
            e.preventDefault();
            onSubmit();
        };
    }

    const textarea = teleprompterForm.querySelector("textarea");
    if (textarea instanceof HTMLTextAreaElement) {
        textarea.oninput = () => onTextChange(textarea.value);
    }

    return teleprompterForm;
}

