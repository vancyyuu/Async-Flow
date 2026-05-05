
// ======================================================
// LAB: EVENT LOOP ANALYSIS (SYNCHRONOUS + ASYNC)
// ======================================================
//
// This file is structured as a "learning + analysis document"
// to demonstrate understanding of JavaScript execution flow.


// ======================================================
// CRITERION 1: SYNCHRONOUS EXECUTION
// ======================================================
//
// Synchronous code runs line by line in order.
// JavaScript executes this immediately before any async tasks.

console.log("=== SYNC EXECUTION START ===");

console.log("A");
console.log("B");
console.log("C");

// ANALYSIS:
// - These run in order: A → B → C
// - No delays, no queues, direct execution
// - This proves JavaScript is single-threaded for sync code

console.log("=== SYNC EXECUTION END ===\n");


// ======================================================
// CRITERION 2: ASYNCHRONOUS OPERATIONS IDENTIFICATION
// ======================================================
//
// JavaScript async operations used in this lab:
// 1. setTimeout → MACROTASK
// 2. Promise → MICROTASK

console.log("Start (Sync)");

setTimeout(() => {
    console.log("Timeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise (Microtask)");
});

console.log("End (Sync)");

// ANALYSIS:
// - setTimeout is asynchronous because it is delayed and queued
// - Promise is asynchronous but higher priority than setTimeout

console.log("\n");


// ======================================================
// CRITERION 3 & 5: EVENT LOOP + MICROTASK vs MACROTASK
// ======================================================
//
// EVENT LOOP ORDER RULE:
//
// 1. Synchronous code runs first
// 2. Microtasks (Promises, await) run next
// 3. Macrotasks (setTimeout, setInterval) run last

console.log("=== EVENT LOOP DEMO ===");

setTimeout(() => {
    console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask: Promise");
});

console.log("Sync: End of script");

// ANALYSIS:
// Microtasks always execute BEFORE macrotasks.
// Even if setTimeout is 0ms, it still runs later.

console.log("\n");


// ======================================================
// CRITERION 6: DEBUGGING EXECUTION FLOW
// ======================================================
//
// STEP-BY-STEP EXECUTION TRACE:
//
// 1. Sync starts
// 2. setTimeout registered (goes to macrotask queue)
// 3. Promise registered (goes to microtask queue)
// 4. Sync finishes
// 5. Microtasks run
// 6. Macrotasks run

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

// DEBUG TRACE OUTPUT ORDER:
// Step 1: A (sync)
// Step 2: D (sync)
// Step 3: C (microtask)
// Step 4: B (macrotask)

console.log("\n");


// ======================================================
// CRITERION 7: ASYNC/AWAIT VS PROMISES
// ======================================================
//
// async/await is syntactic sugar over Promises.
//
// KEY DIFFERENCE:
// - Promise uses .then()
// - async/await pauses function execution but NOT program

async function test() {

    console.log("1 (inside async)");

    await Promise.resolve();

    console.log("2 (after await)");
}

console.log("3 (before async function)");

test();

console.log("4 (after async function call)");

// EXECUTION FLOW:
// 1. 3 runs (sync)
// 2. test() starts → prints 1
// 3. await pauses function (microtask queue)
// 4. 4 runs (sync continues)
// 5. 2 runs (after microtask resolves)

// FINAL OUTPUT:
// 3 → 1 → 4 → 2

// ANALYSIS:
// - Promises and async/await both use microtask queue
// - async/await improves readability but does not change behavior

console.log("\n");


// ======================================================
// FINAL SUMMARY (FOR GRADING)
// ======================================================
//
// SYNCHRONOUS:
// - Executes immediately in order (no queue)
//
// MICROTASKS:
// - Promise.then, async/await
// - Run AFTER sync code
// - Higher priority than macrotasks
//
// MACROTASKS:
// - setTimeout, setInterval
// - Run AFTER microtasks
//
// EVENT LOOP RULE:
// Sync → Microtask → Macrotask
//
// ======================================================