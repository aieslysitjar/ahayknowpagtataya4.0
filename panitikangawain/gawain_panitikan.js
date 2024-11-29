// Aralin 1 - Gawain sa Panitikan

function check1() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var q6 = document.quiz.question6.value;
  var q7 = document.quiz.question7.value;
  var q8 = document.quiz.question8.value;

  var result = document.getElementById('result');

  if (q1 == "1A") { c++ }
  if (q2 == "2C") { c++ }
  if (q3 == "3A") { c++ }
  if (q4 == "4A") { c++ }
  if (q5 == "5C") { c++ }
  if (q6 == "6D") { c++ }
  if (q7 == "7B") { c++ }
  if (q8 == "8B") { c++ }

  if (c < 4) {
    pass.style.display = "none";
    fail.style.display = "block";
    result.textContent = `${c}`
    message.textContent = `Pindutin ang Pantulong na Pagtataya sa ibaba.`
  } else {
    fail.style.display = "none";
    pass.style.display = "block"
    result.textContent = `${c}`
    message.textContent = `Magaling! Ikaw ay pumasa!`
  }

}

// Aralin 1 - Pantulong na Pagtataya sa Panitikan

function check1A() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var q6 = document.quiz.question6.value;
  var q7 = document.quiz.question7.value;
  var q8 = document.quiz.question8.value;

  var result = document.getElementById('result');

  if (q1 == "1A") { c++ }
  if (q2 == "2A") { c++ }
  if (q3 == "3A") { c++ }
  if (q4 == "4B") { c++ }
  if (q5 == "5D") { c++ }
  if (q6 == "6C") { c++ }
  if (q7 == "7C") { c++ }
  if (q8 == "8B") { c++ }

  if (c < 4) {
    pass.style.display = "none";
    fail.style.display = "block";
    result.textContent = `${c}`
    message.textContent = `Ulitin ang pagsagot.`
  } else {
    fail.style.display = "none";
    pass.style.display = "block"
    result.textContent = `${c}`
    message.textContent = `Magaling! Ikaw ay pumasa!`
  }

}

// Aralin 2 - Gawain sa Panitikan

function check2() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;

  var result = document.getElementById('result');

  if (q1 == "1C") { c++ }
  if (q2 == "2A") { c++ }
  if (q3 == "3B") { c++ }
  if (q4 == "4B") { c++ }
  if (q5 == "5A") { c++ }

  if (c < 4) {
    pass.style.display = "none";
    fail.style.display = "block";
    result.textContent = `${c}`
    message.textContent = `Pindutin ang Pantulong na Pagtataya sa ibaba.`
  } else {
    fail.style.display = "none";
    pass.style.display = "block"
    result.textContent = `${c}`
    message.textContent = `Magaling! Ikaw ay pumasa!`
  }

}

// Aralin 2 - Pantulong na Pagtataya sa Panitikan

function check2A() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;

  var result = document.getElementById('result');

  if (q1 == "1B") { c++ }
  if (q2 == "2C") { c++ }
  if (q3 == "3B") { c++ }
  if (q4 == "4A") { c++ }
  if (q5 == "5A") { c++ }

  if (c < 4) {
    pass.style.display = "none";
    fail.style.display = "block";
    result.textContent = `${c}`
    message.textContent = `Ulitin ang pagsagot.`
  } else {
    fail.style.display = "none";
    pass.style.display = "block"
    result.textContent = `${c}`
    message.textContent = `Magaling! Ikaw ay pumasa!`
  }

}

// Aralin 3 - Gawain sa Panitikan

