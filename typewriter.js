const sentence = "hello there from lighthouse labs";

// 1. for (const char of sentence) {
//   console.log(char);
// };

/*2. Use process.stdout.write instead of console.log

Replace console.log with process.stdout.write to avoid automatic newlines after each character:
*/
// for (const char of sentence) {
//   process.stdout.write(char);
// }


/* 3. Use process.stdout.write instead of console.log

Replace console.log with process.stdout.write to avoid automatic newlines after each character:
*/
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 1000); // 1 second delay
// }

/* 4. Delay the display with setTimeout

To make the output appear as if it's being typed, use setTimeout to delay each character's output:
*/
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
};

/**5. Add a newline at the end

After the loop, set another timeout to print a newline character ("\n") once all characters have been printed:
 */
setTimeout(()=> {
  process.stdout.write('\n');
}, delay); // this will execute after all characters have been printed