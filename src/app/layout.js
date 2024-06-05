// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Woodbae | Stunning Interior Designs',
  description: 'Discover stunning interior designs for modern living. Transforming spaces with elegance and style.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className='font-raleway'>{children}</body>
    </html>
  );
}
