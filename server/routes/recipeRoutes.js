// // server/routes/recipeRoutes.js
// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// router.post('/generate', async (req, res) => {
//   const { ingredients } = req.body;

//   if (!ingredients) {
//     return res.status(400).json({ error: 'Ingredients are required.' });
//   }

//   try {
//     const prompt = `Suggest a detailed recipe using these ingredients: ${ingredients}. Include title, cooking time, servings, and full instructions.`;

//     const response = await axios.post(
//       'https://api.deepseek.com/v1/chat/completions',
//       {
//         model: "deepseek-chat", // or deepseek-coder if available
//         messages: [
//           { role: "system", content: "You are a professional chef." },
//           { role: "user", content: prompt }
//         ]
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
//         }
//       }
//     );

//     const result = response.data.choices[0].message.content;
//     res.json({ recipe: result });
//   } catch (error) {
//     console.error(error.response?.data || error.message);
//     res.status(500).json({ error: 'Failed to generate recipe' });
//   }
// });

// module.exports = router;
