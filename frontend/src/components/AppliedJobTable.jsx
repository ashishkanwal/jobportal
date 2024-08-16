import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

const AppliedJobTable = () => {
  return (
    <div>
        <Table>
            <TableCaption> 
                 A list of your | applied jobs
            </TableCaption>
            <TableHeader>
                <TableRow>
                   
                <TableHead>Date</TableHead>
                <TableHead>Jobrole</TableHead>
                <TableHead> Company</TableHead>
                <TableHead className='text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
                          <TableBody>
                            {

                            [1,2,3,4,].map((item, index)=>(
                                <TableRow key={index}>
                                    <TableCell>16-8-2024</TableCell>
                                    <TableCell>16-8-2024</TableCell>
                                    <TableCell>16-8-2024</TableCell>
                                    <TableCell>16-8-2024</TableCell>
                                </TableRow>

                            ))
                            }
                          </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable