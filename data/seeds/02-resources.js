/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex, Promise) {     
  return knex('resources').insert([
    {resource_name: 'foo', resource_description: null},
    {resource_name: 'Web Components standard', resource_description: 'to better structure your web applications'},
    {resource_name: 'C++ like programming language', resource_description: null},
    {resource_name: 'OOP programming language', resource_description: null},
    {resource_name: 'Hardware workshop', resource_description: null}                
  ]);      
};

