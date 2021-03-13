export const formatPrice = (number) => {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(number / 100);
};

export const getUniqueValues = (values, type) => {
    let unique = values.map((item) => item.fields[type]);
    if (type === "colors") {
        unique = unique.flat();
    }
    return ["all", ...new Set(unique)];
};
