const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 23) {
  console.error(
     `\n🔥 ERROR FATAL 🔥\n` +
    `   Node.js versi anda: ${process.versions.node}\n` +
    `   Minimum yang diperlukan: Node.js 23+.\n` +
    `   Tanpa versi ini, projek ini TIDAK AKAN BERJALAN!\n` +
    `   Sila kemaskini Node.js sekarang juga!\n` +
    `   by @Milzstorw`
  );
  process.exit(1);
}
