function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const lessons = {
  'data-types': {
    title: 'What is Data?',
    content: `
      <h3>Understanding Data</h3>
      <p>Data is information that can be collected, analyzed, and used to make decisions.</p>
      <h4>Types of Data</h4>
      <ul>
        <li><strong>Categorical:</strong> Colors, cities, labels.</li>
        <li><strong>Numerical:</strong> Age, salary, temperature.</li>
        <li><strong>Qualitative:</strong> Descriptions and opinions.</li>
        <li><strong>Quantitative:</strong> Measurable values.</li>
      </ul>
    `
  },
  'basic-stats': {
    title: 'Basic Statistics',
    content: `
      <h3>Basic Statistics</h3>
      <p><strong>Mean</strong> is the average, <strong>median</strong> is the middle value, and <strong>mode</strong> is the most frequent value.</p>
      <p>These are the first tools used to summarize data.</p>
    `
  },
  'tools': {
    title: 'Tools Introduction',
    content: `
      <h3>Popular Data Analytics Tools</h3>
      <ul>
        <li>Excel / Google Sheets</li>
        <li>SQL</li>
        <li>Python</li>
        <li>R</li>
        <li>Power BI / Tableau</li>
      </ul>
    `
  },
  'data-structures': {
    title: 'Data Structures',
    content: `
      <h3>Data Structures</h3>
      <p>Data is commonly stored in tables with rows and columns.</p>
      <p>Tables can be found in spreadsheets and databases.</p>
    `
  },
  'data-cleaning': {
    title: 'Data Cleaning',
    content: `
      <h3>Data Cleaning</h3>
      <p>Cleaning means fixing missing values, duplicates, formatting issues, and errors before analysis.</p>
    `
  },
  'visualization': {
    title: 'Data Visualization',
    content: `
      <h3>Data Visualization</h3>
      <p>Charts and graphs help people understand data faster than raw numbers.</p>
      <ul>
        <li>Bar charts compare categories.</li>
        <li>Line charts show trends over time.</li>
        <li>Pie charts show proportions.</li>
      </ul>
    `
  },
  'sql': {
    title: 'SQL Queries',
    content: `
      <h3>SQL Queries</h3>
      <p>SQL is used to ask questions from databases and retrieve structured data.</p>
      <p>Common commands include SELECT, JOIN, WHERE, GROUP BY, and ORDER BY.</p>
    `
  },
  'exploratory': {
    title: 'Exploratory Analysis',
    content: `
      <h3>Exploratory Data Analysis</h3>
      <p>EDA helps you find patterns, relationships, and unusual values in a dataset.</p>
      <p>It is often the first step before building models or reports.</p>
    `
  },
  'ml': {
    title: 'Machine Learning',
    content: `
      <h3>Machine Learning</h3>
      <p>Machine learning lets computers learn patterns from data and make predictions or decisions.</p>
      <ul>
        <li>Regression predicts numbers.</li>
        <li>Classification predicts categories.</li>
        <li>Clustering groups similar items together.</li>
      </ul>
    `
  },
  'predictive': {
    title: 'Predictive Analytics',
    content: `
      <h3>Predictive Analytics</h3>
      <p>Predictive analytics uses past data to estimate future outcomes.</p>
      <p>It is used in sales forecasting, risk analysis, and demand planning.</p>
    `
  },
  'bigdata': {
    title: 'Big Data Technologies',
    content: `
      <h3>Big Data Technologies</h3>
      <p>Big data tools are built to handle very large and fast-moving datasets.</p>
      <p>Examples include Hadoop, Spark, and distributed databases.</p>
    `
  },
  'dashboard': {
    title: 'Advanced Dashboarding',
    content: `
      <h3>Advanced Dashboarding</h3>
      <p>Dashboards present KPIs, trends, and summaries in one clear view.</p>
      <p>Good dashboards are simple, readable, and decision-focused.</p>
    `
  }
};

function openLesson(lessonId) {
  const lesson = lessons[lessonId];
  const modal = document.getElementById('lesson-modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');

  if (!lesson || !modal || !title || !body) {
    alert('Lesson could not be opened.');
    return;
  }

  title.textContent = lesson.title;
  body.innerHTML = lesson.content;
  modal.classList.add('active');
}

function closeLesson() {
  const modal = document.getElementById('lesson-modal');
  if (modal) modal.classList.remove('active');
}

function completeLesson() {
  alert('Lesson completed!');
  closeLesson();
}

function parseNumbers(value) {
  return value
    .split(',')
    .map(v => parseFloat(v.trim()))
    .filter(v => !isNaN(v));
}

