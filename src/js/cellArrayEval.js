module.exports = {

    evaluate(cell){
        return cell.innerText === '@' ? 1 : 0;
    }
}