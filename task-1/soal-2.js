<<<<<<< HEAD
const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"]
const hewanJinak = ["Kucing", "Kelinci", "Ayam"]

const combine = () => [...hewanBuas, ...hewanJinak]

const foods = () => {
    let makananKesukaan = ["whiskas", "wortel", "biji-bijian"]
    hewanJinak.forEach((hewan, index) => console.log(hewan + " suka " + makananKesukaan[index]))
}

console.log(combine())
setTimeout(() => {
    foods()
=======
const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"]
const hewanJinak = ["Kucing", "Kelinci", "Ayam"]

const combine = () => [...hewanBuas, ...hewanJinak]

const foods = () => {
    let makananKesukaan = ["whiskas", "wortel", "biji-bijian"]
    hewanJinak.forEach((hewan, index) => console.log(hewan + " suka " + makananKesukaan[index]))
}

console.log(combine())
setTimeout(() => {
    foods()
>>>>>>> b8e2fd1 (Pengumpulan tugas 1)
},5000)