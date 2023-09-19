import mongoose from 'mongoose';
import Users from '../src/dao/Users.dao.js';
import chai from 'chai';

mongoose.connect('mongodb+srv://coderhouse:coder123456@coderhouse.z88zdi9.mongodb.net/adoptme?retryWrites=true&w=majority');

const expect = chai.expect;

describe('Testing users DAO', () => {
    before(function () {
        this.usersDao = new Users();
    });

    beforeEach(function () {
        mongoose.connection.collections.users.drop();
    });

    it('El dao de usuarios debe retornar un array', async function() {
        const result = await this.usersDao.get();
        expect(result).deep.equal([])
    });

    it('El dao debe agregar un usuario a la db', async function() {
        let mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@mail.com',
            password: '123456'
        };

        const result = await this.usersDao.save(mockUser);
        expect(result).to.have.property('_id')
    });

    it('El dao debe agregar un array vacio al crear un usuario en la db', async function() {
        let mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@mail.com',
            password: '123456'
        };

        const result = await this.usersDao.save(mockUser);
        expect(result.pets).deep.equal([]);
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
        expect(result).to.be.an('object');
        expect(result.email).to.be.equal(mockUser.email)
    });

    it('El dao debe actualizar un usuario por su id', async function() {
        let mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@mail.com',
            password: '123456'
        };

        const result = await this.usersDao.save(mockUser);
        await this.usersDao.update(result._id ,{ last_name: 'modificado'})
        let updatedUser = await this.usersDao.getBy({ _id: result._id});
        expect(updatedUser.last_name).to.be.equal('modificado');
    });

    it('El dao debe eliminar un usuario por su id', async function() {
        let mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@mail.com',
            password: '123456'
        };

        const result = await this.usersDao.save(mockUser);
        await this.usersDao.delete(result._id)
        let deletedUser = await this.usersDao.getBy({ _id: result._id});
        expect(deletedUser).to.be.null;
    })



})