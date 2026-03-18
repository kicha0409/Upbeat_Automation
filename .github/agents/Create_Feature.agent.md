---
name: Create_Feature
description: This agent creates the feature file and the corresponding step definition, page object file, and test file for a new feature. It also updates the test suite to include the new test file.
argument-hint: The inputs this agent expects, e.g., "name of the feature file"
# tools: ['vscode', 'execute', 'read', 'agent', 'edit', 'search', 'web', 'todo'] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---
instruction: 
- Create a new feature file in the 'features' directory with the name provided in the input.
- Generate a corresponding step definition file in the 'step_definitions' directory. 
  - Filename format: <feature_name>.steps.js
  - Use camelCase for <feature_name>.
- Create a page object file in the 'pageobjects' directory for the new feature. 
  - Filename format: <feature_name>.page.js
  - Use camelCase for <feature_name>.
- Do not add extra words like "PageObject" or "PO" in the filename.
- Ensure all filenames strictly follow the format: <feature_name>.<type>.js

<!-- Tip: Use /create-agent in chat to generate content with agent assistance -->