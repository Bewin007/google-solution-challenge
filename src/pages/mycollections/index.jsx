import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { Container, TextField, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

export default function MyCollection() {
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

    return (
        <>
            <Navbar />
            <Container maxWidth="md" style={{ marginTop: '20px' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Search by book name"
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ marginBottom: '20px' }}
                />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>S.No</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Published Date</TableCell>
                            <TableCell>Translated Date</TableCell>
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </>
    );
}
