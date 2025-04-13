export interface Response<T> {
    statusCode: number;
    isSuccess: boolean;
    response?: T;
    message?: string;
    error?: string;
}