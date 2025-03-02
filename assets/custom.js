(function() {
    let videoWithText = document.querySelectorAll('.video__with-text');

    if( videoWithText.length > 0 ){
        videoWithText.forEach((viditem)=>{
            viditem.addEventListener('click', et=>{
                let playbtn = this.querySelector('.video__playbutton');

                console.log(playbtn);
            })
        })
    }
})();