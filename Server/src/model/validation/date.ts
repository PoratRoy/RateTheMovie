import { extractYearFromDate } from "../../utils/time";
import { datePattern } from "../constant";
import { MovieFilters } from "../types/filter";

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
