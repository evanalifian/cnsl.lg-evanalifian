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
      return (
        text
          .toLowerCase()
          // [^a-z0-9]+ artinya: ambil semua karakter yang BUKAN huruf a-z
          // dan BUKAN angka 0-9 sebagai pemisah (separator).
          .split(/[^a-z0-9]+/)
          .filter(Boolean)
      ); // Membuang hasil kosong jika ada simbol di awal/akhir
    }

    this.tokens["query"] = work(this.query);
    for (let i = 0; i < this.docs.length; i++) {
      // Gabungkan content dan type menjadi satu string sebelum di-tokenisasi
      const combinedText = `${this.docs[i].content} ${this.docs[i].type}`;
      this.tokens[this.docs[i].id] = work(combinedText);
    }
  }
}
