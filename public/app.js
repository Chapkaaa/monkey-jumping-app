let tg = window.Telegram.WebApp;

console.log("Script started");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded");
    tg.expand();

    const mainMenuBtn = document.getElementById('main-menu');
    const levelUpBtn = document.getElementById('level-up');
    const upgradeBikeBtn = document.getElementById('upgrade-bike');
    const content = document.getElementById('content');

    console.log("Buttons:", mainMenuBtn, levelUpBtn, upgradeBikeBtn);

    mainMenuBtn.addEventListener('click', () => {
        console.log("Main menu clicked");
        content.innerHTML = '<img id="monkey" src="monkey.png" alt="Monkey">';
    });

    levelUpBtn.addEventListener('click', () => {
        console.log("Level up clicked");
        content.innerHTML = '<h2>Level Up Monkey</h2><p>Upgrade your monkey\'s abilities here!</p>';
    });

    upgradeBikeBtn.addEventListener('click', () => {
        console.log("Upgrade bike clicked");
        content.innerHTML = '<h2>Upgrade Bike</h2><p>Improve your monkey\'s bike here!</p>';
    });
});

console.log("Script ended");