## Notes

- an associative array abstract data type
- a structure that can map keys to values
- A Map uses an array internally. It translates the key into an array’s index using a hash function. That’s why it is also called "Hash Map" or "Hash Table".
- Hash Map: Array + Hash Function

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
- [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [dsa.js-data-structures-algorithms-javascript](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/book/content/part02/hash-map.asc)

## LeetCode
<details>
<summary>1207. Unique Number of Occurrences</summary>

#### [1207. Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/)
##### solution 1
```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = arr => {
  const listMap = new Map()

  for (let i = 0; i < arr.length; i++>) {
    if (listMap.has(arr[i])) listMap.set(arr[i], listMap.get(arr[i]) + 1)
    else listMap.set(arr[i], 1)
  }

  const tmpMap = new Map()
  for (const [key, val] of listMap) {
    if (tmpMap.has(value)) return false
    else tmpMap.set(value, 1)
  }

  return true
}
```
```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = arr => {
  const occur = new Map()

  for (const x of arr) {
    if (occur.has(x)) occur.set(x, occur.get(x) + 1)
    else occur.set(x, 1)
  }

  const times = new Set()

  for (const [key, val] of occur)
    times.add(value)
  
  return times.size === occur.size
}
```
</details>

#### other
- 500
- **811**-
- **1160**-