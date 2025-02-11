import Navbar from './components/Navbar';
import './globals.css';

function RootLayout({ children }) { //use of props
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;