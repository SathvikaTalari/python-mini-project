function getRockPaperScissorHTML() {
    return `
        <div class="project-content">
            <h2>🪨 Rock Paper Scissors</h2>
            <div class="game-container">

                <!-- Score Board -->
                <div class="score-board">
                    <div class="score-item">
                        <span class="score-label">You</span>
                        <span class="score-value" id="playerScore">0</span>
                    </div>
                    <div class="score-item">
                        <span class="score-label">Draws</span>
                        <span class="score-value" id="drawScore">0</span>
                    </div>
                    <div class="score-item">
                        <span class="score-label">Computer</span>
                        <span class="score-value" id="computerScore">0</span>
                    </div>
                </div>

                <!-- Game Display -->
                <div class="game-display">
                    <div class="choice-display">
                        <div class="player-choice">
                            <p>You</p>
                            <div class="choice-emoji" id="playerChoice">❓</div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="computer-choice">
                            <p>Computer</p>
                            <div class="computer-cards">
                                <div class="comp-card" id="comp-rock">
                                    <span class="choice-icon">🪨</span>
                                    <span>Rock</span>
                                </div>
                                <div class="comp-card" id="comp-paper">
                                    <span class="choice-icon">📄</span>
                                    <span>Paper</span>
                                </div>
                                <div class="comp-card" id="comp-scissors">
                                    <span class="choice-icon">✂️</span>
                                    <span>Scissors</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="result-message" id="resultMessage">Make your choice!</div>
                </div>

                <!-- Stats Grid -->
                <div class="stats-grid">
                    <div class="stat-card">
                        <span class="stat-label">Games Played</span>
                        <strong id="gamesPlayed">0</strong>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Wins</span>
                        <strong id="wins">0</strong>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Losses</span>
                        <strong id="losses">0</strong>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Current Streak</span>
                        <strong id="currentStreak">0</strong>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Best Streak</span>
                        <strong id="bestStreak">0</strong>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Best Score</span>
                        <strong id="bestScore">0</strong>
                    </div>
                </div>

                <!-- Adaptive AI Brain Panel -->
                <div class="ai-brain-panel" id="aiBrainPanel">
                    <div class="ai-brain-header">
                        <span class="ai-brain-icon">🧠</span>
                        <div class="ai-brain-title-group">
                            <span class="ai-brain-title">Computer Brain</span>
                            <span class="ai-brain-mode" id="aiMode">Observing...</span>
                        </div>
                        <div class="ai-confidence-badge" id="aiConfidenceBadge">
                            <span id="aiConfidenceValue">—</span>
                            <span class="ai-confidence-label">confidence</span>
                        </div>
                    </div>
                    <div class="ai-brain-stats">
                        <div class="ai-stat">
                            <span class="ai-stat-label">Your Favorite</span>
                            <span class="ai-stat-value" id="aiPlayerFavorite">—</span>
                        </div>
                        <div class="ai-stat ai-stat-divider"></div>
                        <div class="ai-stat">
                            <span class="ai-stat-label">AI Predicts</span>
                            <span class="ai-stat-value" id="aiPrediction">—</span>
                        </div>
                        <div class="ai-stat ai-stat-divider"></div>
                        <div class="ai-stat">
                            <span class="ai-stat-label">AI Will Play</span>
                            <span class="ai-stat-value" id="aiWillPlay">—</span>
                        </div>
                    </div>
                    <div class="ai-history-bar" id="aiHistoryBar">
                        <!-- filled dynamically -->
                    </div>
                </div>

                <!-- Player Buttons -->
                <div class="choices">
                    <button class="choice-btn" data-choice="rock" id="btn-rock">
                        <span class="choice-icon">🪨</span>
                        <span>Rock</span>
                    </button>
                    <button class="choice-btn" data-choice="paper" id="btn-paper">
                        <span class="choice-icon">📄</span>
                        <span>Paper</span>
                    </button>
                    <button class="choice-btn" data-choice="scissors" id="btn-scissors">
                        <span class="choice-icon">✂️</span>
                        <span>Scissors</span>
                    </button>
                </div>

                <p class="keyboard-hint">⌨️ Press <kbd>R</kbd> Rock · <kbd>P</kbd> Paper · <kbd>S</kbd> Scissors</p>

                <button class="btn-reset" id="resetRPS">Reset Game</button>
            </div>
        </div>

        <style>
            .game-container {
                text-align: center;
                padding: 2rem;
            }

            .score-board {
                display: flex;
                justify-content: center;
                gap: 3rem;
                margin-bottom: 2rem;
            }

            .score-item {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

            .score-label {
                font-size: 1rem;
                color: var(--text-secondary);
            }

            .score-value {
                font-size: 2.5rem;
                font-weight: bold;
                color: var(--primary-color);
            }

            .game-display {
                margin: 2rem 0;
            }

            .choice-display {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                margin-bottom: 1.5rem;
            }

            .choice-emoji {
                font-size: 5rem;
                padding: 1rem;
                animation: bounce 2s infinite;
            }

            .vs {
                font-size: 2rem;
                font-weight: bold;
                color: var(--primary-color);
            }

            .result-message {
                font-size: 1.5rem;
                font-weight: bold;
                min-height: 2rem;
                color: var(--primary-color);
            }

            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                gap: 1rem;
                margin: 1.5rem 0 2rem;
            }

            .stat-card {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 16px;
                padding: 1rem;
                text-align: center;
            }

            .stat-label {
                display: block;
                font-size: 0.9rem;
                color: var(--text-secondary);
                margin-bottom: 0.5rem;
            }

            .stat-card strong {
                font-size: 1.5rem;
                color: var(--primary-color);
            }

            .computer-cards {
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                margin-top: 0.5rem;
            }

            .comp-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.3rem;
                padding: 0.75rem;
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                min-width: 70px;
                opacity: 0.35;
                pointer-events: none;
                transition: var(--transition);
            }

            .comp-card .choice-icon {
                font-size: 1.8rem;
            }

            .comp-card.selected {
                opacity: 1;
                border-color: var(--primary-color);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.3);
            }

            /* ── AI Brain Panel ── */
            .ai-brain-panel {
                background: linear-gradient(135deg,
                    rgba(99, 102, 241, 0.08) 0%,
                    rgba(139, 92, 246, 0.08) 100%);
                border: 1px solid rgba(99, 102, 241, 0.25);
                border-radius: 20px;
                padding: 1.2rem 1.5rem;
                margin: 1.5rem 0;
                position: relative;
                overflow: hidden;
                backdrop-filter: blur(4px);
                text-align: left;
            }

            .ai-brain-panel::before {
                content: '';
                position: absolute;
                inset: 0;
                background: radial-gradient(ellipse at top left, rgba(99,102,241,0.12) 0%, transparent 70%);
                pointer-events: none;
            }

            .ai-brain-header {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                margin-bottom: 1rem;
            }

            .ai-brain-icon {
                font-size: 1.8rem;
                animation: brainPulse 2.5s ease-in-out infinite;
            }

            @keyframes brainPulse {
                0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(139,92,246,0)); }
                50% { transform: scale(1.08); filter: drop-shadow(0 0 8px rgba(139,92,246,0.6)); }
            }

            .ai-brain-title-group {
                display: flex;
                flex-direction: column;
                gap: 0.15rem;
                flex: 1;
            }

            .ai-brain-title {
                font-weight: 700;
                font-size: 1rem;
                color: var(--text-primary);
                letter-spacing: 0.02em;
            }

            .ai-brain-mode {
                font-size: 0.78rem;
                font-weight: 600;
                color: #a78bfa;
                letter-spacing: 0.04em;
                text-transform: uppercase;
            }

            .ai-brain-mode.mode-adaptive { color: #6ee7b7; }
            .ai-brain-mode.mode-learning { color: #fbbf24; }
            .ai-brain-mode.mode-random   { color: #f87171; }

            .ai-confidence-badge {
                display: flex;
                flex-direction: column;
                align-items: center;
                background: rgba(99, 102, 241, 0.15);
                border: 1px solid rgba(99, 102, 241, 0.3);
                border-radius: 12px;
                padding: 0.4rem 0.75rem;
                min-width: 64px;
            }

            #aiConfidenceValue {
                font-size: 1.1rem;
                font-weight: 700;
                color: var(--primary-color);
            }

            .ai-confidence-label {
                font-size: 0.68rem;
                color: var(--text-secondary);
                letter-spacing: 0.04em;
            }

            .ai-brain-stats {
                display: flex;
                align-items: stretch;
                gap: 0;
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(99,102,241,0.15);
                border-radius: 14px;
                overflow: hidden;
                margin-bottom: 1rem;
            }

            .ai-stat {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.3rem;
                padding: 0.75rem 0.5rem;
            }

            .ai-stat-divider {
                flex: 0 0 1px;
                background: rgba(99,102,241,0.2);
                padding: 0;
            }

            .ai-stat-label {
                font-size: 0.72rem;
                color: var(--text-secondary);
                text-transform: uppercase;
                letter-spacing: 0.06em;
                font-weight: 600;
            }

            .ai-stat-value {
                font-size: 1rem;
                font-weight: 700;
                color: var(--text-primary);
            }

            /* History dots */
            .ai-history-bar {
                display: flex;
                gap: 0.35rem;
                flex-wrap: wrap;
                justify-content: center;
                min-height: 1.1rem;
            }

            .ai-history-dot {
                width: 0.65rem;
                height: 0.65rem;
                border-radius: 50%;
                transition: all 0.3s ease;
                cursor: default;
            }

            .ai-history-dot.win  { background: #6ee7b7; box-shadow: 0 0 4px rgba(110,231,183,0.5); }
            .ai-history-dot.loss { background: #f87171; box-shadow: 0 0 4px rgba(248,113,113,0.5); }
            .ai-history-dot.draw { background: #94a3b8; }

            /* Choice buttons */
            .choices {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin: 2rem 0;
                flex-wrap: wrap;
            }

            .choice-btn {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                padding: 1.5rem;
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                cursor: pointer;
                transition: var(--transition);
                min-width: 120px;
            }

            .choice-btn:hover {
                transform: translateY(-5px);
                border-color: var(--primary-color);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.3);
            }

            .choice-btn.key-active {
                transform: translateY(-5px);
                border-color: var(--primary-color);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.3);
            }

            .choice-icon {
                font-size: 3rem;
            }

            .keyboard-hint {
                font-size: 0.9rem;
                color: var(--text-secondary);
                margin-bottom: 1rem;
            }

            .keyboard-hint kbd {
                display: inline-block;
                padding: 0.15rem 0.45rem;
                font-size: 0.85rem;
                font-family: monospace;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 5px;
                color: var(--primary-color);
                font-weight: bold;
            }

            .btn-reset {
                background: var(--danger-color);
                color: white;
                border: none;
                padding: 0.75rem 2rem;
                border-radius: 50px;
                cursor: pointer;
                font-size: 1rem;
                margin-top: 1rem;
                transition: var(--transition);
            }

            .btn-reset:hover {
                transform: scale(1.05);
            }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }
        </style>
    `;
}

