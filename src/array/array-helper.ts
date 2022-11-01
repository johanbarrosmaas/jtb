export function mapBy<T,K>(arr: Array<T>, mapBy: string | string[], mapFn?: (item: T, items: K) => K) {
    if (!(arr instanceof Array)) return new Map<T,K>();
    if (arr.length == 0) return new Map<T,K>();
    
    if (mapFn == null) mapFn = (item: T, items: K) => {
        if (items == null) return new Array(item);
        if (!(items instanceof Array)) return new Array(item);
        items.push(item);
        return items;
    };

    return arr.reduce((acc, cur) => {
        const id = cur[mapBy];
        if (id == null) return acc;
        let result = acc.has(id) ? acc.get(id) : undefined;
        result = mapFn(cur, result) as K;
        acc.set(id, result);
    }, new Map<T,K>());
}
