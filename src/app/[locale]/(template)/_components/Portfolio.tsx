import { useTranslations } from 'next-intl';
import usePortfolio from '@/src/controllers/data/usePortfolio';
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Grid2,
  Typography
} from '@mui/material'

export function PortfolioItem ({
  id,
  src,
  href
}: Readonly<{
  id: string;
  src: string;
  href: string;
}>) {
  const t = useTranslations(id);
  return (
    <Box
      component='a'
      href={href}
      target='_blank'
      width='100%'
      sx={{
        textDecoration: 'none'
      }}
      color='primary'
    >
      <Grid2
        container
        className='portfolio-item'
        alignContent='center'
        justifyContent='center'
        sx={{
          position: 'relative',
          width: '100%',
          height: 'calc(100svh - 64px)',
          //backgroundColor: 'white',
          cursor: 'pointer',
          '&:hover > .portfolio-item__image, &:focus > .portfolio-item__image': {
            //mixBlendMode: 'screen',
            filter: 'grayscale(50%) blur(10px)',
            opacity: '.3'
          },
          '&:hover > .portfolio-item__information, &:focus > .portfolio-item__information': {
            opacity: 1
          }
        }}
      >
        <Box
          className='portfolio-item__image'
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
            zIndex: 1,
            transition: '.2s linear'
          }}
        />
        <Box
          className='portfolio-item__information'
          component={Container}
          sx={{
            position: 'relative',
            width: '100%',
            zIndex: 2,
            opacity: 0,
            transition: '.2s linear'
          }}
        >
          <Typography
            component='h3'
            variant='h3'
            textAlign='center'
            sx={{
              textDecoration: 'underline',
              textUnderlineOffset: 3,
              textDecorationThickness: 6,
              textDecorationSkipInk: 'auto'
            }}
          >
            {t('title')}
          </Typography>

            {JSON.parse(t('extract')).map(
              (extract:string) =>
              <Typography
                key={extract}
                component='p'
                fontSize='2rem'
                textAlign='center'
                sx={{
                  paddingBlock: '1rem'
                }}
              >
                {extract}
              </Typography>
            )}
        </Box>
      </Grid2>
    </Box>
  );
}

export default function Portfolio() {
  const portfolio = usePortfolio();
  return (
    <List
      sx={{
        padding: 0,
      }}
    >
      {portfolio.map(item =>
      <ListItem
        key={item.id}
        sx={{
          padding: 0,
        }}
      >
        <PortfolioItem
          id={item.id}
          src={item.src}
          href={item.href}
        />
        </ListItem>
      )}
    </List>
  );
}