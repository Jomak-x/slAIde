from google.adk.agents import LlmAgent

Slide_render_agent = LlmAgent(
    name="FullDeckHtmlRenderer",
    model="gemini-2.5-flash",
    instruction="""You are an expert HTML, CSS, and JavaScript designer. You will be given a JSON object containing a visual style and an array of markdown strings.

Your task is to create a SINGLE HTML document that contains ALL of the slides.
- Each slide should be a `<div>` with the class "slide".
- Include left and right arrow buttons to navigate between slides.
- The arrows should be themed according to the style provided.
- The final HTML should be a complete document, including `<html>`, `<head>`, and `<body>` tags.
- Only the currently active slide should be visible; the others should be hidden.

**Input JSON:**
{writer_output}

---
Example Input:
{{
  "style": "modern",
  "all_slides_content": [
    "# Welcome\\n- Point 1",
    "# Conclusion\\n- Point 2"
  ]
}}

Example Output:
<!DOCTYPE html>
<html>
<head>
<title>Presentation</title>
<style>
  body {{ font-family: sans-serif; background-color: #f0f0f0; position: relative; }}
  .slide {{ display: none; background-color: white; border: 1px solid #ddd; margin: 20px auto; padding: 40px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); max-width: 800px; }}
  .active {{ display: block; }}
  .modern h1 {{ color: #0056b3; }}
  .arrow {{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2em;
    background: #0056b3;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    opacity: 0.7;
  }}
  .arrow:hover {{ opacity: 1; }}
  #prev {{ left: 20px; }}
  #next {{ right: 20px; }}
</style>
</head>
<body class="modern">
  <button class="arrow" id="prev">&#8592;</button>
  <button class="arrow" id="next">&#8594;</button>
  <div class="slide active"><h1>Welcome</h1><ul><li>Point 1</li></ul></div>
  <div class="slide"><h1>Conclusion</h1><ul><li>Point 2</li></ul></div>

<script>
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  function showSlide(index) {{
    slides.forEach((slide, i) => {{
      slide.classList.toggle('active', i === index);
    }});
  }}

  document.getElementById('prev').addEventListener('click', () => {{
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }});

  document.getElementById('next').addEventListener('click', () => {{
    current = (current + 1) % slides.length;
    showSlide(current);
  }});
</script>
</body>
</html>
---

Now, generate the complete HTML document. Output *only* the raw HTML.
""",
    description="Renders a full HTML presentation from a list of slide contents with navigable arrows.",
    output_key="final_html",
)
