'use strict'
//Object descriptor
const obj = {};
Object.defineProperty(obj, "propa", {
    value: 42,
    writable: false
});
// obj.propa = 77;
const arr = ["prob", "proc", "prod", "proe", "prof"];
const arr2 = ['Jenkins', "Nagios", "ETCD", "John", "Jackob"];
for (let i = 0; i < arr.length; i++) {
    Object.defineProperty(obj, arr[i], {
        value: arr2[i],
        writable: true
    });
}
console.log(obj.prob);
console.log(obj.proc);
console.log(obj.prod);
console.log(obj.proe);
console.log(obj.prof);
