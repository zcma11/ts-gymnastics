/* 

AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]> --> true
AnyOf<[1, '', false, [], {}]> --> true
AnyOf<[0, 'test', false, [], {}]> --> true
AnyOf<[0, '', true, [], {}]> --> true
AnyOf<[0, '', false, [1], {}]> --> true
AnyOf<[0, '', false, [], { name: 'test' }]> --> true
AnyOf<[0, '', false, [], { 1: 'test' }]> --> true
AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]> --> true
AnyOf<[0, '', false, [], {}]> --> false
AnyOf<[]> --> false

*/

type AnyOf<T extends readonly any[]> = T extends Array<
  0 | '' | false | [] | { [k in any]: never }
>
  ? false
  : true
