function lastElement(array) {
    if (array.length == 0) {
        return null;
    }
    return array[array.length - 1];
}

function capitalize(word) {
    let restOfWord = word.slice(1);
    let firstLetter = word.slice(0, 1).toUpperCase();
    return firstLetter + restOfWord;
}

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function returnDay(number) {
    if (number < 1 || number > 7) {
        return null;
    }

    switch (number) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
        default:
            return null;
    }
}