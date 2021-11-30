document.getElementsByTagName('button')[0].addEventListener('click', function (event) {
    if (!event.altKey) {
        throw new Error('Неправильная комбинация клавиш');
    }

    if (document.querySelector('.lettersContainer')) {
        return;
    }
    const parent = document.createElement('div');
    parent.classList.add('lettersContainer');
    for (let i = 0; i < 2; i++) {
        const letter = document.createElement('div');
        letter.classList.add('letter', 'letter__closed');
        parent.appendChild(letter);
    }
    document.body.appendChild(parent);
});