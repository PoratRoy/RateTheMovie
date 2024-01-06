import { DateEndYear, DateStartYear } from "../models/constants";
import { DateRangeOptionFilter } from "../models/types/filter";
import { datePattern } from "./format";

export const extractYearFromDateString = (date: string | undefined): [boolean, string] => {
    if (date && datePattern.test(date)) {
        const year = date.substring(0, 4);
        return [true, year];
    }
    return [false, "Invalid date format"];
};

export const getYearsArray = (date?: DateRangeOptionFilter): string[] => {
    const startYear = date?.start || DateStartYear;
    const endYear = date?.end || DateEndYear;
    const yearsArray = [];

    for (let year = endYear; year >= startYear; year--) {
        yearsArray.push(year.toString());
    }

    return yearsArray;
};

export const delayPromise = (duration: number) =>
    new Promise((resolve) => setTimeout(resolve, duration));
