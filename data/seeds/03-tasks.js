/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex, Promise) {     
  return knex('tasks').insert([
    {task_description: 'baz', task_notes: null, task_completed: false, project_id: 1},
    {task_description: 'hardware', task_notes: 'Open source project', task_completed: true, project_id: 2},
    {task_description: 'OOP library', task_notes: 'OOP', task_completed: false, project_id: 3},
    {task_description: 'Package', task_notes: 'OOP', task_completed: false, project_id: 3},
    {task_description: 'Module', task_notes: 'OOP', task_completed: false, project_id: 4}         
  ]);      
};