# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

## Development Environment Setup

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn package manager
- Python 3.8+ (for some AI tools)
- Git
- Docker (for testing ROS 2 examples)

### Initial Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Update .env.local with your API keys and configuration
   ```

4. Install Docusaurus CLI:
   ```bash
   npm install -g @docusaurus/cli
   ```

## Local Development Workflow

### Running the Development Server
```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:3000`

### Adding New Content
1. Create new MDX files in the `/docs` directory following the specified structure:
   ```
   /docs
   ├── 01-module-1-ros2/
   │   ├── 01-introduction.mdx
   │   ├── 02-ros2-architecture.mdx
   │   └── ...
   ```

2. Add the new file to the sidebar configuration in `sidebars.js`

3. Include proper citations using APA 7th format:
   ```md
   According to recent research, embodied AI systems show promising results (Smith et al., 2024).
   ```

### Adding Interactive Elements
Include Spekit Plus elements in your MDX files:
```mdx
<!-- spekit:quiz -->
<!-- spekit:acknowledgment -->
<!-- spekit:video -->
```

### Working with the RAG System
1. Start the RAG API server:
   ```bash
   cd api
   npm run start
   ```

2. The API will be available at `http://localhost:4000`

3. Test the RAG functionality using the API endpoints defined in the contract

## Testing Procedures

### Running Tests
```bash
# Run all tests
npm test

# Run specific test suites
npm run test:unit
npm run test:integration
npm run test:e2e
```

### Content Validation
1. Word count validation:
   ```bash
   npm run validate:wordcount
   ```

2. Readability check:
   ```bash
   npm run validate:readability
   ```

3. Citation audit:
   ```bash
   npm run validate:citations
   ```

### Manual Testing Checklist
- [ ] All 13 chapters load correctly
- [ ] RAG chatbot responds to queries accurately
- [ ] PDF export includes all content elements
- [ ] Urdu translation works for all chapters
- [ ] Personalization features work correctly
- [ ] All interactive elements function properly
- [ ] All citations are properly formatted and linked

## Deployment Instructions

### Building for Production
```bash
npm run build
```

### Deploying to GitHub Pages
1. Configure your GitHub repository for GitHub Pages
2. Run the deployment script:
   ```bash
   npm run deploy
   ```

### Deploying RAG API to Vercel
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy the API:
   ```bash
   cd api
   vercel --prod
   ```

### Environment Variables for Production
- `OPENAI_API_KEY`: API key for GPT-4o
- `NEON_DATABASE_URL`: Database connection string
- `QDRANT_URL`: Qdrant vector database URL
- `GEMINI_API_KEY`: API key for Gemini-1.5-flash (optional)
- `BETTER_AUTH_SECRET`: Secret for Better-Auth
- `BETTER_AUTH_URL`: Public URL for authentication

## Troubleshooting

### Common Issues
1. **Docusaurus build fails**: Clear cache with `npm run clear`
2. **RAG chatbot not responding**: Check API keys and Qdrant connection
3. **Translation service errors**: Verify API keys and rate limits
4. **PDF export formatting**: Check Puppeteer configuration

### Performance Tips
- Use the `--swizzle` command to customize Docusaurus components
- Implement proper caching for API responses
- Optimize images and assets for web delivery
- Monitor bundle size to maintain fast loading times

## Project Structure
```
project-root/
├── docs/                 # Textbook content (MDX files)
├── src/                  # Custom React components
├── api/                  # RAG API server
├── contracts/            # API contracts (OpenAPI)
├── specs/                # Specification files
├── docusaurus.config.js  # Docusaurus configuration
├── sidebars.js          # Navigation sidebar
└── package.json         # Project dependencies
```