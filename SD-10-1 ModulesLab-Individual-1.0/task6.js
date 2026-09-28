export function rubricExcellent(calificacion) {
    let status = "Fail"

    if (calificacion > 8){
        status = "Excellent"
    } else if (calificacion>4){
        status = "Pass"
    }

    return status
}