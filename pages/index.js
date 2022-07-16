import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {MainLayout} from '../Components/MainLayout'
import NewBc from '../Components/posts/NewBc'


export default function Index() {
  return (
    <MainLayout title={'Головна'}>
      
      <Head>
        <meta charSet="utf-8"/>
        <meta name="keywords" content="myths" />
        <meta name="description" content="textetxetxtetxetxtetxtetxetxet" />
     </Head>
        <header className={styles.hd50vw}>
              <div className={styles.hdRow}>
                 <h1>Hell Rounds</h1>
                 <h2>site about non-natural</h2>
              </div>
         </header>
        <section className={styles.bcDark}>
            <div className={styles.InxtopNews}>
                <h3>News</h3>
                  <h4>Unexplained things that make your skin tingle</h4>
            </div>

            <div className={styles.InxBcNews}>
                  <NewBc/>
                  <NewBc/>
                  <NewBc/>
                  <NewBc/>
                  <NewBc/>
                  <NewBc/>
                  <NewBc/>
                  <NewBc/>
                  <NewBc/>
                  <NewBc/>
            </div>

            <div className='btn-pd'><a onClick={()=>{Router.push('/news/')}} className='btn btn-5 btn-wh'>More news</a> </div>
        </section>

    </MainLayout>
  )
}
