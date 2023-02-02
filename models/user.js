const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'users';
    };
    
    static get nameColumn() {
        return 'name';
    }

    static get emailColumn() { 
        return 'email';
    }

    static get mobileColumn() {
        return 'mobile';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email', 'mobile'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                email: { type: 'string'},
                mobile: { type: 'string' }
            }
        }
    };

    static get relationMappings() {
        const Task = require('./task');

        return {
            task: {
                relation: Model.HasManyRelation,
                modelClass: Task,
                join: {
                    from: 'users.id',
                    to: 'task.user_id',
                }
                
            }
        }
    }

}

module.exports = User;