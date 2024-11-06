const obj = {};
Object.defineProperty(obj, "aprop", {
    get() { return 10.9 },
    configurable: false
});
// Object.defineProperty(obj, "aprop", {
//     configurable: true
// })

//delete obj.aprop;
// Object.defineProperty(obj, "aprop", {
//     enumerable: true
// });
Object.defineProperty(obj, "propb", {
    value: 2001,
    configurable: true
});
// delete obj.propb

Object.defineProperty(obj, "p", {
    value: 1001,
    writable: true,
    configurable: false,//you cannot delete prop
    enumerable: false//you cannot list the property publicly (for in)
});
obj.p = 8989;
//#region 
Object.defineProperty(obj, "ppp", {
    value: [1009, 777, 90],
    writable: false,
    configurable: true
});
// obj.ppp = 1009;
Object.defineProperty(obj, "ppp", {
    value: 111111111
});
//#endregion
console.log(obj.aprop);
console.log(obj.propb);
console.log(obj.p);
console.log(obj.ppp);
