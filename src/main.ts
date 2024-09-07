import { Data } from './Data';
import './style.css'
import { whenAppStarts } from './whenAppStarts';

function main() {
	const data: Data = {
		teleprompt: '',
		teleprompterForms: [],
		teleprompters: [],
		teleprompterRequestAnimationFrameId: undefined,
	};

	if (location.hostname === "localhost") {
		Object.assign(window, {data});
	}

	whenAppStarts(data);
}

main();
