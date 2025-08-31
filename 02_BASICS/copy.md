1. **Array in `[]`**

   * Example: `let arr = [10, 20, 30];`
   * Arrays start counting from **0** → `arr[0] = 10`, `arr[1] = 20`, `arr[2] = 30`.

---

2. **JavaScript arrays**

   * Can **grow or shrink** (you can add/remove items anytime).
   * Can hold **different data types** together.
     Example: `let arr = [1, "hello", true];`

---

3. **Shallow Copy**

   * Means the new array/object is just a **surface-level copy**.
   * If it contains objects/arrays inside, they still **point to the same memory**.
   * Example:

     ```js
     let arr1 = [{name: "Sam"}];
     let arr2 = arr1.slice();  // shallow copy
     arr2[0].name = "John";
     console.log(arr1[0].name); // "John" (changed in both!)
     ```

---

4. **Deep Copy**

   * Everything is copied **fully**.
   * No shared memory, so changes in one don’t affect the other.
   * Example (using `structuredClone`):

     ```js
     let arr1 = [{name: "Sam"}];
     let arr2 = structuredClone(arr1); // deep copy
     arr2[0].name = "John";
     console.log(arr1[0].name); // "Sam" (unchanged)
     ```

---

👉 In short:

* **Shallow copy** = Copy only the outer shell, inner things still linked.
* **Deep copy** = Make a totally independent duplicate.

