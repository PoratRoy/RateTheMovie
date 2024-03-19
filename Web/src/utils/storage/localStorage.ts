import { Key } from "react";

export default class LocalSrorage {
    public static get = (key: Key) => {
        const value = localStorage.getItem(key as string);
        return value ? JSON.parse(value) : undefined;
    };

    public static set = (key: Key, anyValue: string | number | Object) => {
        const value = JSON.stringify(anyValue);
        localStorage.setItem(key as string, value);
    };

    public static setAll = (valuesArray: [Key, string | number | Object][]) => {
        valuesArray.forEach((value) => {
            this.set(value[0], value[1]);
        });
    };

    public static add = (key: Key, anyValue: string | number | Object) => {
        const value = this.get(key);
        if (value && Array.isArray(value)) {
            this.set(key, [...value, anyValue]);
        } else {
            this.set(key, [anyValue]);
        }
    };

    public static removeFrom = (key: Key, index: number) => {
        const value = this.get(key);
        if (value && Array.isArray(value)) {
            if (index > -1) {
                value.splice(index, 1);
                this.set(key, value);
            }
        }
    };

    public static remove = (key: Key) => {
        localStorage.removeItem(key as string);
    };

    public static clear = () => {
        localStorage.clear();
    };
}
