import { a } from '../../cjs/module-exports/lib.js';
import c from '../../cjs/module-exports-default/lib.js';
import d from '../../cjs/module-exports-default/lib.js';

console.log(a);

/**
 * Все cjs экспорты вида module.exports.some приходят в esm упакованными в объект со свойством some
 * Если экспортов несколько, они сольются в один объект
 */
console.log(c);
console.log(d);