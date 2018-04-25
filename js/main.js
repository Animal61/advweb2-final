// Call Parsley validator jQuery plugin
$('#request').parsley();


// Call WOWSlider jQuery plugin
$('#wowslider-container').wowSlider({effect: 'rotate', prev: '', next: '', duration: 2 * 100, delay: 20 * 100, width: 580, height: 212, autoPlay: true, stopOnHover: false, loop: false, bullets: true, caption: true, captionEffect: 'slide', controls: true, logo: '', images: 0});

// Custom JavaScript add Instagram icon onload
function addItem() {
    var li = document.createElement('li');
    var aTag = document.createElement('a');
    aTag.setAttribute('href', 'http://www.instagram.com');
    aTag.innerHTML = "<i class='fa fa-instagram fa-2x'></i>";
    li.appendChild(aTag);
    document.getElementById('socialMedia').appendChild(li);
}

addItem();
