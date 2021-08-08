let choseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    cantactName = document.querySelector('.contactform_name')
    textH2 = document.getElementsByTagName('h2')[0]
    modal = document.querySelector('.modal')
    btn = document.querySelectorAll('.main_tel_title')[0]
    closeBtn = document.querySelector('.close')
    messege = document.getElementsByName('message')[0]
    main_btna = document.querySelector('.main_btna')
    // console.log(btn)



// 1-YOL (no recomentent)
// function hover() {
//     textH2.textContent = 'Text hover bolgani uchun  ozgardi' 
// }

// 2-YOL (no recomentent)
// textH2.onmouseenter = hover 

// 3-YOL (recomentent)
// textH2.addEventListener('mouseenter', function(){
//     textH2.textContent = 'Text hover bolgani uchun ozgardi '
// })

// textH2.addEventListener('mouseleave', function(){
//     textH2.textContent = 'Hammasi oz joyiga qayti '
// })

textH2.addEventListener('click', function() {
    textH2.classList.toggle('active')
})


main_btna.addEventListener('click',function(){
    main_btna.classList.toggle('active_main');
    main_btna.textContent = 'Subscribed'
} )


receiveBtn.addEventListener('click', function() {
    modal.style.display = 'block';
})


closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
})


cantactName.addEventListener('input', function() {
    messege.value = ` My name is ${cantactName.value} and I`
})