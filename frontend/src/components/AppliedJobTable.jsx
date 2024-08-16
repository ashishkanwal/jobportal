import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

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
                <TableHead>Job role</TableHead>
                <TableHead> Company</TableHead>
                <TableHead className='text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
                          <TableBody>
                            {

                            [1,2,3,4].map((item, index)=>(
                                <TableRow key={index}>
                                    <TableCell>16-8-2024</TableCell>
                                    <TableCell>Frontend Developer</TableCell>
                                    <TableCell>Google</TableCell>
                                    <TableCell className='text-right'><Badge className='rounded-md py-2 bg-green-500'>Selected</Badge></TableCell>
                                </TableRow>

                            ))
                            }
                          </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable