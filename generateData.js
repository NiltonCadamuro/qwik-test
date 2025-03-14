import fs from "fs";

// Função para gerar uma string aleatória
const randomString = (length) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)],
  ).join("");
};

// Função para gerar uma data aleatória nos últimos 2 anos
const randomDate = () => {
  const start = new Date();
  start.setFullYear(start.getFullYear() - 2);
  return new Date(
    start.getTime() + Math.random() * (Date.now() - start.getTime()),
  ).toISOString();
};

// Função para gerar um ID aleatório
const randomId = () => Math.floor(Math.random() * 10000);

// Função para gerar um array de posts aleatórios
const generatePosts = (num = 10) => {
  return Array.from({ length: num }, () => ({
    id: randomId(),
    title: `${randomId()}`,
    createdAt: randomDate(),
    content: `<p>${randomString(100)}</p>`,
    thumbUrl: `https://picsum.photos/150/80?random=${randomId()}`,
    author: `${randomString(20)}`,
    authorPhoto: `https://picsum.photos/150/150?random=${randomId()}`,
    authorDescription: `${randomString(20)}`,
  }));
};

// Criar banco de dados fake
const db = {
  posts: generatePosts(15), // Gera 15 posts aleatórios
};

// Salvar no arquivo JSON
fs.writeFileSync("db.json", JSON.stringify(db, null, 2));

console.log("📊 Dados aleatórios gerados com sucesso!");
