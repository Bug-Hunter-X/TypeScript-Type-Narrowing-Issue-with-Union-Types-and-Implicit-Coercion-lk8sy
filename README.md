# TypeScript Type Narrowing Issue

This repository demonstrates an uncommon error in TypeScript related to type narrowing with union types.  The issue arises when a function might receive unexpected types due to implicit type coercion or function overloading, and the type narrowing mechanism fails to correctly identify the type at runtime. 

The `bug.ts` file contains the buggy code, while `bugSolution.ts` demonstrates a possible solution. This problem highlights a subtle edge case where TypeScript's type system, despite its strengths, might not catch all runtime type errors. 