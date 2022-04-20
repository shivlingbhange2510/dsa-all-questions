const powerOfN = (num) => {
    if (num == 1) {
        return true;
    }
    if (num % 3 != 0) {
        return false;
    }
    return powerOfN(num / 3);
};
console.log(powerOfN(72));
