import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { Container, TextField, Table, TableHead, TableBody, TableRow, TableCell, Button } from "@mui/material";
import axios from "axios";

const downloadFile = async (url, fileName) => {
    try {
        const response = await axios.get(url, { responseType: 'blob' });
        const fileUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        return fileUrl;
    } catch (error) {
        console.error("Error downloading file:", error);
        return null;
    }
};

export default function MyCollection() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000");
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const filteredBooks = books.filter((book) =>
        book.book_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <Container maxWidth="md" style={{ marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={fetchData} style={{ marginBottom: '20px' }}>
                    Get Data
                </Button>
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
                            <TableCell>Download</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredBooks.map((book, index) => (
                            <TableRow key={book.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{book.book_name}</TableCell>
                                <TableCell>{book.author_name}</TableCell>
                                <TableCell>{book.published_date}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => downloadFile(book.converted, `download_${book.id}.pdf`)}
                                    >
                                        Download
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </>
    );
}
