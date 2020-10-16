## Notes
- a First-In-First-Out (FIFO) data structure
- a linear data structure
- performs the function of a buffer
- implementation of breadth-first search

## References
- [Wikipedia](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))
- [YouTube](https://www.youtube.com/watch?v=wjI1WNcIntg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=3&)

## LeetCode
<details>
<summary>933. Number of Recent Calls</summary>

#### [933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/)
##### solution 1
```javascript
var RecentCounter = function() {
  this.queue = []   
}

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.queue.push(t)
  
  while(this.queue[0] >= t - 3000) {
    this.queue.shift()
  }

  return this.queue.length
}

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```
</details>