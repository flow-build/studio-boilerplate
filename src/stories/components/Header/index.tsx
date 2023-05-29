'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { HeaderProps } from './types';
import { Container } from '@mui/material';

export const Header: React.FC<HeaderProps> = ({ logo, links, button }) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Container>{logo}</Container>
        <Container style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {links.map((link, index) => (
            <Typography variant="h6" key={link.name}>
              <Link legacyBehavior href={link.url}>
                <a style={{ color: 'black', textDecoration: 'none' }}>{link.name}</a>
              </Link>
            </Typography>
          ))}
        </Container>
        <Button
          color="primary"
          variant="outlined"
          style={{ paddingLeft: 50, paddingRight: 50, textTransform: 'capitalize' }}
          onClick={button.onClick}
        >
          {button.name}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
