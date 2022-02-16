
(function () {
    var showing = true;
    function fnAddButtons() {
        var div = document.createElement("div");
        div.className = "hideBottomDiv";
        var btn = document.createElement("button");
        btn.className = "hide_bottom"
        btn.innerHTML = 'Hide';
        btn.id = "hide-bottom-btn";
        btn.type = "submit";
        var bottom = document.querySelector(".ytp-right-controls");
        bottom.style.display = "flex";
        

        let newDiv = document.createElement("div");
        newDiv.className = "btn btn-raised"
        newDiv.id = "chat-circle"
        newDiv.innerHTML = 'Show Again';

        let body = document.getElementsByTagName('body');
        console.log("body: ",body[0])
        body[0].insertBefore(newDiv, body[0].firstChild);



        div.appendChild(btn)
        bottom.insertBefore(div, bottom.firstChild);
    }

    function skipAd(){

        var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
        if(skipButton != undefined && skipButton.length > 0) {
        // console.log("Ad detected");
        skipButton[0].click();
    }
    console.log('Skip Ad is Running');
    }
    function hideGradient(e){
        var keyCode = e.which;
        if(keyCode!=104){
            return;
        }
        console.log("keyCode: ",keyCode);
        let visi = "hidden";
        if(!showing){
            visi = "visible";
        }
        showing = !showing;
        document.querySelector('.ytp-gradient-bottom').style.visibility = visi;
        document.querySelector('.ytp-gradient-top').style.visibility = visi;
        document.querySelector('.ytp-chrome-bottom').style.visibility = visi;
        document.querySelector('.ytp-chrome-top').style.visibility = visi;

        
        // console.log("hide_bottom is running");
    }

    window.addEventListener("keypress", hideGradient, false);
    // fnAddButtons();
    // document.getElementById('hide-bottom-btn').addEventListener('click', function(){
    //     // console.log("Hide button clicked");
    //     hideGradient();
    // });
    // hideGradient();
    setInterval(skipAd, 3000);

})();