import { AbstractControl, ValidatorFn } from "@angular/forms";

export function AgeValidator(ageMin : number) : ValidatorFn {
    return (control : AbstractControl) =>  {
        let mydate : Date = new Date(control.value)
        if(mydate == null) return null
        if(((new Date()).getFullYear()  - mydate.getFullYear()) >= ageMin) return null
        return {'ageError' : 'Vous êtes trop jeune'}
    }
}
