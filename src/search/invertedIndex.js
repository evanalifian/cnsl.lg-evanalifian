export class InvertedIndex {
  constructor(tokens) {
    this.tokens = {};
    this.corpus = []; // Tempat menyimpan unique terms secara terurut
    this.curpusTable = {}; // Term-Document Matrix (TF & dft)

    this.#insertTokens(tokens);
    this.takeUniqueTerm();
    this.#createCurpustable();

    return this.curpusTable;
  }

  #insertTokens(tokens) {
    const tokenKeys = Object.keys(tokens);
    for (let i = 0; i < tokenKeys.length; i++) {
      // Sesuai kode Python: jika key adalah "query" atau "q", abaikan
      if (tokenKeys[i] !== "query" && tokenKeys[i] !== "q") {
        this.tokens[tokenKeys[i]] = tokens[tokenKeys[i]];
      }
    }
  }

  // Tahap 1: Ambil semua term unik dan urutkan secara alfabetis (sorted)
  takeUniqueTerm() {
    const uniqueSet = new Set();
    const docValues = Object.values(this.tokens);

    for (let i = 0; i < docValues.length; i++) {
      const words = docValues[i];
      for (let j = 0; j < words.length; j++) {
        // Normalisasi teks (lowercase & hapus tanda baca bawaan di ujung kata)
        const cleanWord = words[j].toLowerCase().replace(/[.,()]/g, "");
        if (cleanWord && cleanWord !== "//") {
          uniqueSet.add(cleanWord);
        }
      }
    }

    // Ubah ke array dan urutkan (seperti sorted() di Python)
    this.corpus = Array.from(uniqueSet).sort();
  }

  // Tahap 2: Buat Term-Document Matrix beserta hitungan dft
  #createCurpustable() {
    const docIds = Object.keys(this.tokens);

    for (let i = 0; i < this.corpus.length; i++) {
      const term = this.corpus[i];
      this.curpusTable[term] = {};
      let df = 0;

      for (let j = 0; j < docIds.length; j++) {
        const docId = docIds[j];
        const words = this.tokens[docId];

        // Hitung TF (Term Frequency) di dalam dokumen ini
        let tf = 0;
        for (let k = 0; k < words.length; k++) {
          const cleanWord = words[k].toLowerCase().replace(/[.,()]/g, "");
          if (cleanWord === term) {
            tf++;
          }
        }

        // Catat nilai TF untuk dokumen ini
        this.curpusTable[term][docId] = tf;

        // Jika term muncul di dokumen (TF > 0), naikkan Document Frequency (df)
        if (tf > 0) {
          df++;
        }
      }

      // Tambahkan total Document Frequency di kolom terakhir (dft)
      this.curpusTable[term]["dft"] = df;
    }
  }
}
