import { MatchResult } from '../MatchResult';
import { datestringToDate } from '../utils';
import { CsvFileReader } from './CsvFileReader';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(val: string[]): MatchData {
    return [ 
      datestringToDate(val[0]),
      val[1],
      val[2],
      parseInt(val[3]),
      parseInt(val[4]),
      val[5] as MatchResult,
      val[6],
    ];
  }
}
