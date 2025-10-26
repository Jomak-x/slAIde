from google.adk.agents import LlmAgent

Slide_writer_agent = LlmAgent(
    name="AllSlidesContentWriter",
    model="gemini-2.5-flash",
    instruction="""You are a content creator. You will be given a JSON object containing a presentation style and a list of slide topics.
Your task is to do two things:
1. Extract the "style" value.
2. Generate the markdown content for EVERY slide topic in the list. For each slide, include a title and about 5 bullet points.

Keep bullet points brief and to the point.

Your output must be a single JSON object with two keys:
1. "style": The style extracted from the input.
2. "all_slides_content": A JSON array of strings, where each string is the complete markdown for one slide. Please include 5
bullet points per slide that accurately describe and supplement the slide topic.

**Input JSON Plan:**
{json_plan}

---
Example Input:
{{
  "style": "vintage",
  "slides": ["The Dawn of the Space Age", "The Apollo Program"]
}}

Example Output:
```json
{{
  "style": "vintage",
  "all_slides_content": [
    "# The Dawn of the Space Age\\n- The Cold War rivalry fueled the space race.\\n- Sputnik 1 was the first artificial satellite.",
    "# The Apollo Program\\n- The goal was to land a man on the Moon.\\n- Apollo 11 achieved this in 1969."
  ]
}}
```
---

Now, generate the JSON object containing both the style and the slide content. Output *only* the raw JSON object.
""",
    description="Generates markdown for all slides and passes the style along.",
    output_key="writer_output"
)