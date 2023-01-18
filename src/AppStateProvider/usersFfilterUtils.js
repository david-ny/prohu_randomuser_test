import primes from 'prime-fun';

const hasNPrimes = (number, n) => {
    const num = typeof number === "string" ? number : String(number);
    let numberOfPrimes = 0;
    const numberLength = num.length;
    for (let i = 0; i < numberLength; i++) {
        const segmentsLength = i + 1;
        for (let j = 0; j < numberLength - i; j++) {
            const testSegment = num.slice(j, j + segmentsLength);
            if (primes.isPrime(+testSegment)) {
                numberOfPrimes++;
                if (numberOfPrimes >= n) {
                    return true;
                }
            }
        }
    }
    return false;
};

const getAllNumbersFromPostalcode = code => typeof code === "string"
    ? code?.replace(/\D/g, "") 
    : code;


// postalcode has at least two prime numbers
const isValidUser = user => {
    const postode = getAllNumbersFromPostalcode(user?.location?.postcode);
    return hasNPrimes(postode, 2);
};

export {
    isValidUser,
};
