import fs from 'fs';

//Defining tuple using type alias

export class CsvFileReader {
  data: string[][] = [];

  constructor(public fileName: string) {
    this.fileName = fileName;
  }

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}