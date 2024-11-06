/**
 * Function to use custom get and set on an object
 */
function Archiver() {
    let temperature = null;
    let name = '';
    const archive = [];
    Object.defineProperty(this, "temperature", {
        get() {
            return temperature;
        },
        set(v) {
            temperature = v;
            // archive.push(temperature);
        }
    });
    Object.defineProperty(this, "place", {
        get() {
            return name;
        },
        set(v) {
            name = v;
            archive.push(name + ";" + temperature);
        }
    });
    this.getArchive = function () {
        return archive;
    }
}

var arr = [10, 9, 12, 15, 17];
var arr2 = ['NY', 'NJ', 'WA', 'GE', 'FL'];
const arch = new Archiver();
for (let i = 0; i < arr.length; i++) {
    arch.temperature = arr[i];
    arch.place = arr2[i];
}
const aa = arch.getArchive();
// console.log(aa);
for (const i of aa) {
    const pp = i.split(";");
    console.log("Name of the place is " + pp[0]);
    console.log("Temperature of the place is " + pp[1]);
}