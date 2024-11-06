//Object descriptors
const obj = {};
Object.defineProperty(obj, "a", {
    value: 100,
    writable: true,
    enumerable: true
});

//When the enumerable is false 
//the property is not displayed as a part of the forin loop
//when it is not mentioned it is false by default


let bValue = 99;
//Custom getter setter on an object property
Object.defineProperty(obj, "b", {
    get() { return bValue },
    set(a) { bValue = a },
    enumerable: true,
    configurable: true
});
obj.b = 33;
for (const k in obj) {
    console.log(k + " " + obj[k]);
}
const tt = (
    function () {
        'use strict'
        const ob = {};
        Object.defineProperty(ob, "propaa", {
            value: 2,
            writable: false
        });
        // ob.propaa = 98;
        console.log(ob.propaa);
        return ob.propaa;
    }
)();
console.log(tt);
