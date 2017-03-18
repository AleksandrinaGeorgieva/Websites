$(function(){
    $("#footer").load("footer.html");
    $("#header").load("header.html");
    if($('.gallery')){
        $('.gallery').vitGallery();
        $('.gallery').vitGallery({
            buttons: true,
            galleryHeight: 'auto',
            imgBlockClass: 'gallery__img-block',
            controls: 'thumbnails', // points thumbnails
            controlsClass: 'gallery__controls',
            thumnailWidth: 90,
            thumnaiHeight: 60,
            thumbnailMargin: 5,
            animateSpeed: 2000,
            description: true,
            imgPadding: 15,
            autoplay: false,
            autoplayDelay: 3000,
            fullscreen: false,
            transition: 'crossfade' // slide crossfade
        });
    }
});