export class DateTime {
      public day: string
      public month: string
      public year: number
      public time: string
    constructor(
    day: string,
    month: string,
    year: number,
    time: string
    ) 
    {
        this.day = day
        this.month = month
        this.year = year
        this.time = time
    }
  isEqual(other: DateTime): boolean {
    return (
      this.day === other.day &&
      this.month === other.month &&
      this.year === other.year &&
      this.time === other.time
    );
  }
}
