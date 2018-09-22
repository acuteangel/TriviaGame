$(document).ready(function(){
    var bands = ["Poppin' Party", "Afterglow", "Hello, Happy World!", "Pastel✽Palettes", "Roselia"]
    var members = [ "Kasumi Toyama", "Tae Hanazono", "Rimi Ushigome", "Saaya Yamabuki", "Arisa Ichigaya",
                    "Ran Mitake", "Moca Aoba", "Himari Uehara", "Tomoe Udagawa", "Tsugumi Hazawa",
                    "Kokoro Tsurumaki", "Kaoru Seta", "Kagumi Kitazawa", "Kanon Matsubara", "Misaki Okusawa",
                    "Aya Maruyama", "Hina Hikawa", "Chisato Shirasagi", "Maya Yamato", "Eve Wakamiya",
                    "Yukina Minato", "Sayo Hikawa", "Lisa Imai", "Ako Udagawa", "Rinko Shirokane"]
    var positions = ["vocalist", "lead guitarist", "bassist", "drummer", "keyboardist"]
    var choices = ["choice-a", "choice-b", "choice-c", "choice-d"]
    var time;
    var questionType = -1;
    var bandIndex;
    var band;
    var whoIndex;
    var who;
    var whereIndex;
    var where;
    var timeInterval;
    var correct = 0;
    var round = 0;

    function timer(){
        $("#timer").text(time+" seconds remaining")
        timeInterval = setInterval(function(){
            if (time>1){
                time--;
                $("#timer").text(time+" seconds remaining");            
            } else {            
                time--;
                $("#timer").text(time+" seconds remaining");            
                clearInterval(timeInterval);
                $("#timer").text("Time Up!");
                roundEnd();
            }
        }, 1000)
    }

    function displayQuestion(){
        round++;
        time = 10;
        timer();
        $("#choice-container").show();
        $("#results").hide();
        questionType = Math.floor(Math.random()*1);
        bandIndex = Math.floor(Math.random()*5);
        band = bands[bandIndex];
        whoIndex = bandIndex*5 + Math.floor(Math.random()*5);
        who = members[whoIndex];
        whereIndex = whoIndex%5;
        where = positions[whereIndex];
        if (bandIndex == 2 && whereIndex == 4) {
            where = "DJ"
        }
        if (questionType == 0) {
            $("#question").text("Which of these is a band member of "+ bands[bandIndex] + "?");            
            var wrong1 = Math.floor(Math.random()*20);
            if (wrong1 >= bandIndex*5){
                wrong1 += 5;
            }
            var wrong2 = wrong1;
            while (wrong2 == wrong1){
                wrong2 = Math.floor(Math.random()*20);
                if (wrong2 >= bandIndex*5){
                    wrong2 += 5;
                }
            }
            var wrong3 = wrong1;
            while (wrong3 == wrong1 || wrong3 == wrong2){
                wrong3 = Math.floor(Math.random()*20);
                if (wrong3 >= bandIndex*5){
                    wrong3 += 5;
                }
            }            
            var choiceIndex = Math.floor(Math.random()*4);
            $("#"+choices[choiceIndex]).text(who);
            $("#"+choices[choiceIndex]).on("click", function(){correctAnswer()});
            $("#"+choices[(choiceIndex+1)%4]).text(members[wrong1]);
            $("#"+choices[(choiceIndex+1)%4]).on("click", function(){wrongAnswer()});
            $("#"+choices[(choiceIndex+2)%4]).text(members[wrong2]);
            $("#"+choices[(choiceIndex+2)%4]).on("click", function(){wrongAnswer()});
            $("#"+choices[(choiceIndex+3)%4]).text(members[wrong3]);
            $("#"+choices[(choiceIndex+3)%4]).on("click", function(){wrongAnswer()});
        } else if (questionType == 1) {

        }
    }

    function correctAnswer(){
        correct++;
        $("#timer").text("You are correct!");
        clearInterval(timeInterval);
        roundEnd();
    };
    function wrongAnswer(){
        $("#timer").text("You are wrong!");
        clearInterval(timeInterval);
        roundEnd();
    };
    function roundEnd(){
        $("#choice-container").hide();
        $("#results").show();
        if (round < 10) {
        time = 5;
        $("#question").text("Next round starting in "+time+" seconds")
        timeInterval = setInterval(function(){
            if (time>1){
                time--;
                $("#question").text("Next round starting in "+time+" seconds");
            } else {            
                time--;
                $("#question").text("Next round starting in "+time+" seconds");
                clearInterval(timeInterval);
                displayQuestion();
            }
        }, 1000)} else {
            $("#question").text("You got "+correct+" out of 10 correct!")
        }
        if (questionType == 0){
            $("#results-text").text(who+" is the "+where+" for "+band+"!")
        }
    }

    $("#question").on("click", function(){
        if (questionType == -1){
            displayQuestion();
        }
    })
})