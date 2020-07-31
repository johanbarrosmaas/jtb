import { capitalize, capitalizeWords, removeAccent } from "./string-helper";

test("Word capitalized", () => {
    expect(capitalize("iNdEfInIdO")).toBe("Indefinido");
})

test("Words capitalized, but not articles", () => {
    expect(capitalizeWords("O UnIvErSo é iNfInItO")).toBe("O Universo é Infinito");
})

test("Must not have accent", () => {
    expect(removeAccent("é ç à ü")).toBe("e c a u");
})
