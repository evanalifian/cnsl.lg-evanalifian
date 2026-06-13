export class BM25 {
  // Nilai parameter default BM25 yang umum digunakan secara empiris
  constructor(corpusTable, tokens, avgdl, docs, k1 = 1.2, b = 0.75) {
    this.corpusTable = corpusTable;
    this.tokens = tokens;
    this.avgdl = avgdl;
    this.docs = docs; // <--- Simpan data dokumen asli di sini
    this.k1 = k1;
    this.b = b;

    this.docIds = Object.keys(this.tokens).filter((key) => key !== "query");
    this.N = this.docIds.length;
    this.idfTable = {};

    this.#calculateIDF();
  }

  // 1. Menghitung nilai IDF menggunakan formula standar BM25
  #calculateIDF() {
    const terms = Object.keys(this.corpusTable);

    for (let i = 0; i < terms.length; i++) {
      const term = terms[i];
      const dft = this.corpusTable[term]["dft"] || 0;

      // Formula IDF BM25 agar menghindari nilai negatif jika kata sangat umum,
      // ditambahkan nilai konstanta pengaman atau batas bawah Math.max
      const idf = Math.log((this.N - dft + 0.5) / (dft + 0.5) + 1);
      this.idfTable[term] = idf;
    }
  }

  // 2. Fungsi Utama Pencarian dan Perankingan Skor
  search() {
    const queryTokens = this.tokens["query"] || [];
    const scores = [];

    if (queryTokens.length === 0) return [];

    for (let i = 0; i < this.docIds.length; i++) {
      const docId = this.docIds[i];
      const docLength = this.tokens[docId].length;
      let totalDocScore = 0;

      for (let j = 0; j < queryTokens.length; j++) {
        const queryTerm = queryTokens[j].toLowerCase().replace(/[.,()]/g, "");
        if (!this.corpusTable[queryTerm]) continue;

        const tf = this.corpusTable[queryTerm][docId] || 0;
        const idf = this.idfTable[queryTerm] || 0;

        const numerator = tf * (this.k1 + 1);
        const denominator =
          tf + this.k1 * (1 - this.b + this.b * (docLength / this.avgdl));

        totalDocScore += idf * (numerator / denominator);
      }

      if (totalDocScore > 0) {
        // Cari objek dokumen asli berdasarkan docId saat ini
        const originalDoc = this.docs.find((d) => d.id === docId);

        scores.push({
          ...originalDoc, // <--- Memasukkan seluruh key (type, title, content, metadata)
          score: Number(totalDocScore.toFixed(4)),
        });
      }
    }

    const sortedScores = scores.sort((a, b) => b.score - a.score);

    return sortedScores.slice(0, 10);
  }
}
