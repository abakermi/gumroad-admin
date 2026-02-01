# Gumroad Admin CLI 💸

A command-line tool for managing your Gumroad store. Built as an OpenClaw skill.

## Installation

```bash
npm install
npm run build
```

## Setup

1. Get your Access Token from Gumroad (Settings > Advanced > Applications)
2. Set the environment variable:

```bash
export GUMROAD_ACCESS_TOKEN="your_token"
```

Or create a `.env` file:

```
GUMROAD_ACCESS_TOKEN=your_token
```

## Usage

### List Products

View all products in your Gumroad store:

```bash
npm start -- products
# or after global install
gumroad-admin products
```

Output shows product ID, name, price, and published status (🟢 published / 🔴 unpublished).

### List Recent Sales

View your recent sales:

```bash
npm start -- sales
# or
gumroad-admin sales
```

Output shows date, amount, product name, and customer email for each sale.

## Development

```bash
# Build TypeScript
npm run build

# Run directly
npm start -- <command>
```

## Requirements

- Node.js 18+
- Gumroad Access Token

## License

MIT
