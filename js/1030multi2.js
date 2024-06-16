const quizData = [
    {
      question: "(1). 「載せる」の読み方",
      options: ["のせる", "かせる", "だせる", "にせる"],
      answer: "のせる"
    },
    {
      question: "(2). 「原稿」の読み方",
      options: ["げんこう", "はらたか", "はらだか", "げんたか"],
      answer: "げんこう"
    },
    {
      question: "(3).「構成」の読み方",
      options: ["こうぜい", "こうなり", "こうせい", "こせい　"],
      answer: "こうせい"
    },
    {
      question: "(4).「導入」の読み方",
      options: ["どうにゅう", "とうにゅう", "どうにん　", "どういれ　"],
      answer: "どうにゅう"
    },
    {
      question: "(5).「原稿の導入の部分」の「導入」の対義語は？",
      options: ["出入　　　", "最初　　　", "まとめ　　", "入れ替え　"],
      answer: "まとめ　　"
    },
    {
      question: "(6).「簡潔に」の読み方",
      options: ["かんすいに", "かんかつに", "かんけつに", "かんけすに"],
      answer: "かんけつに"
    },
    {
      question: "(7).「彼には前にどこかで会った＿＿＿」の「＿＿＿」に入る言葉？",
      options: ["気が付く　", "気がする　", "気になる　", "気が利く　"],
      answer: "気がする　"
    },
    {
      question: "(8).「斜め」の読み方",
      options: ["けじめ", "ななめ", "ながめ", "せばめ"],
      answer: "ななめ"
    },
    {
      question: "(9).「農薬」の読み方",
      options: ["のっやく", "のうらく", "のうやく", "のやく　"],
      answer: "のうやく"
    },
    {
      question: "(10).「節約」の読み方",
      options: ["せつやく", "せすやく", "ぜすやく", "せっやく"],
      answer: "せつやく"
    },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  // const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    if (score < (quizData.length / 2)) {
      multiChoiceArea.innerHTML = `
      <h1>　Test Completed!</h1>
      <p style="font-size:30px; color:red;">　スコア: ${score}/${quizData.length}</p>
      <p style="font-size:20px; color:red; font-weight:bold;">　　残念！もう一度勉強しましょう！</p>
    `;
    } else if(score >= ((quizData.length / 10) * 8)) {
      multiChoiceArea.innerHTML = `
      <h1>　Test Completed!</h1>
      <p style="font-size:30px; color:green;">　スコア: ${score}/${quizData.length}</p>
      <p style="font-size:20px; color:green; font-weight:bold;">　　おめでとう！よくできました。</p>
    `;
    } else {
      multiChoiceArea.innerHTML = `
      <h1>　Test Completed!</h1>
      <p style="font-size:30px;">　スコア: ${score}/${quizData.length}</p>
      <p style="font-size:20px; font-weight:bold;">　　満点を目指しましょう！</p>
    `;
    }
    
  }
  
  showQuestion();