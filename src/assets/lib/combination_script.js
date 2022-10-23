const calcCom = (array, num, current = [], result = []) => {
    if (num <= 0) {
        result.push(current);
        return result;
    }
    const thisArray = [...array]; // Copy only values in order to execute mutable method shift() safely
    const nextNum = num - 1;
    while (thisArray.length >= num) {
        const thisCurrent = [...current]; // Copy only values in order to execute mutable method push() safely
        thisCurrent.push(thisArray[0]);
        thisArray.shift();
        calcCom(thisArray, nextNum, thisCurrent, result);
    }
    return result;
};

const com = (array, num) => {
    if (array.length < num) throw new Error('Number of elements of array must be greater than number to choose');
    const answer = calcCom(array, num);
    return answer;
};

module.exports = {
    com
};