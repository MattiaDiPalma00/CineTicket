function getBotResponse(input) {

    // Simple responses
     if (input == "hello") {
        return "Hello";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input === "@assistenza"){
        return "cineticket.project@gmail.com";
    }
    else if (input == "@problemilogin") {
        return "You have various possibilities including registering via the form or using google access " +
            "for further problems contact cineticket.project@gmail.com";
    }
     else if (input == "@promozione") {
        return "Before receiving the promotional code to show at the counter, sign up and enter " +
            "to be part of our community";
    }
     else if (input == "OK") {
         return "Try asking for more!";
     }
      else if (input == "ok") {
         return "Try asking for more!";
     }

}