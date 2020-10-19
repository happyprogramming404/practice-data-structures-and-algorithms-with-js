## Notes
- a linear data structure
- LIFO (last in, first out)
- Additionally, a peek operation may give access to the top without modifying the stack.
- implement depth-first search
- A stack may be implemented to have a bounded capacity. If the stack is full and does not contain enough space to accept an entity to be pushed, the stack is then considered to be in an overflow state.

## References
- [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
- [YouTube](https://www.youtube.com/watch?v=wjI1WNcIntg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=3&)

## LeetCode
<details>
<summary>1021. Remove Outermost Parentheses</summary>

#### [1021. Remove Outermost Parentheses](https://leetcode.com/problems/remove-outermost-parentheses/)
##### solution 1
```javascript
const removeOuterParentheses = S => {
  const stack = []
  let result = ''

  for (let c of S) {
    if (c === '(') {
      if (stack.length) result += c
      stack.push(c)
    } else if(c === ')') {
      stack.pop()
      if (stack.length) result += c
    }
  }

  return result
}
```
</details>

<details>
<summary>1047. Remove Outermost Parentheses</summary>

#### [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)
##### solution 1
```javascript
const removeDuplicates = S => {
  const stack = []

  for (let c of S) {
    if (stack.length && c === stack[stack.length - 1]) stack.pop()
    else stack.push(c)
  }

  return stack.join(',')
}
``` 
</details>

<details>
<summary>496. Next Greater Element I</summary>

#### [496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)
##### solution 1
```javascript
const nextGreaterElement = (nums1, nums2) => {
  const result = [], stack = [], map = {}

  for (let b of nums2) {
    while(stack.length && b > stack[stack.length - 1]) {
      map[stack.length - 1] = b
    }

    stack.push(b)
  }

  nums1.forEach((item, index) => {
    result[index] = typeof map[item] === 'undefined' ? -1 : map[item]
  })

  return result
}
```
</details>

<details>
<summary>1441. Build an Array With Stack Operations</summary>

#### [1441. Build an Array With Stack Operations](https://leetcode.com/problems/build-an-array-with-stack-operations/)
##### solution 1
```javascript
const buildArray = (target, n) => {
  const result = []
  let pos = 0

  for (let i = 1; i <= n; i++) {
    if (target[pos] === i) {
      result.push('Push')
      pos++
      if (pos >= target.length) break
    } else result.push('Push', 'Pop')
  }

  return result
}
```
</details>

<details>
<summary>20. Valid Parentheses</summary>

#### [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
##### solution 1
```javascript
const isValid = s => {
  const stack = []

  for (c of s) {
    if (c === '}') {
      if (stack.pop() !== '{') return false
    } else if (c === ']') {
      if (stack.pop() !== '[') return false
    } else if (c === ')') {
      if (stack.pop() !== '(') return false
    } else stack.push(c)
  }

  return stack.length === 0
}
```
</details>