
import { DateEndYear, DateStartYear } from "../models/constant";
import { DateRangeOptionFilter } from "../models/types/filter";
import { MovieFilters } from "../models/types/movie";
import { datePattern } from "./format";


export const extractYearFromDate = (date: string): string => {
    return date.substring(0, 4);
};

export const isDateVaild = (date: string | undefined, filters?: MovieFilters): boolean => {
    if (date && datePattern.test(date)) {
        const filterYearsRange = filters?.year;
        if (filterYearsRange) {
            const [minS, maxS] = filterYearsRange;
            const yearS = extractYearFromDate(date);
            const min = parseInt(minS);
            const max = parseInt(maxS);
            const year = parseInt(yearS);
            const isInRange = min <= year && year <= max;
            return isInRange;
        }
        return true;
    }
    return false;
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

export const subtractYears = (year: number = DateEndYear, subtract: number = 4): number =>
    year - subtract;
