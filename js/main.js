// Smooth scrolling
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Lesson data
const lessons = {
    'data-types': {
        title: 'What is Data?',
        content: `
            <h3>Understanding Data</h3>
            <p>Data is information that can be collected, analyzed, and used to make decisions.</p>
            
            <h4>Types of Data:</h4>
            <ul>
                <li><strong>Categorical Data:</strong> Data that can be grouped into categories
                    <br>• Examples: Color (red, blue, green), Gender (male, female), City (NYC, LA, Chicago)</li>
                <li><strong>Numerical Data:</strong> Data that represents numbers
                    <br>• Examples: Age (25, 30, 35), Temperature (72°, 80°, 65°), Price ($10, $20, $30)</li>
                <li><strong>Qualitative Data:</strong> Descriptive information
                    <br>• Examples: Opinions, feelings, descriptions</li>
                <li><strong>Quantitative Data:</strong> Measurable numbers
                    <br>• Examples: Height, weight, income, score</li>
            </ul>
            
            <h4>Interactive Example:</h4>
            <p>Try categorizing these:</p>
            <div id="categorization-exercise">
                <p>• Temperature: <select id="temp-type"><option value="">Select</option><option>Numerical</option><option>Categorical</option></select></p>
                <p>• Color: <select id="color-type"><option value="">Select</option><option>Numerical</option><option>Categorical</option></select></p>
                <p>• Age: <select id="age-type"><option value="">Select</option><option>Numerical</option><option>Categorical</option></select></p>
                <button onclick="checkCategorization()" style="margin-top: 1rem; padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px;">Check Answers</button>
                <div id="categorization-result" style="margin-top: 1rem; padding: 10px; background: #f8f9fa; border-radius: 5px;"></div>
            </div>
        `
    },
    'basic-stats': {
        title: 'Basic Statistics',
        content: `
            <h3>Understanding Statistics</h3>
            <p>Statistics help us understand and interpret data.</p>
            
            <h4>Key Concepts:</h4>
            <ul>
                <li><strong>Mean (Average):</strong> Sum of all values divided by number of values
                    <br>Example: Mean of [2, 4, 6, 8] = (2+4+6+8)/4 = 20/4 = <strong>5</strong></li>
                <li><strong>Median:</strong> Middle value when data is ordered
                    <br>Example: Median of [2, 4, 6, 8] = <strong>5</strong> (average of 4 and 6)</li>
                <li><strong>Mode:</strong> Most frequent value
                    <br>Example: Mode of [2, 3, 3, 5, 7] = <strong>3</strong></li>
                <li><strong>Standard Deviation:</strong> How spread out the data is</li>
            </ul>
            
            <h4>Practice Calculator:</h4>
            <input type="text" id="stats-input" placeholder="Enter numbers: 5, 10, 15, 20" style="width: 100%; padding: 10px; margin: 10px 0;">
            <button onclick="calculateStats()" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px;">Calculate</button>
            <div id="stats-output" style="margin-top: 1rem; padding: 15px; background: #f8f9fa; border-radius: 5px;"></div>
        `
    },
    'visualization': {
        title: 'Data Visualization',
        content: `
            <h3>Creating Effective Visualizations</h3>
            <p>Visualizations make data easier to understand and communicate.</p>
            
            <h4>Common Chart Types:</h4>
            <ul>
                <li><strong>Bar Charts:</strong> Compare categories
                    <br>Best for: Sales by month, votes by candidate</li>
                <li><strong>Line Charts:</strong> Show trends over time
                    <br>Best for: Temperature changes, stock prices</li>
                <li><strong>Pie Charts:</strong> Show proportions
                    <br>Best for: Budget allocation, market share</li>
                <li><strong>Scatter Plots:</strong> Show relationships
                    <br>Best for: Height vs weight, price vs demand</li>
            </ul>
            
            <h4>Chart Builder Demo:</h4>
            <select id="demo-chart-type" style="padding: 10px; margin: 10px 0;">
                <option value="bar">Bar Chart</option>
                <option value="line">Line Chart</option>
                <option value="pie">Pie Chart</option>
            </select>
            <input type="text" id="demo-chart-data" placeholder="Data: 10,20,30,40" style="width: 100%; padding: 10px; margin: 10px 0;">
            <button onclick="buildDemoChart()" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px;">Build Chart</button>
            <div id="demo-chart-output" style="margin-top: 1rem; padding: 20px; background: #f8f9fa; border-radius: 5px; min-height: 150px;"></div>
        `
    },
    'ml': {
        title: 'Machine Learning',
        content: `
            <h3>Introduction to Machine Learning</h3>
            <p>Machine Learning is when computers learn from data to make predictions.</p>
            
            <h4>Main Types:</h4>
            <ul>
                <li><strong>Regression:</strong> Predicting numbers
                    <br>Examples: House prices, temperature, sales</li>
                <li><strong>Classification:</strong> Predicting categories
                    <br>Examples: Spam vs not spam, disease vs healthy</li>
                <li><strong>Clustering:</strong> Finding groups
                    <br>Examples: Customer segments, city neighborhoods</li>
            </ul>
            
            <h4>Simple Example - Linear Regression:</h4>
            <p>If houses cost $100 per square foot:</p>
            <p>1000 sq ft = $100,000</p>
            <p>1500 sq ft = $150,000</p>
            <p>2000 sq ft = $200,000</p>
            
            <h4>Try It:</h4>
            <input type="number" id="sqft-input" placeholder="Enter square feet" style="padding: 10px; margin: 10px 0;">
            <button onclick="predictPrice()" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px;">Predict Price</button>
            <div id="price-output" style="margin-top: 1rem; padding: 15px; background: #f8f9fa; border-radius: 5px;"></div>
        `
    }
};