function mean(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

function median(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

function mode(numbers) {
  const freq = {};
  let best = numbers[0];
  let max = 0;

  for (const n of numbers) {
    freq[n] = (freq[n] || 0) + 1;
    if (freq[n] > max) {
      max = freq[n];
      best = n;
    }
  }

  return best;
}

function stdDev(numbers) {
  const m = mean(numbers);
  const variance = numbers.reduce((sum, n) => sum + Math.pow(n - m, 2), 0) / numbers.length;
  return Math.sqrt(variance);
}

function calculateStats() {
  const input = document.getElementById('stats-input');
  const output = document.getElementById('stats-output');
  if (!input || !output) return;

  const numbers = parseNumbers(input.value);
  if (!numbers.length) {
    output.innerHTML = '<p style="color:#dc2626;">Please enter valid numbers.</p>';
    return;
  }

  output.innerHTML = `
    <p><strong>Mean:</strong> ${mean(numbers).toFixed(2)}</p>
    <p><strong>Median:</strong> ${median(numbers).toFixed(2)}</p>
    <p><strong>Mode:</strong> ${mode(numbers)}</p>
    <p><strong>Standard Deviation:</strong> ${stdDev(numbers).toFixed(2)}</p>
    <p><strong>Count:</strong> ${numbers.length}</p>
    <p><strong>Min:</strong> ${Math.min(...numbers)}</p>
    <p><strong>Max:</strong> ${Math.max(...numbers)}</p>
  `;
}

function calculateStatistics() {
  const input = document.getElementById('data-input');
  const output = document.getElementById('stats-result');
  if (!input || !output) return;

  const numbers = parseNumbers(input.value);
  if (!numbers.length) {
    output.innerHTML = '<p style="color:#dc2626;">Please enter valid numbers.</p>';
    return;
  }

  output.innerHTML = `
    <p><strong>Mean:</strong> ${mean(numbers).toFixed(2)}</p>
    <p><strong>Median:</strong> ${median(numbers).toFixed(2)}</p>
    <p><strong>Mode:</strong> ${mode(numbers)}</p>
  `;
}

function createChart() {
  const chartType = document.getElementById('chart-type');
  const chartData = document.getElementById('chart-data');
  const output = document.getElementById('chart-output');
  if (!chartType || !chartData || !output) return;

  const numbers = parseNumbers(chartData.value);
  if (!numbers.length) {
    output.innerHTML = '<p style="color:#dc2626;">Please enter valid numbers.</p>';
    return;
  }

  const total = numbers.reduce((a, b) => a + b, 0);
  const max = Math.max(...numbers);

  if (chartType.value === 'bar') {
    output.innerHTML = `
      <div style="display:flex; align-items:flex-end; gap:10px; height:160px; padding:10px;">
        ${numbers.map(n => `
          <div style="flex:1; height:${(n / max) * 140}px; background:linear-gradient(135deg,#6366f1,#8b5cf6); border-radius:10px 10px 0 0; display:flex; align-items:flex-end; justify-content:center; color:#fff; font-size:12px; padding-bottom:6px;">${n}</div>
        `).join('')}
      </div>
    `;
  } else if (chartType.value === 'line') {
    output.innerHTML = `
      <p><strong>Line chart preview:</strong> ${numbers.join(' → ')}</p>
      <p>Use a charting library like Chart.js later for real lines.</p>
    `;
  } else {
    output.innerHTML = `
      <div>
        ${numbers.map((n, i) => `<p>Value ${i + 1}: ${n} (${((n / total) * 100).toFixed(1)}%)</p>`).join('')}
      </div>
    `;
  }
}

function rollDice() {
  const output = document.getElementById('probability-result');
  if (!output) return;
  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  output.innerHTML = `
    <p><strong>Dice 1:</strong> ${d1}</p>
    <p><strong>Dice 2:</strong> ${d2}</p>
    <p><strong>Total:</strong> ${d1 + d2}</p>
  `;
}

function drawCard() {
  const suits = ['♠', '♥', '♦', '♣'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const output = document.getElementById('probability-result');
  if (!output) return;
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  output.innerHTML = `<p style="font-size:2rem; text-align:center;">${value}${suit}</p>`;
}

function startCleaningGame() {
  const dirty = document.getElementById('dirty-data');
  const result = document.getElementById('cleaning-result');
  if (!dirty || !result) return;

  dirty.textContent = "Name,Age,Salary
John,25,50000
Jane,30,
Bob,-5,45000
,28,52000";

  result.innerHTML = `
    <h4>Find the errors:</h4>
    <ul>
      <li>Missing salary for Jane</li>
      <li>Negative age for Bob</li>
      <li>Missing name in the last row</li>
    </ul>
    <button class="btn-secondary" onclick="cleanData()">Clean Data</button>
  `;
}

function cleanData() {
  const result = document.getElementById('cleaning-result');
  if (!result) return;
  result.innerHTML = `
    <h4>✅ Data Cleaned!</h4>
    <p>The missing name row was removed, Bob's invalid age was fixed, and Jane's salary was estimated.</p>
  `;
}

const quizzes = [
  {
    question: "What type of data is 'Color'?",
    options: ["Numerical", "Categorical", "Quantitative", "Continuous"],
    correct: 1
  },
  {
    question: "What is the mean of [2, 4, 6, 8]?",
    options: ["4", "5", "6", "20"],
    correct: 1
  },
  {
    question: "Which chart is best for trends over time?",
    options: ["Pie Chart", "Bar Chart", "Line Chart", "Scatter Plot"],
    correct: 2
  },
  {
    question: "What does SQL stand for?",
    options: ["Simple Query Language", "Structured Query Language", "System Query Logic", "Standard Question Language"],
    correct: 1
  },
  {
    question: "Which is NOT a type of machine learning task?",
    options: ["Regression", "Classification", "Clustering", "Visualization"],
    correct: 3
  }
];

let currentQuiz = 0;

function loadQuiz() {
  const q = document.getElementById('quiz-question');
  const o = document.getElementById('quiz-options');
  const r = document.getElementById('quiz-result');
  const n = document.getElementById('next-quiz');
  if (!q || !o || !r || !n) return;

  const quiz = quizzes[currentQuiz];
  q.textContent = quiz.question;
  o.innerHTML = quiz.options.map((opt, i) => `
    <div class="quiz-option" onclick="checkQuiz(${i})">${opt}</div>
  `).join('');
  r.style.display = 'none';
  n.style.display = 'none';
}

function checkQuiz(selected) {
  const quiz = quizzes[currentQuiz];
  const options = document.querySelectorAll('.quiz-option');
  const result = document.getElementById('quiz-result');
  const next = document.getElementById('next-quiz');
  if (!result || !next) return;

  options.forEach((el, i) => {
    el.classList.remove('correct', 'incorrect');
    if (i === quiz.correct) el.classList.add('correct');
    if (i === selected && selected !== quiz.correct) el.classList.add('incorrect');
  });

  result.style.display = 'block';
  result.style.background = selected === quiz.correct ? '#dcfce7' : '#fee2e2';
  result.style.color = '#111827';
  result.textContent = selected === quiz.correct ? 'Correct!' : 'Incorrect. The correct answer is highlighted.';
  next.style.display = 'block';
}

function nextQuiz() {
  currentQuiz = (currentQuiz + 1) % quizzes.length;
  loadQuiz();
}

function predictPrice() {
  const input = document.getElementById('sqft-input');
  const output = document.getElementById('price-output');
  if (!input || !output) return;

  const sqft = parseFloat(input.value);
  if (isNaN(sqft) || sqft <= 0) {
    output.innerHTML = '<p style="color:#dc2626;">Please enter a valid number.</p>';
    return;
  }

  const price = sqft * 100;
  output.innerHTML = `
    <p><strong>Estimated Price:</strong> $${price.toLocaleString()}</p>
    <p><strong>Formula:</strong> Square Feet × $100</p>
  `;
}

function checkCategorization() {
  const temp = document.getElementById('temp-type')?.value;
  const color = document.getElementById('color-type')?.value;
  const age = document.getElementById('age-type')?.value;
  const result = document.getElementById('categorization-result');
  if (!result) return;

  let score = 0;
  if (temp === 'Numerical') score++;
  if (color === 'Categorical') score++;
  if (age === 'Numerical') score++;

  result.innerHTML = score === 3 ? '🎉 Perfect! All answers are correct.' : `You got ${score}/3 correct. Try again.`;
}

function submitForm(event) {
  event.preventDefault();
  alert('Thank you for your message!');
  event.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuiz();

  document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const id = anchor.getAttribute('href').slice(1);
      scrollToSection(id);
    });
  });

  document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('click', () => {
      document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
      step.classList.add('active');
    });
  });

  const modal = document.getElementById('lesson-modal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeLesson();
    });
  }

  window.scrollToSection = scrollToSection;
  window.openLesson = openLesson;
  window.closeLesson = closeLesson;
  window.completeLesson = completeLesson;
  window.calculateStats = calculateStats;
  window.calculateStatistics = calculateStatistics;
  window.createChart = createChart;
  window.rollDice = rollDice;
  window.drawCard = drawCard;
  window.startCleaningGame = startCleaningGame;
  window.cleanData = cleanData;
  window.nextQuiz = nextQuiz;
  window.checkQuiz = checkQuiz;
  window.predictPrice = predictPrice;
  window.checkCategorization = checkCategorization;
  window.submitForm = submitForm;
});
