type ObjectWithProperty<T extends string> = {
    [key in T]: unknown;
};

export function isObject(value: unknown): value is Record<string, unknown> {
    if (typeof value !== 'object') {
        return false;
    }

    if (!value) {
        return false;
    }

    return true;
}

export function isObjectWithProperty<KeyName extends string>(value: unknown, key: KeyName):
        value is ObjectWithProperty<KeyName> {
    if (!isObject(value)) {
        return false;
    }

    return Object.prototype.hasOwnProperty.call(value, key);
}
