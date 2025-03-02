(function() {
    let videoWithText = document.querySelectorAll('.video__with-text');

    if( videoWithText.length > 0 ){
        videoWithText.forEach((viditem)=>{
            let btnContainer = viditem.querySelector('.video__btncontainer');

            btnContainer.addEventListener('click', et=>{
                let playBtn = et.currentTarget.querySelector('button');

                playBtn.style.opacity = 0 ? playBtn.style.opacity = 1 : playBtn.style.opacity = 0;
            })
        })
    }
})();