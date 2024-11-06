function MyClass() {
}
let value;
Object.defineProperty(MyClass.prototype, "xprop", {
    get() {
        return value;
    },
    set(x) {
        value = x;
    }
});

const a = new MyClass();
const b = new MyClass();
a.xprop = "John Grahams";
console.log(b.xprop);
