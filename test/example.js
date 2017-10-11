
// Unit Testing
describe('Tests for todo.app', function () {
    describe('the trimTodoName function', function () {
        it('should remove leading whitespace', function () {
            var string = '   name';
            expect(string.trim()).toEqual('name');
        });

        it('should remove leading whitespace', function () {
            var string = '   name';
            expect(string.trim()).toEqual('name1');
        });

        /*
        it('should remove trailing whitespace', function () {
            todo.util.trimTodoName('name   ').should.have.length(4);
        });

        it('should remove leading and trailing whitespace', function () {
            assert(todo.util.trimTodoName('  name  '), 'name');
        });
        */
    });
});