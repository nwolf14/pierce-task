import { isInRange } from "./numbers.utils";

export const isSuccessHttpCode = (code: number) => {
    const SUCCESS_CODES_RANGE_START = 200;
    const SUCCESS_CODES_RANGE_END = 300;

    return isInRange(code, SUCCESS_CODES_RANGE_START, SUCCESS_CODES_RANGE_END);
};
