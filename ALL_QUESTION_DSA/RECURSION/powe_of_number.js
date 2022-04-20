function powerOfN(x, n) {
    if (n == 0) {
        return 1;
    }

    power = x * powerOfN(x, n - 1);
    console.log("powe ", power==number);
    return power;
}

console.log(powerOfN(4, 4));
