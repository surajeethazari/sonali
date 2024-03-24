import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import React, { Component } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

export default function BreadCrumbs(props) {
    const theme = useTheme();
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{marginTop: 12}}>
            {props.crumbs.map((breadcrumb, index) => (
                 <Link key={index} to={breadcrumb.active? breadcrumb.trigger:"#"} style={{
                    cursor: breadcrumb.active ? 'pointer':'default',
                    marginTop: "2px",
                    textDecoration: 'none',
                    letterSpacing: '.rem',
                    color: breadcrumb.active ? theme.palette.secondary.main:theme.palette.primary.main,
                    textDecoration: 'none'
                  }}>
                  {breadcrumb.name}
              </Link>
            ))}
        </Breadcrumbs>
    )
  
}
