const _ = require('lodash');

function annoy() {
    console.log('Annoyed!');
}

var annoyOnce = _.once(annoy);

annoyOnce();
annoyOnce();  // Won't be called next time.
annoyOnce();  // Won't be called next time.
