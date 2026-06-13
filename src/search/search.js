import { BM25 } from "./bm25";
import { docs } from "./document";
import { InvertedIndex } from "./invertedIndex";
import { TextPreprocessing } from "./textPreprocessing";

export function searchQuery(query) {
  // preprocessing
  const tokens = new TextPreprocessing(query, docs);

  // calculate every doc length and calculate avgdl
  const tokenKeys = Object.keys(tokens);
  let avgdl = 0;
  for (let i = 0; i < tokenKeys.length; i++) {
    avgdl += tokens[tokenKeys[i]].length;
  }
  avgdl /= tokenKeys.length;

  // create inverted index
  const invertedIndex = new InvertedIndex(tokens);

  // initiate BM25
  const searchEngine = new BM25(invertedIndex, tokens, avgdl, docs);
  const rankingResult = searchEngine.search();

  return rankingResult.slice(0, 10);
}
