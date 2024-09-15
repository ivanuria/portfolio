import { useTranslations } from 'next-intl';
import usePortfolio from '@/src/controllers/data/usePortfolio';
import {
  Box,
  Container,
  Grid2,
  Typography
} from '@mui/material'

function PortfolioItem ({
  id,
  src,
}: Readonly<{
  id: string;
  src: string;
}>) {
  const t = useTranslations(id);
  return (
    <Box>
      <Grid2
        container
        alignContent='center'
        justifyContent='center'
        sx={{
          position: 'relative',
          width: '100%',
          height: 'calc(100svh - 64px)',
          backgroundColor: 'var(--mui-palette-secondary-light)',
        }}
      >
        <Box
          component='img'
          src={src}
          alt={t('alt')}
          width={1609}
          height={910}
          sx={{
            position: 'absolute',
            inset: 0,
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
            mixBlendMode: 'screen',
            filter: 'grayscale(75%) blur(2px)',
            opacity: '.75',
            zIndex: 1
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 2
          }}
        >
          <Typography
            component='h3'
            variant='h3'
          >
            {t('title')}
          </Typography>
        </Box>
      </Grid2>
    </Box>
  );
}

export default function Home() {
  const t = useTranslations('Home');
  const portfolio = usePortfolio();

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
      {portfolio.map(item =>
        <PortfolioItem
          key={item.id}
          id={item.id}
          src={item.src}
        />
      )}
    </>
  );
}
