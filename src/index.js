module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];
        for (let config of bracketsConfig) {
            let ind = config.indexOf(currentSymbol);
            if (ind === 0) {
                let topElement = stack[stack.length - 1];
                if ((topElement === currentSymbol) && currentSymbol === config[1]) {
                    stack.pop();
                } else {
                    stack.push(currentSymbol);
                }
            } else if (ind === 1) {
                if (stack.length === 0) {
                    return false;
                }
                let topElement = stack[stack.length - 1];
                if (config[0] === topElement) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
}



