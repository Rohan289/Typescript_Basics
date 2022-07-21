import { User } from './models/User';

const user = new User({ name: 'Rohan', age: 24 });

console.log(user.get('name'));
