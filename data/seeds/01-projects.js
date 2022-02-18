/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex, Promise) {     
  return knex('projects').insert([
    {project_name: 'bar', project_description: null, project_completed: false},
    {project_name: 'Ion', project_description: 'A portable suite of libraries and tools', project_completed: true},
    {project_name: 'Polymer', project_description: 'A lightweight library', project_completed: true},
    {project_name: 'GO++', project_description: 'Open source project', project_completed: false},
    {project_name: 'Python', project_description: 'Open source project', project_completed: true}                
  ]);      
};
