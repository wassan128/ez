/* util functions */

function error(kind, msg) {
	const ERR = {
		"NO_CONFIG": "【エラー】以下の項目をご確認ください。\n1. config.jsはindex.htmlと同じ階層に設置していますか?\n2. config.jsの記述は正しいですか?(カッコ([])の閉じ忘れ、カンマ(,)やコロン(:)のつけ忘れなど)\n\n心当たりがない場合は未知のエラーの可能性があります。管理者か詳しい方に以下のメッセージを見せてください:\n\n" + msg,
		"INVALID_ERROR": "【エラー】不明なエラー"
	};
	if (ERR[kind]) {
		alert(ERR[kind]);
	} else {
		alert(ERR["INVALID_ERROR"]);
	}
}

function len(s) {
	return encodeURIComponent(s).replace(/(?:%..){3}/g, "xx").length;
}
