// Select DOM elements once
const textarea = document.getElementById('input');
const preview = document.getElementById('preview');
const status = document.getElementById('status');

// Debounce helper to limit updates during rapid typing
function debounce(func, delay = 300) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
}

// Simulate async server processing
function simulateAsyncUpdate(text) {
    // Show typing indicator
    status.textContent = 'Typing...';
    preview.textContent = '';

    // Fake delay of 400–800ms
    const delay = 400 + Math.random() * 400;

    setTimeout(() => {
        // Update DOM with sanitized content
        preview.textContent = text || '(empty)';
        status.textContent = 'Updated just now';
    }, delay);
}

// Main handler — debounced for better UX
const handleInput = debounce((e) => {
    const value = e.target.value;
    simulateAsyncUpdate(value);
}, 300);

// Initial state
preview.textContent = '(empty)';
status.textContent = '';

// Attach event
textarea.addEventListener('input', handleInput); // 'input' is better than 'keyup' for textarea