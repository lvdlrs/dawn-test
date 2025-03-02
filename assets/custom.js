(function() {
    let videoWithText = document.querySelectorAll('.video__with-text');

    if( videoWithText.length > 0 ){
        videoWithText.forEach((viditem)=>{
            let btnContainer = viditem.querySelector('.video__btncontainer');

            btnContainer.addEventListener('click', et=>{
                console.log(et.currentTarget.querySelector('button'))
            })
        })
    }
})();