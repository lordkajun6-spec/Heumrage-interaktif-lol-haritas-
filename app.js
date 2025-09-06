const alanlar = document.querySelectorAll('map[name="lolmap"] area');
const sesOynatici = new Audio();

alanlar.forEach(alan => {
    alan.addEventListener('mouseenter', () => {
        const sesAdi = alan.dataset.sound;
        if (sesAdi) {
            sesOynatici.src = `sesler/${sesAdi}.wav`; 
            sesOynatici.play();
        }
    });

    alan.addEventListener('mouseleave', () => {
        sesOynatici.pause();
        sesOynatici.currentTime = 0;
    });
});