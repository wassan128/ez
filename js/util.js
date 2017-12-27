"use strict";

/* util functions */

// WIP
const error = (kind) => {
	const ERR = {
			"INVALID_CONFIG": "【エラー】以下の項目をご確認ください。\n1. config.jsはindex.htmlと同じ階層に設置していますか?\n2. config.jsの記述は正しいですか?(カッコ([])の閉じ忘れ、カンマ(,)やコロン(:)のつけ忘れなど)\n3. 以下の項目は定義されていますか?\ntitle, questions, effect, padding",
		"PADDING_UNDEFINED": "【エラー】空白の横幅余白が定義されていません。config.sample.jsを参考にconfig.js内に以下を記述してください。\n\n// Nは自然数に置き換えてください\nconst padding = N;",
		"TITLE_UNDEFINED": "【エラー】タイトルが定義されていません。config.sample.jsを参考にconfig.js内に以下を記述してください。\n\nconst title = \"タイトル\";",
		"QUESTIONS_UNDEFINED": "【エラー】一問一答が定義されていません。config.sample.jsを参考にconfig.js内に以下を記述してください。\n\nconst questios = {\"章タイトル\": [\"問題文1\", \"問題文2\"]};",
		"UNDEFINED_ERROR": "【エラー】不明なエラー"
	};
	if (ERR[kind]) {
		alert(ERR[kind]);
	} else {
		alert(ERR["UNDEFINED_ERROR"]);
	}
	return;
};

const len = (s) => {
	return encodeURIComponent(s).replace(/(?:%..){3}/g, "xx").length;
};

const scroll_top = () => {
	let y = document.body.scrollTop || document.documentElement.scrollTop;
	if (y) {
		scrollTo(0, y /= 1.08);
		setTimeout(scroll_top, 1);
	}
};
