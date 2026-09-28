export function rubricPassFail(calificacion) {
    let status = "Fail"
    if (calificacion >= 5){
        status = "Pass"
    } 

    return status
}