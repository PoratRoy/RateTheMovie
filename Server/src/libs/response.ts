import { RawResponse, ResponseBody, TResponse } from "../model/types/http/responses";
import { Response } from "express";

export const response = <T extends any>(
    res: Response<ResponseBody<T>>,
    rawResponse: RawResponse<T>,
): TResponse<T> => {
    const { statusCode, message, data } = rawResponse;

    let body: ResponseBody<T> = {
        ...(data !== undefined && { data }),
        ...(message !== undefined && { message }),
    };

    console.info("Response body: ", body.data);

    return res.status(statusCode).json({
        message,
        data,
    });
};
