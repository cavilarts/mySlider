require(['./bear.js'], function(Bear) {
    var animals = new Bear();

    animals.init("parrot");
    animals.init("bear");
    animals.init("duck");
    animals.init("human");
});
