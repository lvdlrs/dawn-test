(function() {
    let videoWithText = document.querySelectorAll('.video__with-text');

    if( videoWithText.length > 0 ){
        videoWithText.forEach((viditem)=>{
            let btnContainer = viditem.querySelector('.video__btncontainer');
            let playBtn = btnContainer.querySelector('.video__playbutton');
            let video = viditem.querySelector('video');


            playBtn.addEventListener('click', () => {
                playBtn.style.opacity = playBtn.style.opacity === '0' ? '1' : '0';

                video.paused ? video.play() : video.pause();
            });

            btnContainer.addEventListener('click', (event) => {
                if (event.target !== playBtn) {
                    playBtn.click(); 
                }

                playBtn.style.opacity = playBtn.style.opacity === '0' ? '1' : '0';

                video.paused ? video.play() : video.pause();
            });
        })
    }
})();