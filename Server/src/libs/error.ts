import * as yup from "yup";
import mongoose from "mongoose";
import * as msg from "../model/constant/http/messages.json";
import { StatusCode } from "../model/enum/http";
import { Tables } from "../model/enum/database";
import { Response } from "express";
import { ResponseBody, TResponse } from "../model/types/http/responses";
import { response } from "./response";

export class DBError extends Error {
    constructor(body: Record<string, unknown> | string = {}) {
        super(JSON.stringify(body));
    }
}

export class DBCreateError extends DBError {
    constructor(
        body: string | Record<string, unknown> | undefined = {},
        public table: Tables,
    ) {
        super(body);
    }
}

export const handleError = <T>(
    res: TResponse<T>,
    error: unknown,
    data?: T,
): Response => {
    console.error(error);

    if (error instanceof yup.ValidationError) {
        return response(res, {
            statusCode: StatusCode.BAD_REQUEST,
            message: error.errors[0], //TODO: allow multiple errors
            data,
        });
    }
    if (error instanceof SyntaxError) {
        return response(res, {
            statusCode: StatusCode.BAD_REQUEST,
            message: error.message,
            data,
        });
    }
    if (error instanceof mongoose.Error.ValidatorError) {
        return response(res, {
            statusCode: StatusCode.BAD_REQUEST,
            message: error.value,
            data,
        });
    }
    if (error instanceof DBError) {
        return response(res, {
            statusCode: StatusCode.ERROR,
            message: msg.error.server,
            data,
        });
    }
    if (error instanceof DBCreateError) {
        return response(res, {
            statusCode: StatusCode.BAD_REQUEST,
            message: `${msg.error.create} ${error.table}`,
            data,
        });
    }
    if (error instanceof Error) {
        return response(res, {
            statusCode: StatusCode.ERROR,
            message: msg.error.server,
            data,
        });
    }
    throw error;
};
