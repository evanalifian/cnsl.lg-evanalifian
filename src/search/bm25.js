export class BM25 {
  constructor(corpusTable, tokens, avgdl, docs, k1 = 1.2, b = 0.75) {
    this.corpusTable = corpusTable;
    this.tokens = tokens;
    this.avgdl = avgdl;
    this.docs = docs;
    this.k1 = k1;
    this.b = b;
    this.docIds = Object.keys(this.tokens).filter(
      (k) => k !== "query" && k !== "type",
    );
    this.N = this.docIds.length;
    this.idfTable = {};
    this.#calculateIDF();
  }

  #calculateIDF() {
    for (const term in this.corpusTable) {
      const dft = this.corpusTable[term]["dft"] || 0;
      this.idfTable[term] = Math.log((this.N - dft + 0.5) / (dft + 0.5) + 1);
    }
  }

  search() {
    const queryTokens = this.tokens["query"] || [];
    const scores = [];

    if (queryTokens.length === 0) return [];

    for (const docId of this.docIds) {
      const docLength = this.tokens[docId].length;
      let totalDocScore = 0;

      for (const queryTerm of queryTokens) {
        const regexPattern = new RegExp(`^${queryTerm}`, "i");

        const matchingTerms = Object.keys(this.corpusTable).filter((term) =>
          regexPattern.test(term),
        );

        if (matchingTerms.length === 0) continue;

        for (const matchedTerm of matchingTerms) {
          const tf = this.corpusTable[matchedTerm][docId] || 0;
          const idf = this.idfTable[matchedTerm] || 0;

          const numerator = tf * (this.k1 + 1);
          const denominator =
            tf + this.k1 * (1 - this.b + this.b * (docLength / this.avgdl));

          totalDocScore += idf * (numerator / denominator);
        }
      }

      if (totalDocScore > 0) {
        const originalDoc = this.docs.find(
          (d) => String(d.id) === String(docId),
        );
        if (originalDoc) {
          scores.push({
            ...originalDoc,
            score: Number(totalDocScore.toFixed(4)),
          });
        }
      }
    }
    return scores.sort((a, b) => b.score - a.score).slice(0, 10);
  }
}
