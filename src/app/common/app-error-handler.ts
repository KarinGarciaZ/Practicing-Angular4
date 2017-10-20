import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error){
        alert('Something happened');
        console.log(error);
    }
}