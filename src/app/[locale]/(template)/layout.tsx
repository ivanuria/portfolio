import Header from "./_ui/Header";

import {
  Box,
  Container
} from '@mui/material'

export default function layout(
  { children }:
    Readonly<{
    children: React.ReactNode;
    params: {locale: string};
  }>
) {
  return (
    <>
      <Header></Header>
      <Box
        component='main'
        sx={{
          marginBlockStart: '88px'
        }}
      >
        {children}
      </Box>
    </>
  )
}