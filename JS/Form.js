class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("Welcome to Car Racing Game")
        title.position(200,50);
        var input = createInput("Enter your name.")
        var button = createButton("Play")
        var greeting = createElement('h3')
        input.position(200,250);
        button.position(200,300);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount++;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello " + name);
            greeting.position(200,150);
        })
    }
}