import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ActionText from './ActionText';

type Props = {
  actionList: ActionList
}

const ActionTable: React.FC<Props> = ({actionList}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} sx={{bgcolor: "#CAEAFD", py: 1}}>
              <Typography variant="body1" component="h2" sx={{fontWeight: "bold"}}>{actionList.header}</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            actionList.items.map((value, index) => {
              return(
                <TableRow key={index}>
                  <TableCell sx={{py: 1, p: 1}}>
                    <Typography variant="body2" component="h2">
                      {
                        value.description.split(/(\n)/).map((text, index) => {
                          return (
                            <React.Fragment key={index}>
                              { text.match(/\n/) ? <br /> : text}
                            </React.Fragment>
                          )
                        })
                      }
                    </Typography>
                  </TableCell>
                  <TableCell sx={{bgcolor: "#F0F0F0", py: 1, p: 1}}>
                    <ActionText actions={value.actions} />
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ActionTable;