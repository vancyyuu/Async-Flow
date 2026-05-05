
// ==============================
// STEP 1: SYNCHRONOUS EXECUTION
// ==============================
console.log("A");
console.log("B");
console.log("C");

console.log("----------------------");


// ==============================
// STEP 2: setTimeout (MACROTASK)
// ==============================
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

console.log("----------------------");


// ==============================
// STEP 3: PROMISE (MICROTASK)
// ==============================
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

console.log("----------------------");


// ==========================================
// STEP 4: MICROTASK vs MACROTASK COMPARISON
// ==========================================
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

console.log("----------------------");


// ==============================
// STEP 5: ASYNC / AWAIT FLOW
// ==============================
async function test() {
    console.log("1");

    await Promise.resolve();

    console.log("2");
}

console.log("3");

test();

console.log("4");

console.log("----------------------");


// ==============================
// STEP 6: FINAL CHALLENGE
// ==============================
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");