import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { styled } from '@mui/material/styles';
import { Paper, Grid, MenuItem, Select, SelectChangeEvent, FormControl } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#171525',
  padding: theme.spacing(1),
  height: 120,
  color: '#fff'
}));


export default function Home() {
  const [tech, setTech] = useState('Blockchain');

  const handleChange = (event: SelectChangeEvent) => {
    setTech(event.target.value as string);
  };

  return (
    <>
      <Head>
        <title>Luna Times</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid className={styles.header} container spacing={3}>
        <Grid item xs={3}>
          <Item elevation={0}>
            <Image
              src={'/logo.png'}
              alt={'logo'}
              width={120}
              height={100}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item elevation={0}>xs=8</Item>
        </Grid>
        <Grid item xs={3}>
          <Item elevation={0} style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <FormControl sx={{ m: 1, width: 220, }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tech}
                onChange={handleChange}
                autoWidth
                className={styles.selectStyle}
              >
                <MenuItem className={styles.menuItemStyle} value={'Blockchain'}>Blockchain</MenuItem>
                <MenuItem className={styles.menuItemStyle} value={'HyperLedger'}>Hyper Ledger</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>
      </Grid>
      <main className={styles.main}>
        <div className={styles.center}>

        </div>
      </main>
    </>
  )
}