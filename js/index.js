const temasCard = document.querySelector('.temas__card');
console.log(temasCard);

temasCard.addEventListener('mousemove', e=>{
    const xAxis = (window.innerWidth - e.pageX  ) / 80;
    const yAxis = (window.innerHeight - e.pageY ) / 80;
    temasCard.style.transform = 'rotateY(' + xAxis + 'deg)'+' rotateX(' + yAxis + 'deg)';
});

