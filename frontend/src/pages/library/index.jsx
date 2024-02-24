import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import { TextField, Table, TableHead, TableBody, TableRow, TableCell, Button } from "@mui/material";
import axios from "axios";

export default function Library() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/library");
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDownload = async (fileUrl) => {
        try {
            const response = await axios.get(fileUrl, {
                responseType: "blob", // Set the responseType to blob
            });
            // Create a temporary URL for the blob
            const url = window.URL.createObjectURL(new Blob([response.data]));
            // Create a temporary link element
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "file.pdf"); // Set the download attribute
            document.body.appendChild(link);
            // Trigger the click event to start the download
            link.click();
            // Remove the temporary link element
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };

    const filteredBooks = books.filter((book) =>
        book.book_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        {filteredBooks.map((book, index) => (
                            <TableRow key={book.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{book.book_name}</TableCell>
                                <TableCell>{book.author_name}</TableCell>
                                <TableCell>{book.published_date}</TableCell>
                                <TableCell>{book.date}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleDownload(book.file)} variant="contained" color="primary">
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
