export class Content {
  private readonly content: string;

  public get value(): string {
    return this.content;
  }

  private ValidateContentLength(value: string): boolean {
    return value.length > 5 && value.length < 240;
  }

  constructor(value: string) {
    const isContentLengthValid = this.ValidateContentLength(value);

    if (!isContentLengthValid) {
      throw new Error('Content Length Error');
    }

    this.content = value;
  }
}
