const $lyricsButton = document.querySelector('#toggle-lyrics-button')

$lyricsButton.addEventListener('click', () => {
    let $container1 = document.querySelector('#container-1')
    let $container2 = document.querySelector('#container-2')
    $container1.classList.toggle('hide')
    $container2.classList.toggle('hide')

})