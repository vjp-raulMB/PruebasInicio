let str = "ab1c3de4fg";

for (let char of str) {
    if (/[aeiouAEIOU]/.test(char)) {
        console.log(char + " es vocal");
    } else if (/[a-zA-Z]/.test(char)) {
        console.log(char + " es consonante");
    }
}