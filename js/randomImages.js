function randomImg(){
    var path = 'http://www.lucashanyok.com/images_1/',
    imgs = ['carrot.gif','neil_1.jpg','steak.jpg'],
    i = Math.floor(Math.random()*imgs.length);
    $('.el').append("<img src='"+path+imgs[i]+"'>").hide().fadeIn(2000);
    
}