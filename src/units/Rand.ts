export function Rand(): number {
  return crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296
}
/** It will return a random item in array */
export function Sample(arr) {
  return arr[Math.floor(arr.length * Rand())]
}
