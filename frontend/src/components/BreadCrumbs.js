import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import React, { Component } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function BreadCrumbs(props) {
    const theme = useTheme();
    return (
        <Breadcrumbs aria-label="breadcrumb"separator={<NavigateNextIcon fontSize="small" />} sx={{marginTop: 12}}>
            {props.crumbs.map((breadcrumb, index) => (
                 <Link key={index} to={breadcrumb.active? breadcrumb.trigger:"#"} style={{
                    cursor: breadcrumb.active ? 'pointer':'default',
                    marginTop: "2px",
                    textDecoration: breadcrumb.active ? 'underline':'none',
                    letterSpacing: '.rem',
                    color: breadcrumb.active ? theme.palette.secondary.main:theme.palette.primary.main
                  }}>
                  {breadcrumb.name}
              </Link>
            ))}
        </Breadcrumbs>
    )
  
}
