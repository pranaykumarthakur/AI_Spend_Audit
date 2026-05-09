# System Architecture

## Data Flow
```mermaid
graph LR
    A[User Input Form] --> B[Local Storage Persistence]
    B --> C[Audit Engine Logic]
    C --> D[Audit Results Page]
    D --> E[Email Gate]
    E --> F[Supabase Database]
    F --> G[Anthropic API Summary]