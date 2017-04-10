function myName() {
        var name, text;
        name = document.getElementById('focusName').value;
        text = 'Welcome, ' + name + '!';
        document.getElementById('demo').innerHTML = text;

        var age, textAge;
        age = document.getElementById('focusNumber').value;
        textAge = 'You have ' + age + ' years. ';
        document.getElementById('demo2').innerHTML = textAge;
        
        var film, i1, i2, i3, i4, i5, text1, text2, text3, text4, text5;

        i1 = document.getElementById('term').value;
        i2 = document.getElementById('forrest').value;
        i3 = document.getElementById('shrek').value;
        i4 = document.getElementById('avatar').value;
        i5 = document.getElementById('why').value;

        film = document.getElementById('focusFilm').value;

        if (film == i1 && age < 16) {
             text1 = 'You are not too aduld to see this movie!';
        }
        else if (film == i1 && age >= 16) {
             text1 = 'Nice choice!';
        }

        else if (film == i2 && age < 12) {
            text1 = 'Sorry but You are not too aduld to see this movie!';
        }
        else if (film == i2 && age >= 12) {
            text1 = 'Hmm, You have good taste!';
        }

        else if (film == i3 && age > 16) {
            text1 = 'Sorry but You are so big for this movie, ha ha!';
        }
        else if (film == i3 && age <= 16) {
            text1 = 'Nice movie, beby!';
        }

        else if (film == i4 && age < 12) {
            text1 = 'Sorry but You are too small for this movie =(!';
        }
        else if (film == i4 && age >= 12) {
            text1 = 'Nice movie!';
        }

        else if (film == i5 && age < 16) {
            text1 = 'Sorry but You are really too small for this movie!';
        }
        else if (film == i5 && age >= 16) {
            text1 = 'Prepare to laught!';
        }

        document.getElementById('demo3').innerHTML = text1;

        // i1 = document.getElementById('term').value;
        // if (age < 16) {
        //     text1 = 'You are not too aduld to see this movie!';
        // }
        // else if (age >= 16) {
        //     text1 = 'Nice choice!';
        // }
        // document.getElementById('demo3').innerHTML = text1;

        // i2 = document.getElementById('forrest').value;
        // if (age < 12) {
        //     text2 = 'Sorry but You are not too aduld to see this movie!';
        // }
        // else if (age >= 12) {
        //     text2 = 'Hmm, You have good taste!';
        // }
        // document.getElementById('demo3').innerHTML = text2;

        // i3 = document.getElementById('shrek').value;
        // if (age > 16) {
        //     text3 = 'Sorry but You are so big for this movie, ha ha!';
        // }
        // else if (age <= 16) {
        //     text3 = 'Nice movie, beby!';
        // }
        // document.getElementById('demo3').innerHTML = text3;

        // i4 = document.getElementById('avatar').value;
        // if (age < 12) {
        //     text4 = 'Sorry but You are too small for this movie =(!';
        // }
        // else if (age >= 12) {
        //     text4 = 'Nice movie!';
        // }
        // document.getElementById('demo3').innerHTML = text4;

        // i5 = document.getElementById('why').value;
        // if (age < 16) {
        //     text5 = 'Sorry but You are really too small for this movie!';
        //     console.log(age);
        // }
        // else if (age >= 16) {
        //     text5 = 'Prepare to laught!';
        // }
        // document.getElementById('demo3').innerHTML = text5;
    }