var array = [false, true, true, false, true];
function findFrequent(array) {
    let map = new Map();
    for (let i = 0; i &lt; array.length; i++) {
        if (map.has(array[i]) == false) {
            map.set(array[i], 1);
        } else {
            let value = map.get(array[i]);
            value += 1;
            map.set(array[i], value);
        }
    }
    let max_value = 0,
        value;
    for (let val of map.values()) {
        if (val &gt; max_value) {
            max_value = val;
        }
    }
    for (let key of map.keys()) {
        if (map.get(key) == max_value) {
            return key;
        }

    }
}
console.log(findFrequent(array));
