let name = `raghad`;
let age = 23;
console.log(name + age)
console.log(`my name is ${name} and my age is ${23}`)

let names = [`rana`, `rasha`, `aya`, `eman`, `hanan`,`kawther`]
names.push(`yosra`, `muna`)
names.unshift(`saba`,`lana`,`mira`)

names[2]=`rama`
console.log(names)
console.log(names[5])
console.log(names.length-3)
console.log(names)
let numbers = [1,2,3,[7,6,4,8,10,[7,1,2,3]]]
console.log(numbers[3][5][3])
numbers [2]=17;
console.log(numbers)

let result = names.concat(numbers);
numbers.slice(2,4)

let n =4
let m =6
function celan (n, m){
    return n*m;
}


let seran = document.createElement('div');
document.body.appendChild(seran);
seran.setAttribute("id", "mydiv");
let reem = document.createElement("p");
reem.textContent= "Raghad";
seran.appendChild(reem);

let deem= document.createElement("ol");
seran.appendChild(deem);
let sena = document.createElement("li");
let sena2 = document.createElement("li");
let sena3 = document.createElement("li");

sena.textContent= "Gender: female";
sena2.textContent= "age: 23";
sena3.textContent= "order: zinger"
deem.appendChild(sena);
deem.appendChild(sena2);
deem.appendChild(sena3);

let heropara = document.createElement('p');
heropara.textContent = 'welcome to our restaurant. enjoy your meal with special services';
document.body.appendChild(heropara);