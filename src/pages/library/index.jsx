import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { TextField, Table, TableHead, TableBody, TableRow, TableCell, Button } from "@mui/material";

export default function Library() {
    const [books, setBooks] = useState([
        { sno: 1, name: "Book 1", author: "Author 1", publishedDate: "2022-01-01", translatedDate: "2022-02-01" },
        { sno: 2, name: "Book 2", author: "Author 2", publishedDate: "2022-02-01", translatedDate: "2022-03-01" },
    ]);

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredBooks = books.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDownload = () => {
        // Add download functionality here
    };

    return (
        <>
            <Navbar />
            <div style={{ margin: '20px' }}>
                <TextField
                    type="text"
                    placeholder="Search by book name"
                    value={searchTerm}
                    onChange={handleSearch}
                    fullWidth
                    variant="outlined"
                    style={{ marginBottom: '10px' }}
                />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>S.No</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Published Date</TableCell>
                            <TableCell>Translated Date</TableCell>
                            <TableCell>Download</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredBooks.map((book) => (
                            <TableRow key={book.sno}>
                                <TableCell>{book.sno}</TableCell>
                                <TableCell>{book.name}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.publishedDate}</TableCell>
                                <TableCell>{book.translatedDate}</TableCell>
                                <TableCell>
                                    <Button onClick={handleDownload} variant="contained" color="primary">
                                        Download
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
