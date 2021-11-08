function isMultiple(valor, mult) {
    const resp = valor % mult;
    if (resp == 0)
       return true;
    else
        return false

}


function multiple() {
    const min = 100;
    for (var i = 0; i < min; i++) {
        let mult3 = isMultiple(i, 3);
        let mult5 = isMultiple(i, 5);
        if (mult3 && mult5) {
            console.log("DriveRevel")
        } else{
            if (mult3) {
                console.log("Drive")
            } else {
                if (mult5) {
                    console.log("Revel")
                } else{
                    console.log(i)
                }
            }
        }
    }
}
multiple()