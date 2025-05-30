document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('madness-btn');
    const text = document.getElementById('madness-text');
    const effect = document.getElementById('madness-effect');
    let madnessLevel = 0;
    let intervalId = null;

    function randomColor() {
        return `hsl(${Math.floor(Math.random()*360)}, 100%, 60%)`;
    }

    function startMadness() {
        if (intervalId) return;
        intervalId = setInterval(() => {
            document.body.style.background = `linear-gradient(135deg, ${randomColor()} 0%, ${randomColor()} 100%)`;
            text.style.color = randomColor();
            text.style.transform = `rotate(${Math.random()*10-5}deg) scale(${1+Math.random()*0.2})`;
            effect.innerHTML = '';
            for(let i=0;i<10+madnessLevel*5;i++){
                const span = document.createElement('span');
                span.style.position = 'absolute';
                span.style.left = Math.random()*100+'vw';
                span.style.top = Math.random()*100+'vh';
                span.style.fontSize = (1+Math.random()*3)+'em';
                span.style.color = randomColor();
                span.style.opacity = Math.random();
                span.textContent = ['ちんちん','☠','✦','✧','☄','☢','☣','✖','✰','✪'][Math.floor(Math.random()*10)];
                effect.appendChild(span);
            }
        }, 120);
        text.textContent = '狂気が加速する...';
        madnessLevel++;
    }

    btn.addEventListener('click', startMadness);
});