import fs from 'fs';

//Defining tuple using type alias

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {
    this.fileName = fileName;
  }

  abstract mapRow(val: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
