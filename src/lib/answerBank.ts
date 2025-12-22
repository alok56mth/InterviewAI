// Answer bank for frontend questions
export const ANSWER_BANK: Record<string, string> = {
  // React Answers
  "How do you optimize a React application for better performance?": `
**Key React Performance Optimization Techniques:**

1. **Use React.memo()** - Prevents unnecessary re-renders of functional components
2. **useMemo() and useCallback()** - Memoize expensive calculations and functions
3. **Code Splitting** - Use React.lazy() and Suspense for dynamic imports
4. **Virtual DOM Optimization** - Use proper keys in lists
5. **State Management** - Keep state as local as possible, avoid unnecessary global state
6. **Bundle Optimization** - Tree shaking, minification, and compression
7. **Image Optimization** - Lazy loading, proper formats (WebP), responsive images
8. **Avoid Inline Functions** - Define functions outside render to prevent re-creation
9. **Use Production Build** - Always use optimized production builds
10. **Profiling** - Use React DevTools Profiler to identify bottlenecks`,

  "What is the difference between state and props in React?": `
**State vs Props:**

**State:**
- Internal data managed by component
- Mutable (can be changed)
- Triggers re-render when updated
- Private to component
- Example: \`const [count, setCount] = useState(0)\`

**Props:**
- Data passed from parent component
- Immutable (read-only)
- Received as function parameters
- Public interface of component
- Example: \`function Button({ title, onClick }) { ... }\``,

  "What is JSX in React?": `
**JSX (JavaScript XML):**
- Syntax extension for JavaScript
- Allows writing HTML-like code in JavaScript
- Gets transpiled to React.createElement() calls
- Makes component code more readable
- Example: \`const element = <h1>Hello World</h1>\`
- Must return single parent element or Fragment`,

  "Explain how React hooks work and when you would use useState vs useEffect.": `
**React Hooks - useState vs useEffect:**

**React Hooks:**
- Functions that let you use state and lifecycle in functional components
- Must be called at top level, not inside loops or conditions
- Start with 'use' prefix
- Enable state and side effects in functional components

**useState:**
- Manages component state
- Returns [value, setter] array
- Example: \`const [count, setCount] = useState(0)\`
- Triggers re-render when state changes
- Use for: form inputs, toggles, counters, any component data

**useEffect:**
- Handles side effects (API calls, subscriptions, DOM updates)
- Runs after render by default
- Example: \`useEffect(() => { /* side effect */ }, [dependencies])\`
- Can return cleanup function
- Use for: data fetching, event listeners, timers, cleanup

**When to use:**
- **useState**: When you need to store and update component data that affects rendering
- **useEffect**: When you need to perform side effects or respond to state/prop changes

**Example:**
\`\`\`javascript
function Counter() {
  const [count, setCount] = useState(0); // useState for state
  
  useEffect(() => { // useEffect for side effects
    document.title = \`Count: \${count}\`;
  }, [count]); // dependency array
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\``,

  // JavaScript Answers
  "What is the difference between var, let, and const?": `
**var vs let vs const:**

**var:**
- Function scoped
- Hoisted and initialized with undefined
- Can be redeclared
- Example: \`var x = 1; var x = 2; // OK\`

**let:**
- Block scoped
- Hoisted but not initialized (TDZ)
- Cannot be redeclared in same scope
- Example: \`let y = 1; y = 2; // OK\`

**const:**
- Block scoped
- Must be initialized at declaration
- Cannot be reassigned
- Example: \`const z = 1; z = 2; // Error\``,

  "What are closures in JavaScript?": `
**Closures:**
- Function that has access to outer function's variables
- Inner function remembers outer function's scope
- Created every time a function is created
- Used for data privacy and module patterns

**Example:**
\`\`\`javascript
function outer(x) {
  return function inner(y) {
    return x + y; // inner has access to x
  };
}
const add5 = outer(5);
console.log(add5(3)); // 8
\`\`\``,

  // CSS Answers
  "What is the CSS box model?": `
**CSS Box Model:**
- Every element is a rectangular box
- Consists of 4 parts:
  1. **Content** - actual content (text, images)
  2. **Padding** - space between content and border
  3. **Border** - surrounds padding and content
  4. **Margin** - space outside border

**Box-sizing:**
- \`content-box\` (default) - width/height applies to content only
- \`border-box\` - width/height includes padding and border`,

  "What is Flexbox and how does it work?": `
**Flexbox (Flexible Box Layout):**
- One-dimensional layout method
- Distributes space along main axis
- Perfect for component layouts

**Key Properties:**
- \`display: flex\` - creates flex container
- \`flex-direction\` - row, column, row-reverse, column-reverse
- \`justify-content\` - alignment along main axis
- \`align-items\` - alignment along cross axis
- \`flex-wrap\` - allows items to wrap
- \`flex-grow/shrink/basis\` - controls item sizing`,

  // HTML Answers
  "What is HTML and what does it stand for?": `
**HTML (HyperText Markup Language):**
- Standard markup language for web pages
- Uses tags to structure content
- Describes the structure and content of web pages
- Works with CSS (styling) and JavaScript (behavior)
- Current version: HTML5
- Example: \`<h1>Title</h1><p>Paragraph</p>\``,

  "What are semantic HTML elements? Give examples.": `
**Semantic HTML Elements:**
- Elements with meaningful names
- Describe their content/purpose
- Improve accessibility and SEO
- Make code more readable

**Examples:**
- \`<header>\` - page/section header
- \`<nav>\` - navigation links
- \`<main>\` - main content
- \`<article>\` - standalone content
- \`<section>\` - thematic grouping
- \`<aside>\` - sidebar content
- \`<footer>\` - page/section footer`,

  // Database/System Design Answers
  "How do you implement schema design patterns?": `
**Schema Design Patterns:**

**1. Normalization Patterns:**
- **1NF:** Atomic values, no repeating groups
- **2NF:** Remove partial dependencies
- **3NF:** Remove transitive dependencies
- **BCNF:** Every determinant is a candidate key

**2. Denormalization Patterns:**
- **Read Optimization:** Duplicate data for faster queries
- **Materialized Views:** Pre-computed aggregations
- **Flat Tables:** Reduce joins for performance

**3. NoSQL Patterns:**
- **Document Store:** Embed related data (MongoDB)
- **Key-Value:** Simple lookups (Redis)
- **Column Family:** Wide rows (Cassandra)
- **Graph:** Relationships (Neo4j)

**4. Common Design Patterns:**
- **Single Table Inheritance:** Store different types in one table
- **Polymorphic Associations:** Generic foreign keys
- **Audit Trail:** Track data changes over time
- **Soft Delete:** Mark as deleted instead of removing

**Best Practices:**
- Start with normalized design
- Denormalize based on query patterns
- Consider data consistency requirements
- Plan for scalability and performance`
};

