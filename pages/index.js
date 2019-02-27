import Head from 'next/head';
import './index.scss';

export default () => (
  <div className='intro'>
    <Head>
      <title>Kinetifex</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <div className='content'>
      <h1>Andrew Gerard</h1>
      <div className='definition'>
        <h2>kinetifex <small>noun</small></h2>
        <div className='phonetics'>ki·​net·​ic <span>|</span> \ kə-ˈne-tə-ˌfeks \</div>
        <dl>
          <dt>Definition of <em>kinetifex</em></dt>
          <dd>: maker of motion</dd>
        </dl>
      </div>
      <p>
      More to come. For now see my <a href='https://www.linkedin.com/in/andrewgerard/'>linkedIn</a>.
      </p>
    </div>
  </div>
)
