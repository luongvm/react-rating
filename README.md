# React Rating Float

A modern React component for displaying star ratings with floating-point number support. Built with TypeScript and Vite.

## Installation

```bash
npm install react-rating-float
```

## Usage

```tsx
import { ReactRatingFloat } from 'react-rating-float';

function App() {
  return <ReactRatingFloat rate={3.7} total={5} />;
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rate` | `number` | `0.5` | The rating value to display |
| `total` | `number` | `1` | Total number of stars |
| `raterDim` | `number` | `20` | Diameter of each star in pixels |
| `activeColor` | `string` | `#FFB600` | Color for filled portion of stars |
| `inactiveColor` | `string` | `#bebebe` | Color for empty portion of stars |
| `raterBg` | `string` | `#fff` | Background color for stars |

## Examples

### Basic Usage
```tsx
<ReactRatingFloat rate={3.7} total={5} />
```

### Custom Colors
```tsx
<ReactRatingFloat 
  rate={4.2} 
  total={5}
  activeColor="#ff6b6b"
  inactiveColor="#ddd"
  raterDim={30}
/>
```

## Development

```bash
# Install dependencies
npm install

# Run development server with example
npm run dev

# Build library
npm run build

# Run linting
npm run lint

# Type check
npm run type-check
```

## License

MIT
