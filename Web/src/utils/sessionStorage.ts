import { Key } from "react";

export default class Session {
    public static get = (key: Key) => {
        const value = sessionStorage.getItem(key as string);
        return value ? JSON.parse(value) : undefined;
    };

    public static set = (key: Key, anyValue: string | number | Object) => {
        const value = JSON.stringify(anyValue);
        sessionStorage.setItem(key as string, value);
    };

    public static setAll = (valuesArray: [Key, string | number | Object][]) => {
        valuesArray.forEach((value) => {
            this.set(value[0], value[1]);
        });
    };

    public static remove = (key: Key) => {
        sessionStorage.removeItem(key as string);
    };

    public static clear = () => {
        sessionStorage.clear();
    };
}
