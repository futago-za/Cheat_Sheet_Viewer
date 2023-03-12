import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  actions: {type: string, value: string}[]
}

const Key: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <Box component="span"
      sx={{
        color: "#3F51B5",
        border: "solid #3F51B5",
        fontWeight: "bold",
        px: 1,
        py: 0.5,
        mx: 0.5,
        borderRadius: 1,
        bgcolor: "#FFF"
      }}
    >
      {children}
    </Box>
  )
}

const ActionText: React.FC<Props> = ({actions}) => {
  return (
    <Typography variant="body2" component="h2" sx={{ lineHeight: 2}}>
    {
      actions.map((value, index) => {
        return(
          value.type == "key" ? (
            <Key key={index}>
              {value.value}
            </Key>)
          : (
          <span key={index}>
            {
              value.value.split(/(\n)/).map((text, index) => {
                return (
                  <React.Fragment key={index}>
                    { text.match(/\n/) ? <br /> : text}
                  </React.Fragment>
                )
              })
            }
          </span>
          )
        )
      })
    }
    </Typography>
  )
}

export default ActionText;
