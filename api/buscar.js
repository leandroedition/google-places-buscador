export default async function handler(req, res) {
  const { termo } = req.query;

  const API_KEY = "AIzaSyC3HGTImsmFbVbUKzyWYbpyI6990uiYYbQ";
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(termo)}&key=${API_KEY}`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    res.status(200).json(dados);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar dados", detalhes: err.message });
  }
}
