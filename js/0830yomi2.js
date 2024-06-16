$(document).ready(function () {

	var colorArray = ["#019875", "#1E8BC3", "#74B72E"];
	var cardState;
	var currentQuestion = 0;
	var qbank = [["競う", "きそう"],
	["競い合い", "きそいあい"],
	["代替", "だいたい"],
	["微々たる", "びびたる"],
	["自立心", "じりつしん"],
	["好奇心", "こうきしん"],
	["赴く", "おもむく"],
	["人物画", "じんぶつが"],
	["自画像", "じがぞう"],
	["民家", "みんか"],
	["損傷", "そんしょう"],
	["筆遣い", "ふでづかい"],
	["鑑定", "かんてい"],
	["貴重な", "きちょうな"],
	["晩年", "ばんねん"],
	["早年", "そうねん"],
	["漁業", "ぎょぎょう"],
	["漁師", "りょうし"],
	["敏感に", "びんかんに"],
	["鈍感に", "どんかんに"],
	["好調な", "こうちょう"],
	["低迷", "ていめい"],
	["打破", "だは"],
	["自給自足", "じきゅうじそく"],
	["開拓する", "かいたく"]];


	beginActivity();


	function beginActivity() {
		cardState = 0;
		var color1 = colorArray[Math.floor(Math.random() * colorArray.length)];
		$("#cardArea").empty();
		$("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
		$("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>');
		$("#card1").css("background-color", color1);
		$("#card2").css("background-color", "#34495E");
		$("#card2").css("top", "200px");
		$("#cardArea").on("click", function () {
			if (cardState != 1) {
				cardState = 1;
				//togglePosition();
				$("#card1").animate({ top: "-=200" }, 150, function () { cardState = 0; togglePosition(); });
				$("#card2").animate({ top: "-=200" }, 150, function () { togglePosition2(); });
			}//if
		});//click function
		currentQuestion++;
		$("#buttonArea").empty();
		$("#buttonArea").append('<div id="nextButton">次へ</div>');
		$("#buttonArea").append('<div id="otherButton"> <a href=\"./830class_yomikata_lesson.html\" style="text-decoration:none;">他の練習を選ぶ</a></div>');
		$("#nextButton").on("click", function () {
			if (currentQuestion < qbank.length) { beginActivity(); }
			else { displayFinalMessage(); }
		});//click function
	}//beginactivity

	function togglePosition() {
		if ($("#card1").position().top == -200) { $("#card1").css("top", "200px"); };
	}//toggle

	function togglePosition2() {
		if ($("#card2").position().top == -200) { $("#card2").css("top", "200px"); };
	}//toggle2

	function displayFinalMessage() {
		$("#buttonArea").empty();
		$("#cardArea").empty();
		$("#cardArea").append('<div id="finalMessage"><p>終了！<br>よく頑張ったね！</p></div>');
		$("#buttonArea").append('<div id="otherButton"> <a href=\"./0830yomi2.html\" style="text-decoration:none;">最初からやり直す</a></div>');
		$("#buttonArea").append('<div id="otherButton"> <a href=\"./830class_yomikata_lesson.html\" style="text-decoration:none;">他の練習を選ぶ</a></div>');
	}//final message

});
