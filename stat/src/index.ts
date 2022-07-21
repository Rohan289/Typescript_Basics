import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

let fileName = 'football.csv';

// let csvFileReader = new MatchReader(fileName);

// csvFileReader.read();

let csvFileReader = new CsvFileReader(fileName);
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let manUnitedWins = 0;
for (let match of matchReader.matches) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