function initRockPaperScissor() {
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    const choices = ['rock', 'paper', 'scissors'];
    const emojis  = { rock: '🪨', paper: '📄', scissors: '✂️' };
    const keyMap  = { r: 'rock', p: 'paper', s: 'scissors' };

    // Counter look-up: what beats each move
    const beatenBy = { rock: 'paper', paper: 'scissors', scissors: 'rock' };

    // ── Adaptive AI state ────────────────────────────────────────────────
    // Stores last N player moves (capped at 20 for recency)
    const HISTORY_CAP  = 20;
    const MIN_ADAPTIVE = 3;   // minimum moves before adaptive mode kicks in
    const ADAPT_RATE   = 0.75; // probability of playing counter vs random

    let playerHistory = [];   // recent player moves, newest at end

    // ── Persistent storage ───────────────────────────────────────────────
    const storage = window.appStorage || {
        saveToStorage(key, value) { localStorage.setItem(key, JSON.stringify(value)); },
        loadFromStorage(key, defaultValue = null) {
            const data = localStorage.getItem(key);
            if (!data) return defaultValue;
            try { return JSON.parse(data); } catch { return defaultValue; }
        },
    };

    // ── DOM refs ─────────────────────────────────────────────────────────
    const choiceBtns           = document.querySelectorAll('.choice-btn');
    const resetBtn             = document.getElementById('resetRPS');
    const gamesPlayedDisplay   = document.getElementById('gamesPlayed');
    const winsDisplay          = document.getElementById('wins');
    const lossesDisplay        = document.getElementById('losses');
    const currentStreakDisplay = document.getElementById('currentStreak');
    const bestStreakDisplay    = document.getElementById('bestStreak');
    const bestScoreDisplay     = document.getElementById('bestScore');
    const drawScoreDisplay     = document.getElementById('drawScore');

    // AI Brain panel refs
    const aiModeEl       = document.getElementById('aiMode');
    const aiConfEl       = document.getElementById('aiConfidenceValue');
    const aiFavEl        = document.getElementById('aiPlayerFavorite');
    const aiPredEl       = document.getElementById('aiPrediction');
    const aiWillEl       = document.getElementById('aiWillPlay');
    const aiHistoryBar   = document.getElementById('aiHistoryBar');

    // ── Load persisted stats ─────────────────────────────────────────────
    const stats = storage.loadFromStorage('rpsStats', {
        gamesPlayed: 0, wins: 0, losses: 0, currentStreak: 0, bestStreak: 0,
    });
    let bestScore = storage.loadFromStorage('rpsBestScore', 0);

    // Restore history if any
    playerHistory = storage.loadFromStorage('rpsPlayerHistory', []);

    updateStatsDisplay();
    updateBestScore();
    updateBrainPanel(null);   // initial render

    // ── Event wiring ─────────────────────────────────────────────────────
    choiceBtns.forEach(btn => {
        btn.addEventListener('click', () => playRound(btn.getAttribute('data-choice')));
    });

    // Keyboard shortcuts
    function handleKeydown(e) {
        const key = e.key.toLowerCase();
        if (keyMap[key]) {
            const choice = keyMap[key];
            const btn = document.querySelector(`.choice-btn[data-choice="${choice}"]`);
            if (btn) {
                btn.classList.add('key-active');
                setTimeout(() => btn.classList.remove('key-active'), 200);
            }
            playRound(choice);
        }
    }
    document.addEventListener('keydown', handleKeydown);

    resetBtn.addEventListener('click', resetGame);

    // Clean up listener when modal closes
    const observer = new MutationObserver(() => {
        if (!document.getElementById('resetRPS')) {
            document.removeEventListener('keydown', handleKeydown);
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // ── Adaptive AI logic ─────────────────────────────────────────────────
    /**
     * Returns { choice, predicted, confidence, mode }
     *  - choice:     what the computer actually plays
     *  - predicted:  what it thinks the player will play
     *  - confidence: string like "72%"
     *  - mode:       'random' | 'learning' | 'adaptive'
     */
    function getAdaptiveComputerChoice() {
        if (playerHistory.length < MIN_ADAPTIVE) {
            // Not enough data — pure random
            return {
                choice:     choices[Math.floor(Math.random() * 3)],
                predicted:  null,
                confidence: null,
                mode:       'learning',
            };
        }

        // ── Step 1: Overall frequency ──
        const freq = { rock: 0, paper: 0, scissors: 0 };
        playerHistory.forEach(m => freq[m]++);

        // ── Step 2: Markov transition from last move ──
        const lastMove = playerHistory[playerHistory.length - 1];
        const transitions = { rock: 0, paper: 0, scissors: 0 };
        for (let i = 0; i < playerHistory.length - 1; i++) {
            if (playerHistory[i] === lastMove) {
                transitions[playerHistory[i + 1]]++;
            }
        }
        const transitionTotal = Object.values(transitions).reduce((a, b) => a + b, 0);

        let predicted;
        let confidence;

        if (transitionTotal > 0) {
            // Blend: 60% Markov, 40% frequency
            const blended = {};
            choices.forEach(c => {
                blended[c] = 0.6 * (transitions[c] / transitionTotal)
                           + 0.4 * (freq[c] / playerHistory.length);
            });
            predicted  = choices.reduce((a, b) => blended[a] > blended[b] ? a : b);
            confidence = Math.round(blended[predicted] * 100);
        } else {
            // Fall back to overall frequency
            predicted  = choices.reduce((a, b) => freq[a] > freq[b] ? a : b);
            confidence = Math.round((freq[predicted] / playerHistory.length) * 100);
        }

        // ── Step 3: Adapt with randomness factor ──
        let finalChoice;
        let mode;
        if (Math.random() < ADAPT_RATE) {
            // Counter the predicted move
            finalChoice = beatenBy[predicted];
            mode = 'adaptive';
        } else {
            // Random — keeps game fair and surprising
            finalChoice = choices[Math.floor(Math.random() * 3)];
            mode = 'adaptive';
        }

        return {
            choice:     finalChoice,
            predicted,
            confidence: `${confidence}%`,
            mode,
        };
    }

    // ── Brain panel update ─────────────────────────────────────────────
    function updateBrainPanel(lastResult) {
        const n = playerHistory.length;

        // Mode label
        let modeText, modeClass;
        if (n < MIN_ADAPTIVE) {
            modeText  = `Observing (${n}/${MIN_ADAPTIVE} moves)`;
            modeClass = 'mode-learning';
        } else {
            modeText  = `Adaptive · ${n} moves analysed`;
            modeClass = 'mode-adaptive';
        }
        aiModeEl.textContent = modeText;
        aiModeEl.className   = 'ai-brain-mode ' + modeClass;

        // Overall favourite
        if (n === 0) {
            aiFavEl.textContent  = '—';
            aiPredEl.textContent = '—';
            aiWillEl.textContent = '—';
            aiConfEl.textContent = '—';
        } else {
            const freq = { rock: 0, paper: 0, scissors: 0 };
            playerHistory.forEach(m => freq[m]++);
            const fav = choices.reduce((a, b) => freq[a] >= freq[b] ? a : b);
            aiFavEl.textContent = emojis[fav] + ' ' + capitalize(fav);

            if (n < MIN_ADAPTIVE) {
                aiPredEl.textContent = '—';
                aiWillEl.textContent = '—';
                aiConfEl.textContent = '—';
            } else {
                // Show what AI predicts player will do NEXT
                const ai = getAdaptiveComputerChoice();
                if (ai.predicted) {
                    aiPredEl.textContent = emojis[ai.predicted] + ' ' + capitalize(ai.predicted);
                    aiWillEl.textContent = emojis[ai.choice]    + ' ' + capitalize(ai.choice);
                    aiConfEl.textContent = ai.confidence;
                }
            }
        }

        // History dots (last 15 results)
        if (lastResult !== null) {
            // We store the per-round outcome
            const dot = document.createElement('span');
            dot.className = 'ai-history-dot ' + lastResult;
            dot.title = lastResult;
            aiHistoryBar.appendChild(dot);
            // Keep at most 15
            while (aiHistoryBar.children.length > 15) {
                aiHistoryBar.removeChild(aiHistoryBar.firstChild);
            }
        }
    }

    // ── Core round logic ──────────────────────────────────────────────
    function playRound(playerChoice) {
        // Get AI decision BEFORE pushing player move (prediction is based on previous history)
        const ai = getAdaptiveComputerChoice();
        const computerChoice = ai.choice;

        // Record player move
        playerHistory.push(playerChoice);
        if (playerHistory.length > HISTORY_CAP) playerHistory.shift();
        storage.saveToStorage('rpsPlayerHistory', playerHistory);

        // Highlight computer card
        document.querySelectorAll('.comp-card').forEach(c => c.classList.remove('selected'));
        document.getElementById(`comp-${computerChoice}`).classList.add('selected');
        document.getElementById('playerChoice').textContent = emojis[playerChoice];

        // Determine result
        let result, outcomeClass;
        stats.gamesPlayed++;

        if (playerChoice === computerChoice) {
            result       = "It's a tie! 🤝";
            outcomeClass = 'draw';
            drawScore++;
        } else if (beatenBy[computerChoice] === playerChoice) {
            // player wins
            result       = 'You win! 🎉';
            outcomeClass = 'win';
            playerScore++;
            stats.wins++;
            stats.currentStreak++;
            if (stats.currentStreak > stats.bestStreak) stats.bestStreak = stats.currentStreak;
            if (playerScore > bestScore) {
                bestScore = playerScore;
                storage.saveToStorage('rpsBestScore', bestScore);
            }
        } else {
            result       = 'Computer wins! 🤖';
            outcomeClass = 'loss';
            computerScore++;
            stats.losses++;
            stats.currentStreak = 0;
        }

        document.getElementById('resultMessage').textContent = result;
        updateScore();
        saveRpsStats();
        updateStatsDisplay();
        updateBestScore();
        updateBrainPanel(outcomeClass);
    }

    // ── Helpers ───────────────────────────────────────────────────────
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function updateScore() {
        document.getElementById('playerScore').textContent   = playerScore;
        document.getElementById('computerScore').textContent = computerScore;
        if (drawScoreDisplay) drawScoreDisplay.textContent   = drawScore;
    }

    function updateStatsDisplay() {
        gamesPlayedDisplay.textContent   = stats.gamesPlayed;
        winsDisplay.textContent          = stats.wins;
        lossesDisplay.textContent        = stats.losses;
        currentStreakDisplay.textContent = stats.currentStreak;
        bestStreakDisplay.textContent    = stats.bestStreak;
    }

    function updateBestScore() {
        bestScoreDisplay.textContent = bestScore || 0;
    }

    function saveRpsStats() {
        storage.saveToStorage('rpsStats', stats);
    }

    function resetGame() {
        playerScore   = 0;
        computerScore = 0;
        drawScore     = 0;

        stats.gamesPlayed   = 0;
        stats.wins          = 0;
        stats.losses        = 0;
        stats.currentStreak = 0;

        playerHistory = [];
        storage.saveToStorage('rpsPlayerHistory', []);

        updateScore();
        updateStatsDisplay();
        saveRpsStats();

        document.getElementById('resultMessage').textContent = 'Make your choice!';
        document.getElementById('playerChoice').textContent  = '❓';
        document.querySelectorAll('.comp-card').forEach(c => c.classList.remove('selected'));

        // Reset brain panel
        aiHistoryBar.innerHTML = '';
        updateBrainPanel(null);
    }
}