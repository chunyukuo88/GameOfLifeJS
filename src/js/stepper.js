

module.exports = {


stepper(cell){
    const neighbors = 0;

    const neighbor0 = document.getElementsByClassName("grid-item-0");
    const neighbor2 = document.getElementsByClassName("grid-item-2");
    const neighbor8 = document.getElementsByClassName("grid-item-8");
    const neighbor9 = document.getElementsByClassName("grid-item-8");
    const neighbor1 = document.getElementsByClassName("grid-item-8");
    
    if (neighbor0.background === 'orange')
        neighbors++;
    if (neighbor2.background === 'orange')
        neighbors++;
    if (neighbor8.background === 'orange')
        neighbors++;
    if (neighbor9.background === 'orange')
        neighbors++;
    if (neighbor10.background === 'orange')
        neighbors++;
    
    console.log(neighbors);
    // return neighbors;
}

}