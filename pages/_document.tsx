import Document, {
   Html,
   Head,
   Main,
   NextScript
} from 'next/document';


class CustomDocument extends Document {

   HTMLContent = () => (
      <Html lang="en">
         <Head>
            <link rel="shortcut icon" href="favicon.png" type="image/png" />
            <meta name="description" content="Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes"/>
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" as="style" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );

   render() {
      return <this.HTMLContent />
   }
}

export default CustomDocument;
