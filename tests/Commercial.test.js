const Commercial = require('../models/Commercial')

it('creates a commercial (with correct fields)', async () => {
    const commercial = new Commercial({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        spent: 1000
    });
    expect(commercial.firstName).toBe('John');
    expect(commercial.lastName).toBe('Doe');
    expect(commercial.email).toBe('john.doe@example.com');
    expect(commercial.spent).toBe(1000);
});