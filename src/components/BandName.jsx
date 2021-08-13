import { useEffect, useState } from 'react';
import useFetch from '@bloodyaugust/use-fetch';
import styles from './BandName.module.css';

export default function BandName() {
  const { execute } = useFetch();
  const [loadBandName, setLoadBandName] = useState(true);
  const [bandName, setBandName] = useState('Loading a Good Band Name...');
  const [nameRandom, setNameRandom] = useState(false);

  useEffect(() => {
    const getBandName = async () => {
      setBandName('Loading a Good Band Name...')

      await execute(`https://8o9iyd7q3e.execute-api.us-east-1.amazonaws.com/production/${nameRandom ? 'random' : 'curated'}`)
        .then(({ json, mounted }) => {
          if (mounted) {
            setBandName(json.name);
            setLoadBandName(false);
          }
        });
    };

    if (loadBandName) {
      getBandName();
    }
  }, [loadBandName]);

  return (
    <div className={styles.container}>
      <span className={styles['band-name']}>{bandName}</span>
      {loadBandName
        ? <div className={styles.loader} />
        : <button type="button" onClick={() => { setLoadBandName(true); }}>Get A Good Band Name</button>
      }
      <div className={styles.toggle}>
        <span onClick={() => { setNameRandom(false) }}>Curated</span>
        <div className={styles.slider} onClick={() => { setNameRandom(!nameRandom) }}>
          <div className={`${styles.nub} ${nameRandom ? styles.right : ''}`}></div>
        </div>
        <span onClick={() => { setNameRandom(true) }}>Random</span>
      </div>
    </div>
  );
}
