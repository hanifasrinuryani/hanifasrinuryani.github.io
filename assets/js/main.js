$( document ).ready(function() {
    $("#eye1").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Cara Menjaga Kesehatan Mata",
            message: `<center><video width="320" height="240" controls>
            <source src="./assets/video/mata.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="./assets/voice/mata.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        })  
    });

    $("#link4").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Anggota Tubuh",
            message: `<center><h1>Pengenalan Anggota Tubuh</center>
            <audio controls autoplay style="display:none">
            <source src="./assets/voice/tubuh.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        });
        setTimeout(() => {
            window.location.replace("/tubuh.html");
        },2000)
    });

    $("#eye2").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Cara Menjaga Kesehatan Mata",
            message: `<center><video width="320" height="240" controls>
            <source src="./assets/video/mata.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="./assets/voice/mata.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        })  
    });




    $("#gigi1").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Cara Menjaga Kesehatan Gigi",
            message: `<center><video width="320" height="240" controls>
            <source src="./assets/video/gigi.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="./assets/voice/gigi.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        })  
    });

    $("#rambut").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Cara Menjaga Kesehatan Rambut",
            message: `<center><video width="320" height="240" controls>
            <source src="./assets/video/rambut.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="./assets/voice/rambut.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        })  
    });

    $("#link1").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Tata Cara Makan",
            message: `<center><video width="320" height="240" controls>
            <source src="./assets/video/makan.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="./assets/voice/makan.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        })  
    });

    $("#link2").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Tata Cara Memakai Baju",
            message: `<center><video width="320" height="240" controls>
            <source src="./assets/video/baju.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="./assets/voice/baju.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        })  
    });

    $("#link3").click(function() {
        bootbox.alert({
            size: "medium",
            title: "Tata Cara Mandi",
            message: `<center><video width="320" height="240" controls>
            <source src="./assets/video/mandi.mp4" type="video/mp4">
            Browser tidak support, silahkan ganti Browser Anda!
            </video></center>
            <audio controls autoplay style="display:none">
            <source src="./assets/voice/mandi.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `
        })  
    });
});

