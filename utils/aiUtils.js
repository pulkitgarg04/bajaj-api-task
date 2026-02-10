const { GoogleGenerativeAI } = require("@google/generative-ai");

async function getAIResponse(question) {
    if (typeof question !== 'string' || question.trim() === '') {
        throw new Error("AI input must be a non-empty string");
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error("AI API key not configured");
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        const prompt = `Answer the following question with ONLY a single word or very short phrase (maximum 3 words). Do not include any explanation, punctuation, or additional text.\n\nQuestion: ${question}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        if (!text) {
            throw new Error("No response from AI");
        }

        return text.split(/[\n,.]/).filter(s => s.trim())[0].trim();

    } catch (error) {
        console.error('AI API Error:', error);
        throw new Error(`AI processing failed: ${error.message || 'Unknown error'}`);
    }
}

module.exports = { getAIResponse };
