import { useTranslations } from 'next-intl';
import {
  Container,
  Typography
} from '@mui/material'
// Components
import Portfolio from './_components/Portfolio';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <Container>
        <Typography
          variant='h2'
          component='h1'
          sx={{
            position: 'relative',
            width: '100%',
            height: 'calc(100svh + 64px)',
          }}
        >{t('title')}</Typography>
      </Container>
      <Portfolio />
    </>
  );
}
