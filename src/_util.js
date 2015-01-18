userSeeder.util = {
    applyFnMaps: applyFnMaps,
    applyFnMap: applyFnMap,
    range: range,
    generateNeighbors: generateNeighbors
};

function applyFnMaps(count,fnMap) {
    function getFnMapResult() {
        return applyFnMap(fnMap);
    }
    return range(count).map(getFnMapResult)
}

// {key1:func1, key2:func2, ...} ->
// {key1:func1(), key2:func2(), ...}
function applyFnMap(fnMap) {
    var result = {};
    Object.keys(fnMap).forEach(function(field) {
        result[field] = fnMap[field]();
    });
    return result;
}

// mimics range in python
function range(count) {
    return _.range(count);
}

// generates random friends list of user given a pool to choose from
function generateNeighbors(item, pool) {
    var others = _.without(pool, item);
    console.log(others);
    var count = _.random(1, others.length); 
    return _.sample(others, count);
}

