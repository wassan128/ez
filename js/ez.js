"use strict";

const KEY = 0;
const VAL = 1;
const DELIM = ";";

document.addEventListener("DOMContentLoaded", () => {
	const judge = (tag) => {
		if (tag.value.length > 0) {
			const anss = tag.name.split(DELIM);
			for (const ans of anss) {
				if (tag.value === ans) {
					return "correct";
				} 
			}
		} else {
			return "nothing";
		}
		return "wrong";
	};

	const clear = () => {
		const boxes = document.getElementsByClassName("q-boxes");
		for (const box of boxes) {
			box.value = "";
			box.style["box-shadow"] = effect[judge(box)];
		}
	};

	const revail = () => {
		const boxes = document.getElementsByClassName("q-boxes");
		for (const box of boxes) {
			box.value = box.name;
			box.style["box-shadow"] = effect["correct"];
		}
	};

	//TODO: 個別のエラー対応
	const validate_config = () => {
		let res = typeof(title) !== "undefined" &&
			typeof(questions) !== "undefined" &&
			typeof(effect) !== "undefined" &&
			typeof(effect["correct"]) !== "undefined" &&
			typeof(effect["wrong"]) !== "undefined" &&
			typeof(effect["nothing"]) !== "undefined" &&
			typeof(padding) !== "undefined";
		return res;
	};

	// event handler
	const set_event_handler = () => {
		const boxes = document.getElementsByClassName("q-boxes");
		for (const box of boxes) {
			box.addEventListener("focus", (e) => {
				const tag = e.currentTarget;
				tag.style["box-shadow"] = "0 0 10px 0px #217cfc";
			}, false);

			box.addEventListener("blur", (e) => {
				const tag = e.currentTarget;
				const user_ans = tag.value;
				tag.style["box-shadow"] = effect[judge(tag)];
			}, false);

			box.addEventListener("dblclick", (e) => {
				const tag = e.currentTarget;
				tag.value = tag.name;
			}, false);
		};

		const btn_up = document.getElementById("btn-up");
		btn_up.addEventListener("click", () => {
			scroll_top();
		});

		const btn_clear = document.getElementById("btn-clear");
		btn_clear.addEventListener("click", () => {
			clear();
		});

		const btn_revail = document.getElementById("btn-revail");
		btn_revail.addEventListener("click", () => {
			revail();
		});
	};

	// initialize
	(() => {
		if (validate_config() === false) {
			error("INVALID_CONFIG");
			return;
		}

		if (title) {
			document.querySelector("h1").innerText = title;
		}

		const quiz = document.querySelector("main");
		for (const key in questions) {
			const section = document.createElement("section");
			const h2 = document.createElement("h2");
			h2.innerText = key;
			section.appendChild(h2);

			for (const q_raw of questions[key]) {
				const q = (q_raw === "") ? "<br/>" : 
					q_raw.replace(/[\<\>\/\\]/g, "")
						.replace(/\#{([^{}]+)}/g, (_, s) => {
							let tag;
							if (s.match(/\[([^{}\[\]]+)\]/g)) {
								const opts = RegExp.$1;
								tag = `<select class='q-boxes' name='${opts.split(DELIM)[0]}'>`;
								tag += "<option disabled selected value>-- 選択問題 --</option>";
								shuf(opts.split(DELIM)).forEach((e) => {
									tag += `<option>${e}</option>`;
								});
								tag += "</select>"
							} else {
								tag = `<input class='q-boxes' name='${s.replace(/\"/g, "&quot;")}'/>`;
							}
							return tag;
						})
						.replace(/\%{([^{}]+)}/g, (_, s) => {
							return `<br/><img class="qimgs" src="image/${s.replace(/\"/g, "")}"/>`;
						});
				const p = document.createElement("p");
				p.innerHTML = q;
				const article = document.createElement("article");
				article.appendChild(p);
				section.appendChild(article);
			}
			quiz.appendChild(section);
		}

		const inputs = document.querySelectorAll("input");
		for (const input of inputs.entries()) {
			input[VAL].style["box-shadow"] = effect[judge(input[VAL])];
			input[VAL].size = Math.max(...input[VAL].name.split(DELIM).map(s => len(s) + padding));
		}

		set_event_handler();
	})();

});
