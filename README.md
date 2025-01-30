# Firebase Asynchronous Data Access Error

This repository demonstrates a common error when working with Firebase's asynchronous data access methods. The error occurs when attempting to access data from a document snapshot before the data has fully loaded. This example shows the error and provides a solution using `.then()` to handle the asynchronous operation.

## Error
Attempting to access data from a Firebase document snapshot before it is fully loaded will throw an error.  This is typically an `undefined` error, or a `TypeError` if you attempt to access a property of `undefined`.

## Solution
The solution is to properly handle the asynchronous nature of Firebase operations. Using Promises ensures that you wait for the data to load before trying to access it.  The `.then()` method allows you to execute code once the promise has been fulfilled (data is available).