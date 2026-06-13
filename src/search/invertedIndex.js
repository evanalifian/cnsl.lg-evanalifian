export class InvertedIndex {
  constructor(tokens) {
    this.tokens = {};
    this.corpus = [];
    this.curpusTable = {};

    this.#insertTokens(tokens);
    this.takeUniqueTerm();
    this.#createCurpustable();

    return this.curpusTable;
  }

  #insertTokens(tokens) {
    const tokenKeys = Object.keys(tokens);
    for (let i = 0; i < tokenKeys.length; i++) {
      if (!["query", "type"].includes(tokenKeys[i])) {
        this.tokens[tokenKeys[i]] = tokens[tokenKeys[i]];
      }
    }
  }

  takeUniqueTerm() {
    const uniqueSet = new Set();
    const docValues = Object.values(this.tokens);
    for (const words of docValues) {
      for (const word of words) {
        if (word) uniqueSet.add(word);
      }
    }
    this.corpus = Array.from(uniqueSet).sort();
  }

  #createCurpustable() {
    const docIds = Object.keys(this.tokens);
    for (const term of this.corpus) {
      this.curpusTable[term] = {};
      let df = 0;
      for (const docId of docIds) {
        const words = this.tokens[docId];
        const tf = words.filter((w) => w === term).length;
        this.curpusTable[term][docId] = tf;
        if (tf > 0) df++;
      }
      this.curpusTable[term]["dft"] = df;
    }
  }
}
