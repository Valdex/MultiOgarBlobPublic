module.exports = {
    Mode: require('./Mode'),
    FFA: require('./FFA'),
    Teams: require('./Teams'),
    Experimental: require('./Experimental'),
    InstantMerge: require('./InstantMerge'),
    Crazy: require('./Crazy'),
    SelfFeed: require('./SelfFeed'),
};

var get = function (id) {
    var mode;
    switch (id) {
        case 1: // Teams
            mode = new module.exports.Teams();
            break;
        case 2: // Experimental
            mode = new module.exports.Experimental();
            break;
        case 3: // InstantMerge
            mode = new module.exports.InstantMerge();
            break;
        case 4: // Crazy
            mode = new module.exports.Crazy();
            break;
        case 5:// SelfFeed
            mode = new module.exports.SelfFeed();
            break;
        default: // FFA is default
            mode = new module.exports.FFA();
            break;
    }
    return mode;
};

module.exports.get = get;
