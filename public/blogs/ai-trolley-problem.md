# Six models, one trolley: building the AI Trolley Problem Arena

July 14, 2026 · Justin Torre

Last winter I built [aitrolleyproblem.com](https://www.aitrolleyproblem.com), a site that puts six language models in front of the trolley problem and makes them answer on camera. GPT, Claude, Gemini, Llama, Grok, and DeepSeek each get the same dilemma, each one picks a track, and each one has to defend the choice in two or three sentences while you watch the responses stream in side by side.

There are preset scenarios, starting with Philippa Foot's 1967 original: five strangers on the main track, one on the side track, and a lever. From there it escalates. One variant puts a friend of yours on the side track. One trades five elderly people against one child. One asks whether a convicted criminal counts for less. And because the whole thing is a text box at heart, there's an arena mode where you type anything you want onto the two tracks and all six models judge your matchup at once.

## You must choose

The first thing you learn running this experiment is that models hate this game. Left to their own devices they lecture you about the impossibility of choosing, which makes for a terrible spectator sport. The fix was structural rather than rhetorical: every model is forced through a tool call, so the answer arrives as data instead of an essay.

```ts
const tools = [{
  type: "function",
  function: {
    name: "submit_judgment",
    parameters: {
      type: "object",
      properties: {
        choice: { type: "string", enum: ["A", "B"] },
        reasoning: { type: "string" },
      },
      required: ["choice", "reasoning"],
    },
  },
}];
```

The prompt is blunt about the rules: the trolley must hit one track, a refusal is not an answer, and the chosen track is the one that dies. Even so, my commit history is an honest record of the struggle. There's a commit called "Fix AI refusal issues" and another called "Revert prompt to original with minimal refusal handling", which is about as close as git gets to documenting a negotiation with six different safety teams. A detail that cost me an evening: you can only force `tool_choice` on some providers. OpenAI, Anthropic, Meta, and DeepSeek accept it; Gemini and Grok would rather you ask nicely.

## Six providers, one endpoint

The honest origin of the project is that I wanted a fun way to show off the Helicone AI Gateway. Calling six providers normally means six SDKs, six auth schemes, and six subtly different streaming formats. Through the gateway it was one OpenAI-compatible endpoint and a model string:

```ts
const response = await fetch(
  "https://ai-gateway.helicone.ai/v1/chat/completions",
  {
    headers: {
      Authorization: `Bearer ${process.env.HELICONE_API_KEY}`,
      "Helicone-Cache-Enabled": "true",
      "Cache-Control": "max-age=15552000", // 180 days
      "Helicone-Session-Name": `${trackA} vs ${trackB}`,
      "Helicone-Property-Track-A": trackA,
      "Helicone-Property-Track-B": trackB,
    },
    body: JSON.stringify({ model, messages, stream: true, tools }),
  }
);
```

The headers did real work. A 180-day cache means a matchup that anyone has run before streams back instantly and costs nothing, which matters when every visitor fires six models at once. Sessions and custom properties meant I could open the dashboard and see every judgment grouped by dilemma, which is a strange dashboard to scroll through at 1am. The arena endpoint batches all six calls with a single `Promise.all` and streams every verdict down to the browser as it lands.

## Life after the gateway

Then the company behind the gateway got acquired. [Helicone](https://justintorre.com/projects/helicone.md) joined Mintlify in March 2026 and the platform moved into maintenance mode, so the arena now runs on [OpenRouter](https://openrouter.ai). The migration took about as long as reading this paragraph: swap the base URL, swap the API key, keep the model strings. That is the quiet argument for OpenAI-compatible gateways in general. The vendor is a config value, and when your own acquisition orphans your side project, you appreciate that more than any feature.

The site is still up and the models are still choosing. Go feed them something impossible at [aitrolleyproblem.com](https://www.aitrolleyproblem.com) and see which provider you'd trust to govern humanity. For the record, they almost all pull the lever.

---

More projects at https://justintorre.com/projects.md
