export class Movies {
  private _title: string;
  private _year: number;
  private _genere: string;

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    this._year = value;
  }

  public get genere(): string {
    return this._genere;
  }
  public set genere(value: string) {
    this._genere = value;
  }

}
