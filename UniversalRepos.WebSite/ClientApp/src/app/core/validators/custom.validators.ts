import {
    ValidatorFn,
    FormGroup,
    FormControl,
    FormGroupDirective,
    NgForm,
    AbstractControl
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class CustomValidators {
    static childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
        const [firstControlName, ...otherControlNames] = Object.keys(
            formGroup.controls || {}
        );
        const isValid = otherControlNames.every(
            controlName =>
                formGroup.get(controlName).value ===
                formGroup.get(firstControlName).value
        );
        return isValid ? null : { childrenNotEqual: true };
    }

    static ipValidator: ValidatorFn = (control: AbstractControl) => {
        return control.value.match(regExps.ip) ? null : { ipFormat: true };
    }
    static urlValidator: ValidatorFn = (control: AbstractControl) => {
        return control.value === null || control.value === '' || control.value.match(regExps.url) || control.value.match(regExps.internalUrl) ? null : { urlFormat: true };
    }
    static phoneValidator: ValidatorFn = (control: AbstractControl) => {
      return control.value === null || control.value === '' || control.value.match(regExps.phone) ? null : { phoneFormat: true };
    }
}
export class ConfirmValidParentMatcher implements ErrorStateMatcher {
    isErrorState(
        control: FormControl | null,
        form: FormGroupDirective | NgForm | null
    ): boolean {
        return control.parent.invalid && control.touched;
    }
}

export const regExps: { [key: string]: RegExp } = {
    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
    phone: /^0[1-9][0-9]{8}$/,
    ip: /^[1-9]([0-9]?)([0-9]?)\.[1-9]([0-9]?)([0-9]?)\.[1-9]([0-9]?)([0-9]?)\.[1-9]([0-9]?)([0-9]?)$/,
    // tslint:disable-next-line:max-line-length
    url: /(((http|ftp|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/,
    // tslint:disable-next-line:max-line-length
    internalUrl: /(((http|ftp|https):\/{2})+(((^[1-9]([0-9]?)([0-9]?)\.[1-9]([0-9]?)([0-9]?)\.[1-9]([0-9]?)([0-9]?)\.[1-9]([0-9]?)([0-9]?)$):[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/,

};
