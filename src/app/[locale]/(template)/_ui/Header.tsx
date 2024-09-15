'use client';
import { useTranslations } from 'next-intl';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import {
  AppBar,
  Container,
  Toolbar,
  Typography
} from '@mui/material'

export default function Header() {
  const t = useTranslations('Header');
  let scrollTrigger = false;
  if (typeof window !== "undefined") {
    scrollTrigger = useScrollTrigger({
      threshold: window.innerHeight
    });
  }

  return (
    <AppBar
      component='header'
      elevation={0}
      variant='outlined'
      position={scrollTrigger ? 'fixed' : 'absolute'}
      color={scrollTrigger ? 'primary' : 'transparent'}
      sx={{
        backgroundColor: scrollTrigger ? 'var(--mui-palette-primary-dark)' : 'transparent'
      }}
    >
      <Container
        component={Toolbar}
      >
        <Typography
          component='p'
          variant='h6'
        >
          {t('title')}
        </Typography>
      </Container>
    </AppBar>
  )
}