function isMultiple(valor, mult) {
    const resp = valor % mult;
    if (resp == 0)
       return true;
    else
        return false

}


function multiple() {
    var min = 0;
    for (var i = 100; i > min; i--) {
        var mult3 = isMultiple(i, 3);
        var mult5 = isMultiple(i, 5);
        if (mult3 && mult5) {
            console.log(i, "DriveRevel")
        } else{
            if (mult3) {
                console.log(i, "Drive")
            } else {
                if (mult5) {
                    console.log(i, "Revel")
                } else{
                    console.log(i, "Vacio")
                }
            }
        }
    }
}
multiple()