// Open lesson modal
function openLesson(lessonId) {
    const lesson = lessons[lessonId];
    if (!lesson) {
        alert('Lesson not found!');
        return;
    }
    
    document.getElementById('modal-title').textContent = lesson.title;
    document.getElementById('modal-body').innerHTML = lesson.content;
    document.getElementById('lesson-modal').classList.add('active');
}

// Close lesson modal
function closeLesson() {
    document.getElementById('lesson-modal').classList.remove('active');
}

// Complete lesson and update progress
function completeLesson() {
    const activeModal = document.getElementById('lesson-modal');
    const modalTitle = document.getElementById('modal-title').textContent;
    
    // Update progress based on lesson
    if (modalTitle.includes('Data') || modalTitle.includes('Statistics')) {
        updateProgress('basics', 25);
    } else if (modalTitle.includes('Visualization') || modalTitle.includes('Cleaning')) {
        updateProgress('intermediate', 25);
    } else if (modalTitle.includes('Machine Learning') || modalTitle.includes('Advanced')) {
        updateProgress('advanced', 25);
    }
    
    closeLesson();
    alert('🎉 Lesson completed! Progress updated.');
}

// Update progress
function updateProgress(level, percentage) {
    const currentProgress = parseInt(document.getElementById(`percentage-${level}`).textContent);
    const newProgress = currentProgress + percentage;
    
    if (newProgress > 100) newProgress = 100;
    
    document.getElementById(`progress-${level}`).style.width = newProgress + '%';
    document.getElementById(`percentage-${level}`).textContent = newProgress + '%';
}

// Statistics calculator
function calculateStats() {
    const input = document.getElementById('stats-input').value;
    const numbers = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    
    if (numbers.length === 0) {
        document.getElementById('stats-output').innerHTML = '<p style="color: red;">Please enter valid numbers</p>';
        return;
    }
    
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const median = calculateMedian(numbers);
    const mode = calculateMode(numbers);
    const stdDev = calculateStdDev(numbers, mean);
    
    document.getElementById('stats-output').innerHTML = `
        <h4>Results:</h4>
        <p><strong>Mean:</strong> ${mean.toFixed(2)}</p>
        <p><strong>Median:</strong> ${median.toFixed(2)}</p>
        <p><strong>Mode:</strong> ${mode}</p>
        <p><strong>Standard Deviation:</strong> ${stdDev.toFixed(2)}</p>
        <p><strong>Count:</strong> ${numbers.length}</p>
        <p><strong>Min:</strong> ${Math.min(...numbers)}</p>
        <p><strong>Max:</strong> ${Math.max(...numbers)}</p>
    `;
}

function calculateMedian(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[mid];
}

