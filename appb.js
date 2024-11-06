const data = { name: "satish", email: "sat@yahoo.com", mobile: "9877656543" };
//Shallow copy techniques
data.mobile = "84747474774";
const copya = Object.assign({}, data);//1
console.log(copya);
const copyb = { ...data };//2
console.log(copyb);
//Deep copy techniques
const copyc = JSON.parse(JSON.stringify(data));//best-3
console.log(copyc);
const copyd = structuredClone(data);//4
console.log(copyd);

//You cannot use assignment op when you want to copy one object into another
