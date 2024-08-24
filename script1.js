let mens = document.getElementById('mens');
let mens1 = document.getElementById('mens1');
let book = document.getElementById('book');
let loc = document.getElementById('loc');

mens.addEventListener('click', function() {
    loc.dataset.type = 'loc'
    mens1.dataset.type = 'mens';
});

mens1.tabIndex = 0;
mens1.addEventListener('blur', function() {
    mens1.dataset.type = 'mens1';
});


book.addEventListener('click', function() {
	mens1.dataset.type = 'mens1'
    loc.dataset.type = 'loc1';
});

loc.tabIndex = 0;
loc.addEventListener('blur', function() {
    loc.dataset.type = 'loc';
});

let isInputColored = false;

        mens.addEventListener('click', () => {
            if (!isInputColored) {
                mens1.dataset.type = 'mens';
                isInputColored = true;
            } else {
                mens1.dataset.type = 'mens1';
                isInputColored = false;
            }
        });
        book.addEventListener('click', () => {
            if (!isInputColored) {
                loc.dataset.type = 'loc1';
                isInputColored = true;
            } else {
                loc.dataset.type = 'loc';
                isInputColored = false;
            }
        });