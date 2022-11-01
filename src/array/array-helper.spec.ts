import { mapBy } from "./array-helper";

describe('Array Helper Test', ()=> {

    it('mapBy default', ()=> {
        expect(
            mapBy(
                [
                    { id: 1, name: 'John' },
                    { id: 2, name: 'Emily' },
                    { id: 1, name: 'Richard' }
                ],
                'id'
            )
        ).toBe(
            new Map(
                [
                    [1, [ {id: 1, name: 'John'}, {id: 1, name: 'Richard'}]],
                    [2, [ {id: 2, name: 'Emily'}]],
                ]
            )
        );
    });
});