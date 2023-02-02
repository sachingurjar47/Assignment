const { Model } = require("objection")

class Task extends Model{
    static get tableName() {
        return "tasks";
    }
    static get userIdColumn() {
        return "user_id";
    }

    static get taskNameColumn() {
        return "task_name";
    }
    static get taskTypeColumn() {
        return "task_type";
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['task_name', 'task_type'],

            properties: {
                id: { type: 'integer' },
                user_id: { type: 'integer' },
                task_name: { type: 'string', minLength: 1, maxLength: 255 },
                task_type: { type: 'string' },
            }
        }
    }; 

}
module.exports=Task;