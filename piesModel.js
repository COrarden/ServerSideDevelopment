const { createPrivateKey } = require("crypto");

const pies = ["pecan", "cherry", "apple"];
const readPies = () => {
    return pies;
};

const createPie = (flavor) => {
    pies.push(flavor);
    return pies;
};

const updatePie = (index, newFlavor) => {
    if (index >= 0 && index < pies.length) {
        pies[index] = newFlavor;
        return pies;
    } else {
        throw new Error("Index out of bounds");
    }
};

const deletePie = (flavor) => {
    const eatenPieIndex = pies.findIndex((pie) => pie === flavor);
    if (eatenPieIndex === -1) {
        throw new Error("Pie not found");
    }
};

module.exports = {
    createPie,
    readPies,
    updatePie,
    deletePie,
};
// This module provides functions to manage a list of pies.