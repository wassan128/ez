$(document).ready(function() {
	const judge = function(idx, user_input) {
		if (user_input.length > 0) {
			if (ans[idx] && ans[idx] == user_input) {
				return "correct";
			} else {
				return "wrong";
			}
		} else {
			return "nothing";
		}
	};

	const clear = function() {
		for (let i = 0; i < $("input").length; i++) {
			let tag = $("input")[i];
			tag.value = "";
		}
	};

	const revail = function() {
		for (let i = 0; i < $("input").length; i++) {
			let tag = $("input")[i];
			if (ans[i]) {
				tag.value = ans[i];
			}
		}
	};

	// initialize
	(function () {
		$("h1").text(title);
		for (let i = 0; i < $("input").length; i++) {
			let tag = $("input")[i];
			$(tag).css("box-shadow", effect[judge(i, tag.value)]);
		}
	})();

	// event handler
	$("input").on("focus unfocus", function() {
		$(this).css("box-shadow", "0 0 5px 0px #217cfc")
	}).blur(function() {
		const idx = $("input").index(this);
		const user_ans = $("input")[idx].value;		
		$(this).css("box-shadow", effect[judge(idx, user_ans)]);
	}).on("dblclick", function() {
		const idx = $("input").index(this);
		this.value = ans[idx];
	});

	$("#btn-up").on("click", function() {
		$("html,body").animate({scrollTop: 0}, "slow");
	});

	$("#btn-clear").on("click", function() {
		clear();
	});

	$("#btn-revail").on("click", function() {
		revail();
	});
});