function check3() {
  var c = 0;
  var q1  = document.quiz.question1.value;
  var q2  = document.quiz.question2.value;
  var q3  = document.quiz.question3.value;
  var q4  = document.quiz.question4.value;
  var q5  = document.quiz.question5.value;
  var q6  = document.quiz.question6.value;
  var q7  = document.quiz.question7.value;
  var q8  = document.quiz.question8.value;
  var q9  = document.quiz.question9.value;
  var q10 = document.quiz.question10.value;

  var result = document.getElementById('result');

  if (q1 == "Mali") { c++ }
  if (q2 == "Mali") { c++ }
  if (q3 == "Mali") { c++ }
  if (q4 == "Tama") { c++ }
  if (q5 == "Tama") { c++ }
  if (q6 == "Tama") { c++ }
  if (q7 == "Mali") { c++ }
  if (q8 == "Tama") { c++ }
  if (q9 == "Mali") { c++ }
  if (q10 == "Tama") { c++ }

  if (c == 0) {
    pass.style.display = "none";
    fail.style.display = "block";
    result.textContent = `${c}`
    message.textContent = `Bumalik sa gawain at ito ay sagutan.`
  } else {
    fail.style.display = "none";
    pass.style.display = "block"
    result.textContent = `${c}`
    message.textContent = `Magaling!`
  }

}

// Aralin 4 - Gawain sa Panitikan

function check4() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;

  var result = document.getElementById('result');

  if (q1 == "1B") { c++ }
  if (q2 == "2A") { c++ }
  if (q3 == "3D") { c++ }
  if (q4 == "4B") { c++ }
  if (q5 == "5C") { c++ }

  if (c < 4) {
    pass.style.display = "none";
    fail.style.display = "block";
    result.textContent = `${c}`
    message.textContent = `Pindutin ang Pantulong na Pagtataya sa ibaba.`
  } else {
    fail.style.display = "none";
    pass.style.display = "block"
    result.textContent = `${c}`
    message.textContent = `Magaling! Ikaw ay pumasa!`
  }

}

// Aralin 4 - Pantulong na Pagtataya sa Panitikan

function check4A() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;

  var result = document.getElementById('result');

  if (q1 == "1A") { c++ }
  if (q2 == "2B") { c++ }
  if (q3 == "3B") { c++ }
  if (q4 == "4D") { c++ }
  if (q5 == "5C") { c++ }

  if (c < 4) {
    pass.style.display = "none";
    fail.style.display = "block";
    result.textContent = `${c}`
    message.textContent = `Ulitin ang pagsagot.`
  } else {
    fail.style.display = "none";
    pass.style.display = "block"
    result.textContent = `${c}`
    message.textContent = `Magaling! Ikaw ay pumasa!`
  }

}

// Aralin 5 - Gawain sa Panitikan

function check5() {
  var c = 0;
  var q1  = document.quiz.question1.value;
  var q2  = document.quiz.question2.value;
  var q3  = document.quiz.question3.value;
  var q4  = document.quiz.question4.value;
  var q5  = document.quiz.question5.value;
  var q6  = document.quiz.question6.value;
  var q7  = document.quiz.question7.value;
  var q8  = document.quiz.question8.value;

  var result = document.getElementById('result');

  if (q1 == "mataas") { c++ }
  if (q2 == "mabilisan") { c++ }
  if (q3 == "pagkawala") { c++ }
  if (q4 == "nabigo") { c++ }
  if (q5 == "kinasusuklaman") { c++ }
  if (q6 == "lakas") { c++ }
  if (q7 == "inisip") { c++ }
  if (q8 == "tumutol") { c++ }

  if (q1 == "MATAAS") { c++ }
  if (q2 == "MABILISAN") { c++ }
  if (q3 == "PAGKAWALA") { c++ }
  if (q4 == "NABIGO") { c++ }
  if (q5 == "KINASUSUKLAMAN") { c++ }
  if (q6 == "LAKAS") { c++ }
  if (q7 == "INISIP") { c++ }
  if (q8 == "TUMUTOL") { c++ }

  if (c == 0) {
    pass.style.display = "none";
    fail.style.display = "block";
    result.textContent = `${c}`
    message.textContent = `Bumalik sa gawain at ito ay sagutan.`
  } else {
    fail.style.display = "none";
    pass.style.display = "block"
    result.textContent = `${c}`
    message.textContent = `Magaling!`
  }

}