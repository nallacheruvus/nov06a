console.log("Program to work with object descriptors");
const obja = {};
Object.defineProperty(obja, "a", {
    value: 1,
    enumerable: true
});
Object.defineProperty(obja, "b", {
    value: 2,
    enumerable: false
});
Object.defineProperty(obja, "c", {
    value: 3,
});
obja.d = 9901;//enumerable is true
Object.defineProperty(obja, Symbol.for("a"), {
    value: 100988,
    enumerable: true
});
Object.defineProperty(obja, Symbol.for("z"), {
    value: 1001,
    enumerable: false
});
console.log(JSON.stringify(obja));
for (const k in obja) {
    console.log(k + " " + obja[k]);
}
console.log(Object.keys(obja));
console.log(obja.propertyIsEnumerable("a"));
console.log(obja.propertyIsEnumerable("b"));
console.log(obja.propertyIsEnumerable("c"));
console.log(obja.propertyIsEnumerable("d"));
const objb = { ...obja };
console.log(objb.a);
console.log(objb.b);
console.log(objb.c);
console.log(objb.d);
const objbb = structuredClone(obja);
console.log(objbb.a);
console.log(objbb.b);
console.log(objbb.c);
console.log(objbb.d);