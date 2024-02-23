import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { Container,Card, Typography, TextField, FormControl, FormControlLabel, Radio, RadioGroup, Button, Grid, Select, MenuItem } from "@mui/material";
import { useDropzone } from "react-dropzone";

const languageOptions = [
    { value: "ar", label: "Arabic" },
    { value: "bn", label: "Bengali" },
    { value: "bg", label: "Bulgarian" },
    { value: "zh", label: "Chinese simplified and traditional" },
    { value: "hr", label: "Croatian" },
    { value: "cs", label: "Czech" },
    { value: "da", label: "Danish" },
    { value: "nl", label: "Dutch" },
    { value: "en", label: "English" },
    { value: "et", label: "Estonian" },
    { value: "fi", label: "Finnish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "el", label: "Greek" },
    { value: "iw", label: "Hebrew" },
    { value: "hi", label: "Hindi" },
    { value: "hu", label: "Hungarian" },
    { value: "id", label: "Indonesian" },
    { value: "it", label: "Italian" },
    { value: "ja", label: "Japanese" },
    { value: "ko", label: "Korean" },
    { value: "lv", label: "Latvian" },
    { value: "lt", label: "Lithuanian" },
    { value: "no", label: "Norwegian" },
    { value: "pl", label: "Polish" },
    { value: "pt", label: "Portuguese" },
    { value: "ro", label: "Romanian" },
    { value: "ru", label: "Russian" },
    { value: "sr", label: "Serbian" },
    { value: "sk", label: "Slovak" },
    { value: "sl", label: "Slovenian" },
    { value: "es", label: "Spanish" },
    { value: "sw", label: "Swahili" },
    { value: "sv", label: "Swedish" },
    { value: "th", label: "Thai" },
    { value: "tr", label: "Turkish" },
    { value: "uk", label: "Ukrainian" },
    { value: "vi", label: "Vietnamese" }
];

export default function Home() {
    const [pdfFile, setPdfFile] = useState(null);
    const [name, setName] = useState("");
    const [selectedFormat, setSelectedFormat] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");

    const onDrop = (acceptedFiles) => {
        setPdfFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: ".pdf",
        multiple: false
    });

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleFormatChange = (e) => {
        setSelectedFormat(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("File:", pdfFile);
        console.log("Name:", name);
        console.log("Selected Format:", selectedFormat);
        console.log("Selected Language:", selectedLanguage);
    };

    return (
        <>
            <Navbar />
            <Container maxWidth="md" style={{ margin: '20px' }}>
                {/* <Typography variant="h1" component="h1" gutterBottom>
                    Upload PDF
                </Typography> */}
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    row
                                    aria-label="format"
                                    name="format"
                                    value={selectedFormat}
                                    onChange={handleFormatChange}
                                >
                                    <FormControlLabel value="pdf" control={<Radio />} label="PDF" />
                                    <FormControlLabel value="audio" control={<Radio />} label="Audio" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <Button>
                                <div {...getRootProps()} style={{ cursor: 'pointer' }}>
                                    <input {...getInputProps()} />
                                    <Typography variant="body1" component="label" htmlFor="pdf-file">
                                        {pdfFile ? `File: ${pdfFile.name}` : 'Drag and drop or click here to upload PDF'}
                                    </Typography>
                                </div>
                                </Button>
                            </center>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="name"
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                fullWidth
                                label="Name (optional)"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Select
                                id="language"
                                value={selectedLanguage}
                                onChange={handleLanguageChange}
                                fullWidth
                                label="Language"
                            >
                                <MenuItem value="">Select Language</MenuItem>
                                {languageOptions.map(option => (
                                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Upload
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    );
}
