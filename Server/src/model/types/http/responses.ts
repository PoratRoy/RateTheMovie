import { StatusCode } from "../../enum/http";
import { Response } from "express";

export type RawResponse<T> = {
    statusCode: StatusCode;
    data?: T;
    message?: string;
};

export type ResponseBody<T> = {
    message?: string;
    data?: T;
};

export type TResponse<T> = Response<ResponseBody<T>, Record<string, any>>;
