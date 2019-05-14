export interface PropertyValidationError {
    Property: string;
    Errors: ValidationError[];
}

export interface ValidationError {
    ErrorCode: string;
    Error: string;
}
