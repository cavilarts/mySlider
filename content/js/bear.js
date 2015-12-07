module.exports = function() {
    function init(animal) {
        if (this.animal) {
          this.animal();
        } else {
          this.default();
        }
    }
    
    function bear() {
        return "Roar";
    }

    function parrot() {
        return "Hello";
    }

    function duck() {
       return "Quack";
    }

    function default() {
       return "Im not available";
    }

    return {
       init: init
    }
} 