function calculateMode(numbers) {
    const frequency = {};
    let maxFreq = 0;
    let mode = numbers[0];
    
    for (let num of numbers) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mode = num;
        }
    }
    
    return mode;
}

function calculateStdDev(numbers, mean) {
    const squaredDiffs = numbers.map(n => Math.pow(n - mean, 2));
    const avgSquaredDiff = squaredDiffs.reduce((a, b) => a + b, 0) / numbers.length;
    return Math.sqrt(avgSquaredDiff);
}

// Calculate statistics for simulation
function calculateStatistics() {
    const input = document.getElementById('data-input').value;
    const numbers = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    
    if (numbers.length === 0) {
        document.getElementById('stats-result').innerHTML = '<p style="color: red;">Please enter valid numbers</p>';
        return;
    }
    
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const median = calculateMedian(numbers);
    const mode = calculateMode(numbers);
    
    document.getElementById('stats-result').innerHTML = `
        <p><strong>Mean:</strong> ${mean.toFixed(2)}</p>
        <p><strong>Median:</strong> ${median.toFixed(2)}</p>
        <p><strong>Mode:</strong> ${mode}</p>
    `;
}

// Create chart for simulation
function createChart() {
    const chartType = document.getElementById('chart-type').value;
    const data = document.getElementById('chart-data').value;
    const numbers = data.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    
    if (numbers.length === 0) {
        document.getElementById('chart-output').innerHTML = '<p style="color: red;">Please enter valid numbers</p>';
        return;
    }
    
    const maxValue = Math.max(...numbers);
    let chartHTML = `<h4>${chartType.toUpperCase()} Chart:</h4>`;
    
    if (chartType === 'bar') {
        chartHTML += '<div style="display: flex; align-items: flex-end; gap: 10px; height: 150px; padding: 10px;">';
        numbers.forEach((num, i) => {
            const height = (num / maxValue) * 120;
            chartHTML += `<div style="background: #667eea; width: 40px; height: ${height}px; display: flex; align-items: flex-end; justify-content: center; color: white; font-size: 12px;">${num}</div>`;
        });
        chartHTML += '</div>';
    } else if (chartType === 'line') {
        chartHTML += '<div style="display: flex; gap: 20px; align-items: flex-end; height: 150px; padding: 10px;">';
        numbers.forEach((num, i) => {
            const height = (num / maxValue) * 120;
            chartHTML += `<div style="width: 20px; height: ${height}px; background: #667eea; margin-left: ${i > 0 ? '20px' : '0'};"></div>`;
        });
        chartHTML += '</div>';
    } else {
        chartHTML += `<div style="text-align: center; padding: 20px;">
            <p>Pie Chart visualization:</p>
            ${numbers.map((num, i) => {
                const percent = ((num / numbers.reduce((a, b) => a + b, 0)) * 100).toFixed(1);
                return `<p>Value ${i + 1}: ${num} (${percent}%)</p>`;
            }).join('')}
        </div>`;
    }
    
    document.getElementById('chart-output').innerHTML = chartHTML;
}

// Roll dice
function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const total = dice1 + dice2;
    
    document.getElementById('probability-result').innerHTML = `
        <p><strong>Dice 1:</strong> ${dice1}</p>
        <p><strong>Dice 2:</strong> ${dice2}</p>
        <p><strong>Total:</strong> ${total}</p>
    `;
}

// Draw card
function drawCard() {
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    
    document.getElementById('probability-result').innerHTML = `
        <p style="font-size: 2rem; text-align: center;">${value}${suit}</p>
    `;
}

// Start cleaning game
function startCleaningGame() {
    const dirtyData = "Name,Age,Salary
John,25,50000
Jane,30,
Bob,-5,45000
,28,52000";
    
    document.getElementById('dirty-data').textContent = dirtyData;
    document.getElementById('cleaning-result').innerHTML = `
        <h4>Find the errors:</h4>
        <p>1. Missing salary for Jane</p>
        <p>2. Negative age for Bob (-5)</p>
        <p>3. Missing name for last row</p>
        <button onclick="cleanData()" style="margin-top: 1rem; padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 5px;">Clean Data</button>
    `;
}

