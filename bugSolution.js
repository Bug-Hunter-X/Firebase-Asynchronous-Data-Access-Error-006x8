Here's how to fix the asynchronous access problem:

```javascript
const docRef = doc(db, "collection", "docId");
getDoc(docRef).then((docSnap) => {
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data().someField);
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.error("Error getting document:", error);
});
```
This improved code uses a `.then()` block to ensure that `docSnap.data().someField` is accessed only after the data has been successfully retrieved. The `.catch()` block handles potential errors during the data retrieval process.  Always check `docSnap.exists()` to handle the case where the document doesn't exist.