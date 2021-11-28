const webArticle = [
    { text: 'FIRST PAGE lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto fuga ea aperiam expedita modi natus minima eligendi, autem error. In temporibus iure libero, ratione possimus quas pariatur. Illo libero perferendis repellat excepturi unde architecto ullam recusandae ab.', headline: 'ATLAS', src: ['./img/modernroom.jpg','./img/cosy.jpg']},
    { text: 'SECOND PAGE lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto fuga ea aperiam expedita modi natus minima eligendi, autem error, hic laboriosam doloribus quam distinctio atque qui similique omnis in vero laudantium sapiente placeat! Magnam totam quisquam nesciunt ipsum minus? Mollitia.', headline: 'ABOUT', src: ['./img/hotel.jpg','./img/outside.jpg']},
    { text: 'THIRD PAGE lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto fuga ea aperiam expedita modi natus minima eligendi, autem error, hic laboriosam doloribus quam distinctio atque qui similique omnis in vero laudantium sapiente placeat!', headline: 'PURPOSES', src: ['./img/two.jpg','./img/one.jpg']},
    { text: 'FOURTH PAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto fuga ea aperiam expedita modi natus minima eligendi, autem error, hic laboriosam doloribus quam distinctio atque quip', headline: 'CONTACT', src: ['./img/apple.jpg','./img/work.jpg']},
];

function webOpening(){
    const tl = gsap.timeline({defaults: {ease: 'power1out'}});
    tl.to('.opening-slider.one', {transform: 'translateY(-400%)', opacity: '0.6', duration: '2', delay: '0.5'});
    tl.to('.left-container', {opacity: '1', duration: '1'}, '-=1.5');
    tl.to('.opening-slider.two', {transform: 'translateX(200%)', opacity: '0.7', duration: '1.5'}, '-=1.4');
    tl.to('.top-image', {opacity: '1', duration: '2'}, '-=1');
    tl.to('.opening-slider.three', {transform: 'translateX(200%)', opacity: '0.8', duration: '1.5'}, '-=2');
    tl.to('.left-image', {opacity: '1', duration: '1'}, '-=1');
    tl.to('.right-image', {opacity: '1', duration: '1'}, '-=0.5');
}

export {webArticle, webOpening};