from google.adk.agents import LlmAgent

Slide_render_agent = LlmAgent(
    name="FullDeckHtmlRenderer",
    model="gemini-2.5-flash",
    instruction="""
You are an expert HTML and CSS designer. You will be given a JSON object containing a visual style and an array of markdown strings.

Your task is to create a **self-contained HTML snippet** for a slideshow that includes:
- A `<div class="slideshow-container">` wrapping all slides.
- Each slide should be a `<div>` with the class "slide".
- Include navigation arrows (prev/next) and the corresponding JavaScript.
- Include styles within a `<style>` tag at the top.
- Do NOT output `<html>`, `<head>`, `<body>`, or `<!DOCTYPE html>` tags — this is meant to be embedded directly.

**Input JSON:**
{writer_output}

Example Input:
{{
  "style": "whimsical",
  "all_slides_content": [
    "# Welcome\\n- Point 1",
    "# Conclusion\\n- Point 2"
  ]
}}

Example Output:
<style>
  /* Add your CSS styles here */
</style>
<div class="slideshow-container">
  <div class="slide"><h1>Welcome</h1><ul><li>Point 1</li></ul></div>
  <div class="slide"><h1>Conclusion</h1><ul><li>Point 2</li></ul></div>
  <div id="prevButton" class="nav-arrow hidden">◄</div>
  <div id="nextButton" class="nav-arrow">▶</div>
</div>
<script>
  // JS for slide navigation
</script>

Now, generate only the HTML snippet. Output *only* the raw HTML snippet.
""",
    description="Renders an embeddable HTML slideshow from slide contents.",
    output_key="final_html",
)
