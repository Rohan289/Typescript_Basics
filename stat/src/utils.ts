export const datestringToDate = (dateString: string): Date => {
  const dateParsed = dateString.split('/').map((val: string): number => {
    return parseInt(val);
  });

  return new Date(dateParsed[2], dateParsed[1] - 1, dateParsed[0]);
};
