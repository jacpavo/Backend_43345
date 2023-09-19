import mongoose from 'mongoose';
import Users from '../src/dao/Users.dao.js';
import Assert from 'assert';

mongoose.connect('mongodb+srv://coderhouse:coder123456@coderhouse.z88zdi9.mongodb.net/adoptme?retryWrites=true&w=majority');

const assert = Assert.strict;

describe('Testing users DAO', () => {
    before(function () {
        this.usersDao = new Users();
    });

    beforeEach(function () {
        mongoose.connection.collections.users.drop();
    });

    it('El dao de usuarios debe retornar un array', async function() {
        const result = await this.usersDao.get();
        assert.strictEqual(Array.isArray(result), true)
    });

    it('El dao debe agregar un usuario a la db', async function() {
        let mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@mail.com',
            password: '123456'
        };

        const result = await this.usersDao.save(mockUser);
        assert.ok(result._id)
    });

    it('El dao debe agregar un array vacio al crear un usuario en la db', async function() {
        let mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@mail.com',
            password: '123456'
        };

        const result = await this.usersDao.save(mockUser);
        assert.deepStrictEqual(result.pets, [])
    });

    it('El dao debe obtener un usuario por su email', async function() {
        let mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@mail.com',
            password: '123456'
        };

        const result = await this.usersDao.save(mockUser);
        const user = await this.usersDao.getBy({ email: mockUser.email })
        assert.ok(user._id)
        assert.strictEqual(mockUser.email, user.email)
    });


})