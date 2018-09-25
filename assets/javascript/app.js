$(document).ready(function(){
    var bands = ["Poppin' Party", "Afterglow", "Hello, Happy World!", "Pastel ✽ Palettes", "Roselia"]
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
    var clickCount = 0;

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
        clickCount = 0;
        round++;
        time = 10;
        timer();
        $("#choice-container").show();
        $("#results").hide();
        questionType = Math.floor(Math.random()*5);
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
            $("#question").text("Which of these is a band member of "+ band + "?");
            answer = who;
            var wrong1Index = Math.floor(Math.random()*20);
            if (wrong1Index >= bandIndex*5){
                wrong1Index += 5;
            }
            var wrong2Index = wrong1Index;
            while (wrong2Index == wrong1Index){
                wrong2Index = Math.floor(Math.random()*20);
                if (wrong2Index >= bandIndex*5){
                    wrong2Index += 5;
                }
            }
            var wrong3Index = wrong1Index;
            while (wrong3Index == wrong1Index || wrong3Index == wrong2Index){
                wrong3Index = Math.floor(Math.random()*20);
                if (wrong3Index >= bandIndex*5){
                    wrong3Index += 5;
                }
            }
           var wrong1 = members[wrong1Index];
           var wrong2 = members[wrong2Index];
           var wrong3 = members[wrong3Index];
        } else if (questionType == 1) {
            $("#question").text("What position does "+who+" fill?")
            answer = where;
            var wrong1Index = Math.floor(Math.random()*4);
            if (wrong1Index >= whereIndex){
                wrong1Index++;
            }
            var wrong2Index = wrong1Index;
            while (wrong2Index == wrong1Index){
                wrong2Index = Math.floor(Math.random()*4);
                if (wrong2Index >= whereIndex){
                    wrong2Index++;
                }
            }
            var wrong3Index = wrong1Index;
            while (wrong3Index == wrong1Index || wrong3Index == wrong2Index){
                wrong3Index = Math.floor(Math.random()*4);
                if (wrong3Index >= whereIndex){
                    wrong3Index++;
                }
            }            
           var wrong1 = positions[wrong1Index];
           var wrong2 = positions[wrong2Index];
           var wrong3 = positions[wrong3Index];
        } else if (questionType == 2) {
            $("#question").text("Who is the "+where+" for "+band+"?")
            answer = who;
            var wrong1Index = Math.floor(Math.random()*24);
            if (wrong1Index == whoIndex){
                wrong1Index++;
            }
            var wrong2Index = wrong1Index;
            while (wrong2Index == wrong1Index){
                wrong2Index = Math.floor(Math.random()*24);
                if (wrong2Index == whoIndex){
                    wrong2Index++;
                }
            }
            var wrong3Index = wrong1Index;
            while (wrong3Index == wrong1Index || wrong3Index == wrong2Index){
                wrong3Index = Math.floor(Math.random()*24);
                if (wrong3Index >= whoIndex){
                    wrong3Index++;
                }
            }            
           var wrong1 = members[wrong1Index];
           var wrong2 = members[wrong2Index];
           var wrong3 = members[wrong3Index];
        } else if (questionType == 3) {
            $("#question").text("What band is "+who+" a member of?")
            answer = band;
            var wrong1Index = Math.floor(Math.random()*4);
            if (wrong1Index >= bandIndex){
                wrong1Index++;
            }
            var wrong2Index = wrong1Index;
            while (wrong2Index == wrong1Index){
                wrong2Index = Math.floor(Math.random()*4);
                if (wrong2Index >= bandIndex){
                    wrong2Index++;
                }
            }
            var wrong3Index = wrong1Index;
            while (wrong3Index == wrong1Index || wrong3Index == wrong2Index){
                wrong3Index = Math.floor(Math.random()*4);
                if (wrong3Index >= bandIndex){
                    wrong3Index++;
                }
            }            
           var wrong1 = bands[wrong1Index];
           var wrong2 = bands[wrong2Index];
           var wrong3 = bands[wrong3Index];
        } else if (questionType == 4) {
            $("#question").text("Which of these is a "+where+"?")
            answer = who;
            var wrong1Index = Math.floor(Math.random()*25);
            if (wrong1Index == whoIndex || wrong1Index == (whoIndex+5)%25 || wrong1Index == (whoIndex+10)%25 || wrong1Index == (whoIndex+15)%25 || wrong1Index == (whoIndex+20)%25 ){
                wrong1Index++;
            }
            var wrong2Index = wrong1Index;
            while (wrong2Index == wrong1Index){
                wrong2Index = Math.floor(Math.random()*25);
                if (wrong2Index == whoIndex || wrong2Index == (whoIndex+5)%25 || wrong2Index == (whoIndex+10)%25 || wrong2Index == (whoIndex+15)%25 || wrong2Index == (whoIndex+20)%25 ){
                    wrong2Index++;
                }
            }
            var wrong3Index = wrong2Index;
            while (wrong2Index == wrong3Index || wrong1Index == wrong3Index){
                wrong3Index = Math.floor(Math.random()*25);
                if (wrong3Index == whoIndex || wrong3Index == (whoIndex+5)%25 || wrong3Index == (whoIndex+10)%25 || wrong3Index == (whoIndex+15)%25 || wrong3Index == (whoIndex+20)%25 ){
                    wrong3Index++;
                }
            }            
           var wrong1 = members[wrong1Index];
           var wrong2 = members[wrong2Index];
           var wrong3 = members[wrong3Index];
        }
        var choiceIndex = Math.floor(Math.random()*4);
        $("#"+choices[choiceIndex]).text(answer);
        $("#"+choices[choiceIndex]).on("click", function(){correctAnswer()});
        $("#"+choices[(choiceIndex+1)%4]).text(wrong1);
        $("#"+choices[(choiceIndex+1)%4]).on("click", function(){wrongAnswer()});
        $("#"+choices[(choiceIndex+2)%4]).text(wrong2);
        $("#"+choices[(choiceIndex+2)%4]).on("click", function(){wrongAnswer()});
        $("#"+choices[(choiceIndex+3)%4]).text(wrong3);
        $("#"+choices[(choiceIndex+3)%4]).on("click", function(){wrongAnswer()});
    }

    function correctAnswer(){        
        $("#timer").text("You are correct!");        
        if (clickCount == 0) {
            correct++;
        }; 
        console.log(correct);
        clickCount++; //used to prevent multiple clicks adding to the total amount
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
        $("#band").attr("src", "assets/images/bands-"+bandIndex+".png")
        $("#member").attr("src", "assets/images/member"+whoIndex+".png")
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
            $("#timer").text($("#timer").text()+" You got "+correct+"/10 correct!")
            $("#question").text("Click here to start over!")
            questionType = -1;
        }
        $("#results-text").text(who+" is the "+where+" for "+band+"!")        
    }

    $("#question").on("click", function(){
        if (questionType == -1){            
            correct = 0;
            displayQuestion();
        } 
    })
})