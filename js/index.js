
var fireflies = 1;
var $container = $(".fire_move");
var $containerWidth = $container.width();
var $containerHeight = $container.height();
var master = new TimelineMax();

for (var i = 0; i < fireflies; i++) {

    var firefly = $('<div class="firefly"></div>');
    var firefly2 = $('<div class="firefly2"></div>');
    var firefly3 = $('<div class="firefly3"></div>');
    var firefly4 = $('<div class="firefly4"></div>');
    var firefly5 = $('<div class="firefly5"></div>');


    TweenLite.set(firefly, {
        x: Math.random() * $containerWidth,
        y: Math.random() * $containerHeight
    });
    $container.append(firefly);
    flyTheFirefly(firefly);

    TweenLite.set(firefly2, {
        x: Math.random() * $containerWidth,
        y: Math.random() * $containerHeight
    });
    $container.append(firefly2);
    flyTheFirefly(firefly2);

    TweenLite.set(firefly3, {
        x: Math.random() * $containerWidth,
        y: Math.random() * $containerHeight
    });
    $container.append(firefly3);
    flyTheFirefly(firefly3);
    }

    TweenLite.set(firefly4, {
    x: Math.random() * $containerWidth,
    y: Math.random() * $containerHeight
    });
    $container.append(firefly4);
    flyTheFirefly(firefly4);


    TweenLite.set(firefly5, {
    x: Math.random() * $containerWidth,
    y: Math.random() * $containerHeight
    });
    $container.append(firefly5);
    flyTheFirefly(firefly5);




function flyTheFirefly(elm) {
    var flyTl = new TimelineMax();
    var fadeTl = new TimelineMax({
        delay: Math.floor(Math.random() * 2) + 1,
        repeatDelay: Math.floor(Math.random() * 5) +1,
        repeat: -1
    });

    fadeTl.to(
        [elm],
        1,
        { opacity: 0.25, transition: 3, yoyo: true, repeat: 1.5, repeatDelay: 3, yoyo: true },
        Math.floor(Math.random() * 6) + 0.5
    );

    flyTl
        .set(elm, {scale: Math.random() * 0.75 + 0.5})
        .to(elm, Math.random() * 50 + 50, {
            bezier: {
                values: [
                    {
                        x: Math.random() * $containerWidth,
                        y: Math.random() * $containerHeight
                    },
                    {
                        x: Math.random() * $containerWidth,
                        y: Math.random() * $containerHeight
                    }
                ]
            },
            onComplete: flyTheFirefly,
            onCompleteParams: [elm]
        });
}


