import { Playfair_Display } from 'next/font/google'

import './globals.css'

//meta head html
export const metadata = {
  title: 'Catálogo SGVC',
  description: 'Seccion home del catalogo',
  keywords: "tienda, ecommerce, online",
}

// google fonts
const playfair = Playfair_Display({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"/>
      </head>
      <body className={playfair.className}>{children}
      </body>
    </html>
  )
}
