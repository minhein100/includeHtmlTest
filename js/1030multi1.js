const quizData = [
  {
    question: "(1). 「名簿」の読み方",
    options: ["なふた　", "めいぼ　", "なぼう　", "めいぼう"],
    answer: "めいぼ　"
  },
  {
    question: "(2). 「受講」の読み方",
    options: ["じゅうこう", "じゅっこう", "じゅこう　", "じゅご　　"],
    answer: "じゅこう　"
  },
  {
    question: "(3).「雑草」の読み方",
    options: ["ざつぞう", "ざつそう", "ざっそう", "ざっぞう"],
    answer: "ざっそう"
  },
  {
    question: "(4).「整える」の読み方",
    options: ["ととのえる", "いいかえる", "さしかえる", "そなえる　"],
    answer: "ととのえる"
  },
  {
    question: "(5).「苗」の読み方",
    options: ["はえ　", "さえ　", "なえ　", "まえ　"],
    answer: "なえ　"
  },
  {
    question: "(6).「掲示板」の読み方",
    options: ["けいじいた", "けいぢいた", "けいぢばん", "けいじばん"],
    answer: "けいじばん"
  },
  {
    question: "(7).「仏壇」の読み方",
    options: ["ぶつたん", "ぶっだん", "ぶったん", "ぶつだん"],
    answer: "ぶつだん"
  },
  {
    question: "(8).「譲る」の読み方",
    options: ["ゆずる", "うずる", "けずる", "ちずる"],
    answer: "ゆずる"
  },
  {
    question: "(9).「花壇」の読み方",
    options: ["はなだん", "かだん　", "はなでん", "かでん　"],
    answer: "かだん　"
  },
  {
    question: "(10).「掲げる」の読み方",
    options: ["あげる　", "なげる　", "かかげる", "こげる　"],
    answer: "かかげる"
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