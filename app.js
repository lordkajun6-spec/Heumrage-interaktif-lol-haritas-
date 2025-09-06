const alanlar = document.querySelectorAll('map[name="lolmap"] area');
const sesOynatici = new Audio();

alanlar.forEach(alan => {
    alan.addEventListener('mouseenter', () => {
        const sesAdi = alan.dataset.sound;
        if (sesAdi) {
            sesOynatici.src = `https://pub-4203e1ea3980402399369ab3ab779e98.r2.dev/${sesAdi}.wav`; 
            sesOynatici.play();
        }
    });

    alan.addEventListener('mouseleave', () => {
        sesOynatici.pause();
        sesOynatici.currentTime = 0;
    });

});
