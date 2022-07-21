import { datestringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  constructor(public reader: DataReader) {}
  matches: MatchData[] = [];
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((val: string[]): MatchData => {
      return [
        datestringToDate(val[0]),
        val[1],
        val[2],
        parseInt(val[3]),
        parseInt(val[4]),
        val[5] as MatchResult,
        val[6],
      ];
    });
  }
}
