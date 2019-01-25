const zlib = require('zlib');
const fs = require('fs');

const filename = 'testdata.txt';

async function compressFile1() {
  return new Promise((resolve, reject) => {
    const compress = zlib.createBrotliCompress();
    const input = fs.createReadStream(filename);
    const output = fs.createWriteStream(filename + '.br');

    input.pipe(compress).pipe(output);
    output.on('finish', () => {
      resolve();
    });
    output.on('error', ex => {
      reject(ex);
    });
  });
}

async function uncompressFile1() {
  return new Promise((resolve, reject) => {
    const decompress = zlib.createBrotliDecompress();
    const input = fs.createReadStream(filename + '.br');
    const output = fs.createWriteStream(filename + '.br.txt');

    input.pipe(decompress).pipe(output);
    output.on('finish', () => {
      resolve();
    });
    output.on('error', ex => {
      reject(ex);
    });
  });
}

async function compressFile2() {
  return new Promise((resolve, reject) => {
    const compress = zlib.createGzip();
    const input = fs.createReadStream(filename);
    const output = fs.createWriteStream(filename + '.gzip');

    input.pipe(compress).pipe(output);
    output.on('finish', () => {
      resolve();
    });
    output.on('error', ex => {
      reject(ex);
    });
  });
}

(async () => {
  console.log('start compress');
  await compressFile1();
  console.log('start uncompress');
  await uncompressFile1();
  console.log('start compress gzip');
  await compressFile2();
  console.log('done');
})();

const sleep = ms =>
  require('child_process').execSync(
    `"${process.argv[0]}" -e "setTimeout(function(){},${ms})"`
  );

let i = 0;
// setInterval Will keep the process running
// setInterval(() => {
//   console.log('xxxxxx', i++);
// }, 5000);
setTimeout(() => {}, 5000);
// sleep(5000);
// console.log('aaaa');
// sleep(5000);
// console.log('bbbb');
