export class TextPreprocessing {
  constructor(query, docs) {
    this.query = query;
    this.docs = docs;
    this.tokens = {};
    this.#tokenization();
    return this.tokens;
  }

  #tokenization() {
    function work(text) {
      return text
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter(Boolean);
    }

    this.tokens["query"] = work(this.query);
    for (let i = 0; i < this.docs.length; i++) {
      const combinedText = `${this.docs[i].content} ${this.docs[i].type} ${this.docs[i].pageName || ""}`;
      this.tokens[this.docs[i].id] = work(combinedText);
    }
  }
}