function cleanData() {
    document.getElementById('cleaning-result').innerHTML = `
        <h4>✅ Data Cleaned!</h4>
        <p>Fixed issues:</p>
        <ul>
            <li>Removed row with missing name</li>
            <li>Set Bob's age to 35 (corrected -5)</li>
            <li>Estimated Jane's salary as $48,000</li>
        </ul>
    `;
}

// Quiz system
const quizzes = [
    {
        question: "What type of data is 'Color' (red, blue, green)?",
        options: ["Numerical", "Categorical", "Quantitative", "Continuous"],
        correct: 1
    },
    {
        question: "What is the mean of [2, 4, 6, 8]?",
        options: ["4", "5", "6", "20"],
        correct: 1
    },
    {
        question: "Which chart is best for showing trends over time?",
        options: ["Pie Chart", "Bar Chart", "Line Chart", "Scatter Plot"],
        correct: 2
    },
    {
        question: "What does SQL stand for?",
        options: ["Simple Query Language", "Structured Query Language", "Standard Question Language", "System Query Logic"],
        correct: 1
    },
    {
        question: "Which is NOT a type of machine learning?",
        options: ["Regression", "Classification", "Clustering", "Visualization"],
        correct: 3
    }
];

let currentQuiz = 0;

function loadQuiz() {
    const quiz = quizzes[currentQuiz];
    document.getElementById('quiz-question').textContent = quiz.question;
    
    const optionsHTML = quiz.options.map((option, i) => 
        `<div class="quiz-option" onclick="checkQuiz(${i})">${option}</div>`
    ).join('');
    
    document.getElementById('quiz-options').innerHTML = optionsHTML;
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('next-quiz').style.display = 'none';
}

function checkQuiz(selected) {
    const quiz = quizzes[currentQuiz];
    const options = document.querySelectorAll('.quiz-option');
    
    options[selected].classList.add(selected === quiz.correct ? 'correct' : 'incorrect');
    options[quiz.correct].classList.add('correct');
    
    const result = document.getElementById('quiz-result');
    result.textContent = selected === quiz.correct ? 
        '🎉 Correct! Great job!' : 
        '❌ Incorrect. The correct answer is highlighted.';
    result.style.display = 'block';
    result.style.background = selected === quiz.correct ? '#d4edda' : '#f8d7da';
    result.style.color = selected === quiz.correct ? '#155724' : '#721c24';
    
    document.getElementById('next-quiz').style.display = 'block';
}

function nextQuiz() {
    currentQuiz++;
    if (currentQuiz >= quizzes.length) {
        currentQuiz = 0;
        alert('🎉 You completed all quizzes! Starting again.');
    }
    loadQuiz();
}

// Build demo chart
function buildDemoChart() {
    createChart();
}

// Predict price
function predictPrice() {
    const sqft = parseFloat(document.getElementById('sqft-input').value);
    if (!sqft || sqft <= 0) {
        document.getElementById('price-output').innerHTML = '<p style="color: red;">Please enter valid square feet</p>';
        return;
    }
    
    const price = sqft * 100;
    document.getElementById('price-output').innerHTML = `
        <p><strong>Estimated Price:</strong> $${price.toLocaleString()}</p>
        <p><strong>Formula:</strong> Square Feet × $100</p>
    `;
}

// Check categorization
function checkCategorization() {
    const temp = document.getElementById('temp-type').value;
    const color = document.getElementById('color-type').value;
    const age = document.getElementById('age-type').value;
    
    let correct = 0;
    let result = '';
    
    if (temp === 'Numerical') correct++;
    else result += '❌ Temperature is Numerical<br>';
    
    if (color === 'Categorical') correct++;
    else result += '❌ Color is Categorical<br>';
    
    if (age === 'Numerical') correct++;
    else result += '❌ Age is Numerical<br>';
    
    if (correct === 3) {
        result = '🎉 Perfect! All answers correct!';
    }
    
    document.getElementById('categorization-result').innerHTML = result;
}

// Scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Form submission
function submitForm(event) {
    event.preventDefault();
    alert('📨 Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Close modal on click outside
document.getElementById('lesson-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLesson();
    }
});

// Initialize
loadQuiz();

// Smooth scroll for navigation
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const id = this.getAttribute('href').substring(1);
        scrollToSection(id);
    });
});

// Active step highlighting
document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('click', function() {
        document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });
});
