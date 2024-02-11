
const settings = {
  BOOKS_API_KEY: "AIzaSyC8zjtqULIX-63Q17PB9Qp0JariKSp5-yE",
};

export default class BookLoader {
  category: string;
  startIndex: number;
  maxResults: number;
  public apiUrl: string;
  public params?: URLSearchParams;

  constructor(category: string, startIndex: number, maxResults: number) {
    this.category = category;
    this.startIndex = Number(startIndex);
    this.maxResults = maxResults;
    if (this.params) {
      this.params.append("q", `"subject:${category}"`);
      this.params.append("key", settings.BOOKS_API_KEY);
      this.params.append("printType", "books");
      this.params.append("startIndex", startIndex.toString());
      this.params.append("maxResults", maxResults.toString());
    }

    this.apiUrl = `https://www.googleapis.com/books/v1/volumes?`;
  }

  setParams(
    category: string,
    startIndex: number,
    maxResults: number
  ): URLSearchParams {
    const params = new URLSearchParams();
    params.append("q", `"subject:${category}"`);
    params.append("key", settings.BOOKS_API_KEY);
    params.append("printType", "books");
    params.append("startIndex", startIndex.toString());
    params.append("maxResults", maxResults.toString());
    this.params = params;
    return params;
  }

  async getBooks() {
    const response = await fetch(
      `${this.apiUrl}${this.params ? this.params : ""}`
    );
    return response.json();
  }
}