import { CharactersCollection } from './CharactersCollection';
import { LinkedListCollection } from './LinkedListCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numberCollection = new NumbersCollection([7, 10, 3, -5, 0]);
numberCollection.sort();

console.log('The sorted array is ', numberCollection.data);

const charactersCollection = new CharactersCollection('RohanBhowmick');

charactersCollection.sort();

console.log('The sorted string is : ', charactersCollection.data);

const linkedList = new LinkedListCollection();

linkedList.add(50);
linkedList.add(-90);
linkedList.add(150);
linkedList.add(250);
linkedList.add(80);

linkedList.sort();
//print
linkedList.print();
