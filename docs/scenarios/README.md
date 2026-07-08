# Talk Scenarios

This directory contains scenario runbooks for Gastown presentation flows.

Each scenario should:

- map to a talk definition in `talks/*.json`;
- reference the named prompt selected by that talk;
- separate the public narrative from operational setup details as much as possible;

## Scenarios

- [DiliTrust TechDay](dilitrust-techday.md)
- [Dev With AI Live #4](dev-with-ai-live-4.md)
- [SACEM - Matinale DSI](sacem-matinale-dsi.md)

## Prompt Convention

Talk prompts live in `public/prompts` and follow this pattern:

```text
gastown-demo-prompt.<prompt>.<locale>.txt
```

The prompt name comes from the talk JSON `prompt` field.
