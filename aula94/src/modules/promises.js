function promise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Sou a promessa");
      resolve();
    }, 2000);
  });
}

export default async function executa() {
  await promise();
  console.log("Terminou");
}
