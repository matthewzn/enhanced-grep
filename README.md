# ai-workshop-grep.js

## Command Description

My enhanced-grep command recreates the Unix `grep` command in Node.js. It searches a file and prints every line that contains a given word, with the line number. To run it, I type `node grep.js error sample.log` in the terminal. Matching is case-insensitive, so `error`, `ERROR`, and `Error` all match. If I forget to enter a pattern or a file name, the program shows a usage message.

## AI-Assisted Programming

I asked AI to explain how `grep` works and how to build it in Node.js. AI helped me understand how to read a file and check each line for a match. It also helped me figure out why my first version found nothing when I searched for `error` — the comparison was case-sensitive, so I added `toLowerCase()`. I wrote and tested the code myself and added a check for missing arguments.
