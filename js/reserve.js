function validates() {

        var nameX = document.forms["theForm"]["name"].value;
        if (nameX == "") {
            alert("Please provide your name!");
            return false;
        }
        if (isNaN(nameX) == 0){
            alert("Please provide a valid name!");
            return false;
        }

        var phoneX = document.forms["theForm"]["phone"].value;
        if (phoneX == "") {
            alert("Please provide your phone number!");
            return false;
        }
        if (isNaN(phoneX)){
            alert("Please provide a valid phone number!");
            return false;
        }

        var guestX = document.forms["theForm"]["guest"].value;
        if (guestX == "") {
            alert("Please provide total guests!");
            return false;
        }

        if (isNaN(guestX)){
            alert("Please provide a number for total guests!");
            return false;
        }

        var dateX = document.forms["theForm"]["date"].value;
        if (dateX == "") {
            alert("Please provide reservation date!");
            return false;
        }

        var timeX = document.forms["theForm"]["time"].value;
        if (timeX == "") {
            alert("Please provide reservation time!");
            return false;
        }
        
        var myDateX = new Date(dateX);
        var today = new Date();
        if (myDateX < today) {
            alert("Please provide a valid reservation date!");
            return false;
        }
    }