export async function getCorrectAnswer(question: string): Promise<string> {
  // First check if answer exists in local database
  if (ANSWER_BANK[question]) {
    return ANSWER_BANK[question];
  }
  
  // Generate a basic answer structure for common question patterns
  const generateBasicAnswer = (q: string): string => {
    const lowerQ = q.toLowerCase();
    
    if (lowerQ.includes('react') && lowerQ.includes('performance')) {
      return `**React Performance Optimization:**\n\n1. **React.memo()** - Prevent unnecessary re-renders\n2. **useMemo() & useCallback()** - Memoize expensive operations\n3. **Code Splitting** - Use React.lazy() and Suspense\n4. **Proper Keys** - Use stable, unique keys in lists\n5. **State Management** - Keep state local when possible\n6. **Bundle Optimization** - Tree shaking and minification\n7. **Image Optimization** - Lazy loading and proper formats`;
    }
    
    if (lowerQ.includes('state') && lowerQ.includes('props')) {
      return `**State vs Props:**\n\n**State:**\n- Internal component data\n- Mutable (can change)\n- Triggers re-renders\n- Private to component\n\n**Props:**\n- Data from parent\n- Immutable (read-only)\n- Passed down from parent\n- Public interface`;
    }
    
    if (lowerQ.includes('var') && lowerQ.includes('let') && lowerQ.includes('const')) {
      return `**var vs let vs const:**\n\n**var:** Function scoped, hoisted, can redeclare\n**let:** Block scoped, temporal dead zone, no redeclaration\n**const:** Block scoped, must initialize, cannot reassign`;
    }
    
    if (lowerQ.includes('hooks') && (lowerQ.includes('usestate') || lowerQ.includes('useeffect'))) {
      return `**React Hooks - useState vs useEffect:**\n\n**React Hooks:**\n- Functions that let you use state and lifecycle in functional components\n- Must be called at top level, not inside loops or conditions\n- Start with 'use' prefix\n\n**useState:**\n- Manages component state\n- Returns [value, setter] array\n- Example: \`const [count, setCount] = useState(0)\`\n- Use for: form inputs, toggles, counters\n\n**useEffect:**\n- Handles side effects (API calls, subscriptions, DOM updates)\n- Runs after render\n- Example: \`useEffect(() => { /* side effect */ }, [dependencies])\`\n- Use for: data fetching, event listeners, cleanup\n\n**When to use:**\n- useState: When you need to store and update component data\n- useEffect: When you need to perform side effects or respond to changes`;
    }
    
    if (lowerQ.includes('jsx')) {
      return `**JSX (JavaScript XML):**\n\n- Syntax extension for JavaScript\n- Allows HTML-like code in JavaScript\n- Gets transpiled to React.createElement()\n- Makes components more readable\n- Must return single parent or Fragment\n- Example: \`const element = <h1>Hello World</h1>\``;
    }
    
    if (lowerQ.includes('closure')) {
      return `**JavaScript Closures:**\n\n- Function that has access to outer function's variables\n- Inner function remembers outer scope\n- Created when function is defined\n- Used for data privacy and module patterns\n\n**Example:**\n\`\`\`javascript\nfunction outer(x) {\n  return function inner(y) {\n    return x + y; // access to x\n  };\n}\nconst add5 = outer(5);\nconsole.log(add5(3)); // 8\n\`\`\``;
    }
    
    return `**Answer for: ${q}**\n\nThis is a common interview question. Key points to cover:\n\n1. Define the concept clearly\n2. Explain the main features/characteristics\n3. Provide practical examples\n4. Mention best practices\n5. Discuss real-world usage scenarios`;
  };
  
  try {
    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    console.log('Gemini API Key available:', !!GEMINI_API_KEY);
    console.log('Fetching answer for question:', question);
    
    // Try Gemini first for better answers
    if (GEMINI_API_KEY) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `Provide a comprehensive, detailed answer for this interview question: "${question}"

Format the answer with:
- Clear explanations with proper headings
- Code examples where applicable (use proper syntax highlighting)
- Best practices and real-world usage
- Bullet points for readability
- Professional interview-ready content

Make it detailed, practical, and interview-ready. Include specific examples and technical details.` }] }],
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 1500,
            },
          }),
        }
      );
      
      console.log('Gemini API response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Gemini API response data:', data);
        const answer = data.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (answer) {
          console.log('✅ Got answer from Gemini API');
          ANSWER_BANK[question] = answer;
          return answer;
        } else {
          console.log('❌ No answer text in Gemini response');
        }
      } else {
        const errorData = await response.text();
        console.log('❌ Gemini API error:', errorData);
      }
    } else {
      console.log('❌ No Gemini API key found');
    }
    
    // Fallback to OpenAI if Gemini fails
    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
    if (OPENAI_API_KEY) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: 'You are an expert technical interviewer. Provide comprehensive, detailed answers for interview questions with clear explanations, code examples, best practices, and real-world usage. Format with bullet points and make it interview-ready and professional.'
              },
              {
                role: 'user',
                content: `Provide a detailed answer for this interview question: "${question}"`
              }
            ],
            max_tokens: 1000,
            temperature: 0.3,
          }),
        });
        
        if (response.ok) {
          const data = await response.json();
          const answer = data.choices?.[0]?.message?.content;
          
          if (answer) {
            ANSWER_BANK[question] = answer;
            return answer;
          }
        }
      } catch (error) {
        console.log('OpenAI failed, using pattern matching:', error);
      }
    }
    
    // If both APIs fail, use pattern matching
    const basicAnswer = generateBasicAnswer(question);
    ANSWER_BANK[question] = basicAnswer;
    return basicAnswer;
  } catch (error) {
    console.error('Error getting answer:', error);
    // Fallback to basic answer generation
    const basicAnswer = generateBasicAnswer(question);
    ANSWER_BANK[question] = basicAnswer;
    return basicAnswer;
  }
}