'use client';
import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  IconButton,
  Container,
  Box
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import Link from 'next/link';
import { useCart } from './CartProvider';

export default function Header() {
  const { getTotalItems } = useCart();

  return (
    <AppBar position="static" elevation={2}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            Digital Store
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Button
              color="inherit"
              component={Link}
              href="/"
              sx={{ fontWeight: 600 }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              href="/shop"
              sx={{ fontWeight: 600 }}
            >
              Shop
            </Button>
            <IconButton
              color="inherit"
              component={Link}
              href="/cart"
              size="large"
            >
              <Badge badgeContent={getTotalItems()} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}