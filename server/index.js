require('dotenv').config(); // always top
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');


console.log("ENV KEY:", process.env.OPENROUTER_API_KEY);  // ✅ DEBUG LINE HERE
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post('/api/recipes/generate', async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || ingredients.trim() === '') {
    return res.status(400).json({ error: "Please enter some ingredients." });
  }

  const prompt = `
You are a professional chef. Based on these ingredients: ${ingredients},
write a recipe with:
- Title
- Ingredients
- Step-by-step Instructions
- Serving size
Respond in plain text format.
`;

  try {
    const recipeResponse = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "Referer": "http://localhost:3000", // ✅ spelling matters here
        },

      }
    );

    const reply = recipeResponse.data.choices?.[0]?.message?.content;

    if (!reply) {
      return res.status(500).json({ error: "No response from model." });
    }

    const [firstLine, ...rest] = reply.trim().split("\n");
    const title = firstLine.replace(/^#+\s*/, '').trim();
    const html = rest.join("\n").replace(/\n/g, "<br />");

    res.json({ title, html });
  } catch (err) {
    console.error("OpenRouter Error:", err.response?.data || err.message);
    return res.status(500).json({
      error: err.response?.data?.error?.message || 'Failed to generate recipe.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
