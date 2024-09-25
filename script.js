// تحميل ملفات الصوت
const correctSound = new Audio('correct_answer.wav'); // ملف صوت الإجابة الصحيحة
const wrongSound = new Audio('wrong_answer.wav');     // ملف صوت الإجابة الخاطئة

const questions = [
    {
        question: "كيف تضبط إعدادات التاريخ والوقت؟",
        answers: [
            "من لوحة التحكم",
            "من مدير المهام",
            "من إدارة الأجهزة",
            "من إعدادات اللغة"
        ],
        correctAnswer: 1
    },
    {
        question: "كيف تضبط مستوى الصوت؟",
        answers: [
            "من إعدادات النظام",
            "من لوحة المفاتيح",
            "من إعدادات الشبكة",
            "من إعدادات الشاشة"
        ],
        correctAnswer: 1
    },
    {
        question: "أين تقوم بضبط إعدادات الشاشة؟",
        answers: [
            "من إعدادات النظام",
            "من مدير الملفات",
            "من إعدادات العرض",
            "من إعدادات الطباعة"
        ],
        correctAnswer: 3
    },
    {
        question: "كيف تقوم بإلغاء تثبيت التطبيقات؟",
        answers: [
            "من إعدادات التطبيقات",
            "من مدير المهام",
            "من لوحة المفاتيح",
            "من إعدادات العرض"
        ],
        correctAnswer: 1
    },
    {
        question: "كيف تضبط إعدادات الفأرة؟",
        answers: [
            "من إعدادات النظام",
            "من إعدادات العرض",
            "من مدير المهام",
            "من لوحة التحكم"
        ],
        correctAnswer: 4
    },
    {
        question: "أين تضبط إعدادات اللغة؟",
        answers: [
            "من إعدادات الشبكة",
            "من إعدادات اللغة",
            "من مدير المهام",
            "من إعدادات التطبيقات"
        ],
        correctAnswer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    document.getElementById('result').innerText = '';
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('btn1').innerText = currentQuestion.answers[0];
    document.getElementById('btn2').innerText = currentQuestion.answers[1];
    document.getElementById('btn3').innerText = currentQuestion.answers[2];
    document.getElementById('btn4').innerText = currentQuestion.answers[3];
}

function checkAnswer(buttonIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (buttonIndex === currentQuestion.correctAnswer) {
        document.getElementById('result').innerText = 'إجابة صحيحة!';
        correctSound.play();  // تشغيل صوت الإجابة الصحيحة
        score++;
    } else {
        document.getElementById('result').innerText = 'إجابة خاطئة!';
        wrongSound.play();  // تشغيل صوت الإجابة الخاطئة
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('next-btn').style.display = 'none';
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    document.getElementById('question-container').innerHTML = `<p>لقد أكملت اللعبة! مجموع نقاطك: ${score} من ${questions.length}.</p>`;
    document.getElementById('next-btn').style.display = 'none';
}

// تحميل السؤال الأول عند فتح الصفحة
loadQuestion();
