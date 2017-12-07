$(document).ready(function() {
	const judge = function(idx) {
		let tag = $("input")[idx];
		let result = "wrong";
		if (tag.value.length > 0) {
			ans = tag.name.split(",");
			for (let i = 0; i < ans.length; i++) {
				if (tag.value === ans[i]) {
					result = "correct";
					break;
				} 
			}
		} else {
			result = "nothing";
		}
		return result;
	};

	const clear = function() {
		for (let i = 0; i < $("input").length; i++) {
			let tag = $("input")[i];
			tag.value = "";
			$(tag).css("box-shadow", effect[judge(i, "")]);
		}
	};

	const revail = function() {
		for (let i = 0; i < $("input").length; i++) {
			let tag = $("input")[i];
			tag.value = tag.name;
			$(tag).css("box-shadow", effect["correct"]);
		}
	};

	// initialize
	(function () {
		try {
			if (title) {
				$("h1").text(title);
			}
		} catch (e) {
			error("NO_CONFIG", e);
		}

		let $quiz = $("main");
		$.each(questions, (section_title, e) => {
			let $section = $("<section>");
			$section.append($("<h2>", {"text": section_title}));

			for (let k = 0; k < questions[section_title].length; k++) {
				let q = questions[section_title][k]
					.replace(/[\<\>\'\"\/\\]/g, "")
					.replace(/\#{([^{}]+)}/g, "<input name='$1'/>")
					.replace(/\%{([^{}]+)}/g, "<br/><img class='qimgs' src='image/$1'/>");
				let $article = $("<article>");
				$article.append(q);
				$section.append($article);
			}
			$quiz.append($section);
		});
		$("<section>").append();

		for (let i = 0; i < $("input").length; i++) {
			let tag = $("input")[i];
			$(tag).css("box-shadow", effect[judge(i, tag.value)])
				.attr("size", Math.max.apply(null, tag.name.split(",").map((s)=>len(s) + 2)));
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
		this.value = this.name;
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
