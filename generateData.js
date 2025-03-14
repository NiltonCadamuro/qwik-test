import fs from "fs";

const randomString = (length) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)],
  ).join("");
};

const randomDate = () => {
  const start = new Date();
  start.setFullYear(start.getFullYear() - 2);
  return new Date(
    start.getTime() + Math.random() * (Date.now() - start.getTime()),
  ).toISOString();
};

const randomId = () => Math.floor(Math.random() * 10000);

const generatePosts = (num = 10) => {
  return Array.from({ length: num }, () => ({
    id: randomId(),
    title: `${randomString(20)}`,
    createdAt: randomDate(),
    content: `<img src='https://fakeimg.pl/1920x1080' alt=''/><p>${randomString(500)}</p><p>${randomString(300)}</p>`,
    thumbUrl: `https://fakeimg.pl/150x80/?text=${randomString(10)}`,
    author: `${randomString(20)}`,
    authorPhoto: `https://fakeimg.pl/150/?text=${randomString(5)}`,
    authorDescription: `${randomString(20)}`,
  }));
};

const db = {
  posts: generatePosts(100),
};

fs.writeFileSync("db.json", JSON.stringify(db, null, 2));

console.log("📊 Dados aleatórios gerados com sucesso!");
